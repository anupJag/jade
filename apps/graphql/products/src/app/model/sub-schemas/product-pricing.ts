const ProductPricingSpecialSchema =  {
  price: {
    type: Number
  },
  from: {
    type: Date
  },
  to: {
    type: Date
  },
  amountSavings: {
    type: Number
  },
  percentageSavings: {
    type: Number
  }
}

export const ProductPricingSchema = {
  list: {
    type: Number,
    required: true
  },
  retail: {
    type: Number,
    required: true
  },
  special: [ ProductPricingSpecialSchema ]
}
