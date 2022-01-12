import { IPLP, IPLPUrlParsedQueries } from '../types';
import ProductModel from '../model';
import { generateFilters } from '@jade/utils';
import { PER_PAGE_LIMIT } from '@jade/graphql/base';

let mockFilters = {};

export const getPLPData = async ({
	listCategory,
	searchText,
	page,
	sortStyle,
	sortType,
	priceRange,
	rating,
	brands,
	deliveryType,
	discount,
	reviewCount
}: IPLPUrlParsedQueries): Promise<IPLP> => {
	/**
	 * TODO: To be deleted when actual filters are available.
	 * This is the mock filter template generator
	 */
	mockFilters = await generateFilters();
	const options = {
		page,
		limit: PER_PAGE_LIMIT,
	};

	let embadedQuery: any = searchText ? {
		title: { $regex: `${searchText}`, $options: 'i' },
	  } : { productType: listCategory };

	if (priceRange) {
		const start = priceRange.split(',')[0]
		const end = priceRange.split(',')[1]
		if (start === '*') {
			embadedQuery = { ...embadedQuery, 'pricing.list': { $lte: parseFloat(end) } };
		} else if (end === '*') {
			embadedQuery = { ...embadedQuery, 'pricing.list': { $gt: parseFloat(start) } };
		} else {
			embadedQuery = { ...embadedQuery, 'pricing.list': { $gt: parseFloat(start), $lte: parseFloat(end) } };
		}
	}

	if (rating) {
		embadedQuery = { ...embadedQuery, 'rating.value': parseInt(rating) };
	}

	if (reviewCount) {
		const start = reviewCount.split(',')[0]
		const end = reviewCount.split(',')[1]
		if (start === '*') {
			embadedQuery = { ...embadedQuery, 'rating.count': { $lte: parseInt(end) } };
		} else if (end === '*') {
			embadedQuery = { ...embadedQuery, 'rating.count': { $gt: parseInt(start) } };
		} else {
			embadedQuery = { ...embadedQuery, 'rating.count': { $gt: parseInt(start), $lte: parseInt(end) } };
		}
	}

	if (brands) {
		const brandsQuery = brands.split(',').map(name => ({'brand.name': name})); // [{ 'brand.name': 'Auer Inc' }, { 'brand.name': 'Littel LLC' }]
		embadedQuery = { ...embadedQuery, $or: [...brandsQuery] };
	}

	if (deliveryType) {
		const deliveryTypeQuery = deliveryType.split(',').map(name => name); // ["Free Deliver", "Free Pickup"]
		embadedQuery = { ...embadedQuery,  shippingTags: {$all: [...deliveryTypeQuery]}};
	}

	if (discount) {
		const start = discount.split(',')[0]
		const end = discount.split(',')[1]
		if (start === '*') {
			embadedQuery = { ...embadedQuery, 'pricing.specail': {$elemMatch: {percentageSavings: { $lte: parseInt(end) }}} };
		} else if (end === '*') {
			embadedQuery = { ...embadedQuery, 'pricing.specail': {$elemMatch: {percentageSavings: { $gt: parseInt(start) }}} };
		} else {
			embadedQuery = { ...embadedQuery, 'pricing.specail': {$elemMatch: {percentageSavings: { $gt: parseInt(start), $lte: parseInt(end) }}} };
		}
	}

	// Aggregation pipeline for filtering the data based on productType
	// and Sorting based on type and style passed
	const aggregationPipeline = ProductModel.aggregate([
		{ $match: embadedQuery },
		{ $sort: { [sortType]: sortStyle } }
	]);

	return ProductModel
		// @ts-ignore
		.aggregatePaginate(aggregationPipeline, options, (err, result) => { 
			if (err) {
				return {
					filters: [],
					products: [],
					pagination: {}
				};
			}

			const { docs, ...rest } = result;
			return {
				...mockFilters,
				products: [
					...docs
				],
				pagination: {
					...rest
				}
			};
		}) as IPLP;
};
