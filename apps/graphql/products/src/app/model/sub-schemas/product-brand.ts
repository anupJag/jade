
export const ProductBrandSchema = {
  name: {
    type: String,
    required: true
  },
  brandType: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  disclaimer: {
    type: String,
    default: ''
  },
  manufacturerDetails: {
    type: String,
    default: ''
  },
  // could have more properties
}
