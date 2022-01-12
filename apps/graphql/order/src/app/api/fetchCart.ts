import { IBag, ICartDetails, IOffer } from '../types';
import CartModel from '../model';

export const fetchCart = async (
  addedBy: string,
  dataSources: any,
  offers?: IOffer,
): Promise<IBag> => {
  // GET THE CART INFORMATION FOR A PARTICULAR USER
  const cartInformationForUser = await CartModel.find({ addedBy });

  const listOfProductsPromises = cartInformationForUser.map(
    async el => await dataSources.productFetch.getProductById(el.productId),
  );

  //CALCULATE OVER LIST PRICE
  const listOfProducts = await Promise.all(listOfProductsPromises);

  const cartDetails: Array<ICartDetails> = [];

  listOfProducts.map(product => {
    const { data } = product;
    const { fetchProduct } = data;
    const { sku, pricing } = fetchProduct;
    const { list } = pricing;

    const findProductInCart = cartInformationForUser.find(cart => cart.productId === sku);

    const { id, productId, quantity } = findProductInCart;

    cartDetails.push({
      id: id,
      addedBy,
      productId: productId,
      quantity: quantity,
      itemTotal: quantity * list,
    });
  });

  let grandTotal: number,
    discountedPrice: number = 0;
  let bagTotal = (grandTotal = cartDetails.reduce((acc, curr) => acc + curr.itemTotal, 0));

  if (offers) {
    const { promotionType, reward } = offers;

    if (promotionType === 'AmountOff') {
      discountedPrice = reward?.amountOff;
    } else {
      let discountAmount = (bagTotal * reward?.percOff ?? 0) / 100;
      let maxDiscountAmount = reward?.maxDiscount ?? 0;

      if (maxDiscountAmount === 0) {
        discountedPrice = discountAmount;
      } else {
        discountedPrice = discountAmount > maxDiscountAmount ? maxDiscountAmount : discountAmount;
      }
    }
  }

  grandTotal = bagTotal - discountedPrice;

  const totalBagInfo: IBag = {
    bag: cartDetails,
    bagTotal,
    grandTotal,
    discountedPrice,
  };

  return totalBagInfo;
};
