const ProductShippingDimensionsSchema = {
  width: {
    type: Number
  },
  height: {
    type: Number
  },
  depth: {
    type: Number
  },
}
export const ProductShippingSchema = {
  weight: {
    type: Number
  },
  dimensions: ProductShippingDimensionsSchema
}
