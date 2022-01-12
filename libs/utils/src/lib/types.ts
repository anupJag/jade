export type PriceFilterRange = {
    start: string;
    end: string;
  };
  
export type StartEndFilterRange = {
    start: string;
    end: string;
};

export type ValueFilterRange = { value: string };
export type KeyValueFilterRange = { label: string, value: string };

export type FilterRange = PriceFilterRange | StartEndFilterRange | KeyValueFilterRange;

export type Filter = {
    displayName: string;
    key: FilterKey;
    range: FilterRange[];
    type: 'range' | 'value';
};

export type FilterKey = 'price' | 'rating' | 'discount' | 'category' | 'shippingTags' | 'brand' | 'reviewCount';