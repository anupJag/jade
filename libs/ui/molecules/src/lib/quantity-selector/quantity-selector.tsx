import React, { KeyboardEvent, ReactText, useState } from 'react';
import { Flex, Input, NumberInput, NumberInputField } from '@jade/ui/atoms';
import { StyledButton, StyledIconButton } from './quantity.selector.styled';
import type { QuantityInputProps, QuantitySelectorProps } from './types';

const QuantityInput = ({ onUpdate, value, size, ...otherProps }: QuantityInputProps) => {
  const [quantity, setQuantity] = useState(value);

  const onQuantityChange = (quantity: ReactText) => {
    setQuantity(Number(quantity));
  };

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === 13) {
      onUpdate(Number((event.target as HTMLInputElement).value));
    }
  };

  return (
    <NumberInput size={size} onChange={onQuantityChange} value={quantity} {...otherProps}>
      <NumberInputField type="number" textAlign="center" autoFocus onKeyDown={onKeyDown} />
      <StyledButton size={size} onClick={() => onUpdate(quantity)} aria-label="update quantity">
        {'Update'}
      </StyledButton>
    </NumberInput>
  );
};

export const QuantitySelector = ({
  quantity,
  label,
  onQuantityChange,
  size = 'lg',
  ...otherProps
}: QuantitySelectorProps) => {
  const [showInput, setShowInput] = useState(false);
  const { min = 1, max = 10, step = 1 } = otherProps;

  const addQuantity = () => {
    if (quantity < max) {
      onQuantityChange(quantity + step);
    }
  };

  const removeQuantity = () => {
    if (quantity > min) {
      onQuantityChange(quantity - step);
    }
  };

  const updateQuantity = (quantity: number) => {
    if (quantity >= min && quantity <= max) {
      setShowInput(false);
      onQuantityChange(quantity);
    }
  };

  const quantityLabel = label || `${quantity}`;

  if (showInput) {
    return <QuantityInput value={quantity} onUpdate={updateQuantity} size={size} {...otherProps} />;
  }
  return (
    <Flex>
      <StyledIconButton
        size={size}
        icon="minus"
        aria-label="decrease quantity"
        onClick={removeQuantity}
      />

      <Input
        as="button"
        size={size}
        justifyContent="space-around"
        onClick={() => setShowInput(true)}
        autoFocus>
        {quantityLabel}
      </Input>
      <StyledIconButton
        icon="add"
        size={size}
        aria-label="increase quantity"
        onClick={addQuantity}
      />
    </Flex>
  );
};

export default QuantitySelector;
