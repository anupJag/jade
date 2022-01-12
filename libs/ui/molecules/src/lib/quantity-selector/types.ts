export type QuantityInputProps = {
  onUpdate: (quantity: number) => void;
  value: number;
  size?: 'sm' | 'lg' | 'md' | undefined;
};

export type QuantitySelectorProps = {
  quantity: number;
  label?: string;
  onQuantityChange: (value: number) => void;
  size?: 'sm' | 'lg' | 'md' | undefined;
  min?: number;
  max?: number;
  step?: number;
};
