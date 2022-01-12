import React, { useContext, useEffect, useState, createContext } from 'react';
import { NextPage } from 'next';
import { useLazyQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';
import Layout from '../../components/templates/layout';
import { Head } from '@jade/ui/molecules';
import ReviewBasket from '../../components/organisms/review-basket/review-basket';
import DeliveryOptions from '../../components/organisms/delivery-options/delivery-options';
import OrderSummary from '../../components/organisms/order-summary/order-summary';
import PaymentOptions from '../../components/organisms/payment-options/payment-options';
import OrderConfirmation from '../../components/organisms/order-confirmation/order-confirmation';
import { getCookie } from '@jade/utils';
import {
  getCartDetailsVarFn,
  QUERY_CART_DETAILS,
  getApplicablePromotionsFn,
  QUERY_APPLICABLE_PROMOTIONS,
} from '../../../../libs/ui/organism/src/lib/cart/queries';
import { Context as GlobalContext } from '@jade/store';

type Props = {
  slug: string;
};

const getMainComponent = (slug: string, data: any, refetch, promoData: any, applyPromo) => {
  switch (slug) {
    case 'review-basket':
      return (
        <ReviewBasket data={data} promoData={promoData} refetch={refetch} applyPromo={applyPromo} />
      );
    case 'delivery-options':
      return <DeliveryOptions />;
    case 'order-summary':
      return <OrderSummary data={data} />;
    case 'payment-options':
      return <PaymentOptions />;
    case 'order-confirmation':
      return <OrderConfirmation />;
    default:
      return (
        <ReviewBasket data={data} promoData={promoData} refetch={refetch} applyPromo={applyPromo} />
      );
  }
};

interface IApplyPromotion {
  promotionType?: string;
  reward?: {
    percOff?: number;
    amountOff?: number;
    maxDiscount?: number;
  };
}

enum UpdateContextTypes {
  PROMOTION,
  SLOT,
  ADDRESS,
}

interface ICartPageContext {
  appliedPromotion: any;
  slotSelected: any;
  addressSelected: any;
  updateContext: (type: keyof typeof UpdateContextTypes, value: any) => any;
}

export const CartPageContext = createContext<Partial<ICartPageContext>>({});

const CartPage: NextPage<Props> = () => {
  const { appliedPromotion, updateContext } = useContext(CartPageContext);

  const [userInfo, setUserInfo] = useState('');
  const [applyPromotion, setApplyPromotion] = useState<IApplyPromotion>(null);

  const applyPromo = promo => {
    const { promoType, condition, reward } = promo;
    const { maximumDiscountAmount } = condition;
    const { percOff, amountOff } = reward;

    const promotionToBeApplied = {
      promotionType: promoType,
      reward: {
        percOff,
        amountOff,
        maxDiscount: maximumDiscountAmount,
      },
    };
    setApplyPromotion(promotionToBeApplied);
    updateContext('PROMOTION', promo);
    applyOffer();
  };

  useEffect(() => {
    const cookie = document.cookie;
    const userIdCookie = getCookie(cookie, 'userId');
    setUserInfo(userIdCookie);
    applyOffer();
  }, []);

  const {
    state: { user },
  } = useContext(GlobalContext);

  const userId = userInfo || user?.id;

  const variables = getCartDetailsVarFn({ userId, offer: applyPromotion });
  const [applyOffer, { data, refetch }] = useLazyQuery(QUERY_CART_DETAILS, {
    variables,
    partialRefetch: true,
  });

  const [callMinAmount, { data: promoData }] = useLazyQuery(QUERY_APPLICABLE_PROMOTIONS);

  useEffect(() => {
    if (data) {
      const { bagTotal } = data?.cart;
      const minAmount = getApplicablePromotionsFn({ minOrderAmount: bagTotal });
      callMinAmount({ variables: minAmount });
    }
  }, [data, callMinAmount]);

  const router = useRouter();
  const slug = router?.query?.slug?.length && router.query.slug[0];

  return (
    <Layout slug={slug || 'review-basket'}>
      <Head title="Jade | Cart" description={'Cart'} keywords={'Cart, checkout, order summary'} />
      {getMainComponent(slug, data, refetch, promoData, applyPromo)}
    </Layout>
  );
};

const CartPageWithContext: NextPage<Props> = props => {
  const [appliedPromotion, setAppliedPromotion] = useState<any>(null);
  const [slotSelected, setSlotSelected] = useState<any>(null);
  const [addressSelected, setAddressSelected] = useState<any>(null);

  const updateContext = (type: keyof typeof UpdateContextTypes, value: any) => {
    switch (type) {
      case 'PROMOTION':
        setAppliedPromotion(value);
        break;

      case 'ADDRESS':
        setAddressSelected(value);
        break;

      case 'SLOT':
        setSlotSelected(value);
        break;
    }
  };

  return (
    <CartPageContext.Provider
      value={{ addressSelected, appliedPromotion, slotSelected, updateContext }}>
      <CartPage {...props} />
    </CartPageContext.Provider>
  );
};

export default CartPageWithContext;
