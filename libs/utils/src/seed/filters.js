const config = {
    BRAND_VALUE: ["Purdy Group", "Towne Inc", "Witting Group", "Johns and Sons", "Schumm Inc", "Torp and Sons", "Mills and Sons", "Reilly and Sons", "Stoltenberg LLC", "Feest Inc"],
    RATING_VALUE: ["2", "3", "4", "5"],
    PRICE_RANGE: ["10", "100", "500", "999"],
    DISCOUNT_RANGE: ["10", "15", "25"],
    REVIEW_COUNT_RANGE: ["10", "50", "100"],
    SHIPPING_TAGS: ["Free delivery", "Free pickup", "1 day delivery", "2 day delivery", "3 day delivery"],
    CATEGORIES: ['fullCreamMilk', 'tonedMilk', 'cowMilk', 'tetraMilk', 'flavouredMilk', 'veganMilk', 'leafyVeg', 'exoticVeg', 'vegetables', 'curd', 'paneer', 'butter', 'ghee', 'bread', 'eggs', 'cocoWater', 'cookies', 'rusk', 'biscuits', 'pasta', 'noodles', 'soups', 'tea', 'coffee', 'normalPhone', 'smartPhone', 'smartTV', 'normalTV'],
    FILTERS: ['category', 'price', 'rating', 'brand', 'shippingTags', 'reviewCount'],
    FILTERS_DISPLAY_NAME: {
        category: 'Categories',
        price: 'Price',
        brand: 'Brands',
        rating: 'Ratings',
        discount: 'Discount',
        shippingTags: 'Delivery Type',
        reviewCount: 'By Review Counts'
    }
};

const generateRangeFilterData = (data) => {
    const rangeData = [];
    const len = data.length;
    for(var i = 0; i < len; i++) {
        rangeData.push({
            start: i === 0 ? "*" : data[i-1],
            end: data[i]
        });
    }
    rangeData.push({
        start: data[len-1],
        end: "*"
    });
    return {
        type: "range",
        range: rangeData
    }
}

const generateValueData = (data) => {
    return {
        type: "value",
        range: data.map(item => ({
            label: item,
            value: item
        }))
    }
}

const generateRangeType = (item) => {
    switch (item) {
        case 'category':
            return generateValueData(config.CATEGORIES);
        case 'shippingTags':
            return generateValueData(config.SHIPPING_TAGS);
        case 'reviewCount':
            return generateRangeFilterData(config.REVIEW_COUNT_RANGE);
        case 'discount':
            return generateRangeFilterData(config.DISCOUNT_RANGE);
        case 'rating':
            return generateValueData(config.RATING_VALUE);
        case 'brand':
            return generateValueData(config.BRAND_VALUE);
        case 'price':
            return generateRangeFilterData(config.PRICE_RANGE);
    }
}

export const generateFilters = async () => {
    const filters = [];
    config.FILTERS.forEach(item => {
        filters.push({
            displayName: config.FILTERS_DISPLAY_NAME[item],
            key: item,
            type: generateRangeType(item).type,
            range: generateRangeType(item).range
        })
    });
    return {filters};
}
