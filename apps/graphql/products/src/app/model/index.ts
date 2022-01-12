import { model, Schema } from 'mongoose';
import aggregatePaginate from 'mongoose-aggregate-paginate-v2';
import { SCHEMA_NAME } from '@jade/graphql/base';
import { IProduct, IProductImage } from '../types';
import {
  ProductBrandSchema,
  ProductImageSchema,
  ProductPricingSchema,
  ProductRatingSchema,
  ProductShippingSchema,
  ProductUoMSchema,
} from './sub-schemas';


const productSchema = new Schema({
  // SKU or Stock Keeping Unit is a unique identifer for your product that
  // doesn't depends on how you uniquely identify a product in a database/table.
  // In a way, having this makes a product DB/Storage agnostic, and thus
  // in-effect perfectly suitable to be used as an identifier in externally
  // managed inventory management systems, or to carry out migrations worry-free
  sku: {
    type: String,
    required: true,
  },
  // `title` is the name your product is known by
  title: {
    type: String,
    required: true,
  },
  // A short form description that talks about your product briefly. Useful in
  // non-PDP pages to make the product information appear a bit  rich
  shortDescription: {
    type: String,
  },
  // `description` is your product's full description and will support RTF(Rich Text Format)
  // to cater to different kind of information in a description
  description: {
    type: [String],
  },
  // `images` contains all of the images that are associated your product. The
  // first image is considered the default image of the product by convention if
  // no other images are present. If present, `isDefault` key is used to identify
  // the default image.
  // This structure was intoduced to make image authoring experience better, while
  // giving a consistent key to look up images and making it more extensible to future
  // needs. Individual `image` schema can be enhanced further to support stuff like `featured`
  // images that might be differ from `default` in several scenarios
  // NOTE #1: This does not takes the flexibility offered by something like `defaultImageUrl` or
  // or `defaultImageAlt` as those could be still be provided by sugar methods
  // (a.k.a Mongoose virtual keys) if needed
  // NOTE #2: It's the job of the system to ensure that there's always a single default image
  // associated with the product
  images: { // product images
    type: [ProductImageSchema],
  },
  // `pricing` holds the pricing details of your schema with `list` indicating the price your
  // product is available at, and `retail` indicating it's actual price
  // A difference of `retail - list` should provide you with the discount available on a product
  // This will be the most used structure to show pricing details and discounts on a product
  //
  // `pricing` also have a `special` key which is there for time based discounts
  pricing: {
    type: ProductPricingSchema
  },
  //  Product shipping details
  shipping: {
    type: ProductShippingSchema
  },
  // `unitOfMeasure` contains details of a unit of a product wherever it's applicable.
  // Clothing items, or edible stuff like flour, rice won't have this populated but
  // if you sell eggs, laddoos, or things in pairs or sets, this might prove to be a
  // very useful field
  // Ex: If you're selling Fruit & Vegatable(wash) always in pair, you might wanna provide
  // detail as unitType -> "ml", minQty -> 2 (default is 1), price -> X.X (each item), `displayText` -> 2x 200ml (customizable label)
  unitOfMeasure: {
    type: ProductUoMSchema
  },
  brand: {
    type: ProductBrandSchema
  },
  categories: {
    type: [String]
  },
  productUrl: {
    type: String,
    required: true,
  },
  // This is most probably redundant now and @TODO: to be removed
  // in favor of SKUs
  baseProductId: {
    type: String,
  },
  displayType: { // product display type i.e. display-type-1, display-type-2,
    type: String,
  },
  productType: { // product type i.e. t-shirt, pants, belt
    type: String,
  },
  // This is your product's maximum orderable quantity which defaults to `0` for unlimited,
  // but to let your products be available to your customer evenly, till the stock lasts you
  // might wanna limit this to a well-balanced value
  maxQuantityAllowed: {
    type: Number,
    default: 0
  },
  // Marking this truthy enables/allows your product to be listed in the store. This is more of a
  // content authoring field, and should be kept falsy till all of the sufficient product details
  // are not available with product (in your view)
  isForSale: {
    type: Boolean,
  },
  // Tags are labels associated with products that help you specially highlight few important
  // properties/characterstics of a product, making them more interesting to different user
  // segments
  // Marketing Tags: These tags are usually associated with a product to make them
  // stand out i.e. values: "New", "Special Buy", "Best Value"
  // They may or may not be be derived/computed based on some other product properties
  marketingTags: {
    type: [String]
  },
  // Shipping Tags: These tags are associated to indicate reach-ability related properties
  // and helps user get a hint of the shipping time, delivery or cost related information his
  // shopping/browsing experience may be driven by. Few of the values this could take are
  // "Free delivery", "Free pickup", "1 day delivery", "2 day delivery", "3 day delivery"
  shippingTags: {
    type: [String]
  },
  // `rating` indicates the total `value`(ratings) against a product and `count` of the people
  // who have rated it.
  // NOTE: This value should always be computed/applied on each new rating.
  // NOTE: Never accept this as direct input, or allow the user to directly provide it on
  // product model, until you have something in place that calculates the correct value
  // before they get retained in the DB
  rating: {
    type: ProductRatingSchema
  }
});

productSchema.virtual('defaultImage')
  .get(function () {
    return this.images.map((image: IProductImage) => image.isDefault === true)
  });

productSchema.plugin(aggregatePaginate);

export default model<IProduct>(SCHEMA_NAME.PRODUCT, productSchema);
