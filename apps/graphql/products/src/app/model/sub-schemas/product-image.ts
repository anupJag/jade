export const ProductImageSchema = {
  url: {
      type:String,
      required: true
  },
  altText: {
      type:String,
      required: true
  },
  isDefault:{
      type: Boolean,
      default: false
  }
};
