export type ProductDetails = {
  id: number;
  imageUrl: string;
  imageAlt: string;
  title: string;
  formattedPrice: string;
  priceUnit: string;
  reviewCount: number;
  rating: number;
  onSale: boolean;
};

export type ProductProps = {
  product: ProductDetails;
};
