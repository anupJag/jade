/**
 * This file is to generate mock product data.
 */
import faker from 'faker';

const config = {
  SEED_COUNT: 1000,
  MARKETING_TAGS: ['New', 'Special Buy', 'Best Value'],
  SHIPPING_TAGS: [
    'Free delivery',
    'Free pickup',
    '1 day delivery',
    '2 day delivery',
    '3 day delivery',
  ],
  MAX_QUANTITY: 10,
  DISPLAY_TYPE: ['d1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9'],
  UNIT_OF_MEASURE: ['ml', 'Box', 'Gram', 'Piece', 'Kilo', 'Liter', 'Pack'],
  CATEGORIES: [
    'fullCreamMilk',
    'tonedMilk',
    'cowMilk',
    'tetraMilk',
    'flavouredMilk',
    'veganMilk',
    'leafyVeg',
    'exoticVeg',
    'vegetables',
    'curd',
    'paneer',
    'butter',
    'ghee',
    'bread',
    'eggs',
    'cocoWater',
    'cookies',
    'rusk',
    'biscuits',
    'pasta',
    'noodles',
    'soups',
    'tea',
    'coffee',
    'normalPhone',
    'smartPhone',
    'smartTV',
    'normalTV',
  ],
  BRAND_VALUE: [
    'Purdy Group',
    'Towne Inc',
    'Witting Group',
    'Johns and Sons',
    'Schumm Inc',
    'Torp and Sons',
    'Mills and Sons',
    'Reilly and Sons',
    'Stoltenberg LLC',
    'Feest Inc',
  ],
};

const {
  lorem: { sentence, paragraph },
  random: { boolean, number, arrayElement, arrayElements },
  date,
  company,
  address: { city, state, country, zipCode },
  phone,
  finance: { amount },
} = faker;

const generateProductImages = productType => {
  const url = `https://source.unsplash.com/640x480/?${productType}`;
  return [
    { url, altText: sentence(1), isDefault: true },
    ...arrayElements([
      { url, altText: sentence(2), isDefault: false },
      { url, altText: sentence(3), isDefault: false },
      { url, altText: sentence(4), isDefault: false },
    ]),
  ];
};

const generateDescription = () => {
  return arrayElements([paragraph(), paragraph(), paragraph(), paragraph()]);
};

const generateProductPricing = () => {
  const listingPrice = amount(10, 999, 2);
  const retailPrice = listingPrice + amount(0, 10, 2);
  const specialPrice = amount(1, listingPrice, 2);
  const totalSavings = listingPrice - specialPrice;
  const amountSavings = amount(totalSavings, totalSavings, 2);
  const percentageSavings = (amountSavings / listingPrice) * 100;
  return {
    list: listingPrice,
    retail: retailPrice,
    special: {
      price: specialPrice,
      from: date.between('2019-01-01', '2019-12-31'),
      to: date.between('2020-05-22', '2020-12-22'),
      amountSavings,
      percentageSavings,
    },
  };
};

const generateProductShipping = () => {
  const numberWithPrecision = { min: 10, max: 40, precision: 0.01 };
  return {
    weight: number({ min: 1, max: 10, precision: 0.01 }),
    dimensions: {
      width: number(numberWithPrecision),
      height: number(numberWithPrecision),
      depth: number(numberWithPrecision),
    },
  };
};

const generateProductUoM = () => {
  const _UoM = arrayElement(config.UNIT_OF_MEASURE);
  return {
    unitType: _UoM,
    minQty: number({ min: 1, max: 10 }),
    price: amount(10, 999, 2),
    displayText: `${number({ min: 1, max: 10 })}x${number({ min: 1, max: 200 })} ${_UoM}`,
  };
};

const generateProductBrand = () => {
  const category = arrayElement(config.CATEGORIES);
  return {
    name: config.BRAND_VALUE[Math.floor(Math.random() * (config.BRAND_VALUE.length - 1))],
    brandType: category,
    description: `Deals in ${category} products. ${sentence()}`,
    disclaimer: paragraph(),
    manufacturerDetails: `${city()}, ${state()}, ${country()}, ${zipCode()}. Phone-${phone.phoneNumberFormat(
      1,
    )}`,
  };
};

const generateProductCategoryList = () => {
  const categoryIdSetting = { min: 1000000, max: 9999999 };
  return arrayElements([
    `${number(categoryIdSetting)}`,
    `${number(categoryIdSetting)}`,
    `${number(categoryIdSetting)}`,
    `${number(categoryIdSetting)}`,
  ]);
};

const generateProductRating = () => {
  return {
    value: number({ min: 1, max: 5 }),
    count: number({ min: 0, max: 1000 }),
  };
};

const generateProductTitle = productType => {
  return `${productType} - ${sentence(3)}`;
};

export const generateProducts = async () => {
  const products = [];
  for (let id = 1; id <= config.SEED_COUNT; id++) {
    const sku = `SKU-${number({ min: 1000000, max: 9999999 })}`;
    const productQuantity = number({ min: 1, max: config.MAX_QUANTITY });
    const productType = arrayElement(config.CATEGORIES);
    products.push({
      sku,
      title: generateProductTitle(productType),
      shortDescription: sentence(),
      description: generateDescription(),
      images: generateProductImages(productType),
      pricing: generateProductPricing(),
      shipping: generateProductShipping(),
      unitOfMeasure: generateProductUoM(),
      brand: generateProductBrand(),
      categories: generateProductCategoryList(),
      productUrl: `/p/${sku}`,
      baseProductId: sku,
      displayType: arrayElement(config.DISPLAY_TYPE),
      productType,
      maxQuantityAllowed: productQuantity,
      isForSale: boolean(),
      marketingTags: arrayElements(config.MARKETING_TAGS),
      shippingTags: arrayElements(
        config.SHIPPING_TAGS.slice(
          0,
          Math.floor(Math.random() * (config.SHIPPING_TAGS.length - 1)),
        ),
      ),
      rating: generateProductRating(),
    });
  }
  return products;
};
