import React, { FC, useState } from 'react';
import { Box, Image } from '@chakra-ui/core';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { green } from '@material-ui/core/colors';
import { CartListContainer } from './cart-list.styled';
import { AddToCart } from '../add-to-cart/add-to-cart';

export const useStyles = makeStyles(theme => ({
  qunaity: {
    border: '1px solid #cccccc',
  },
}));

type Props = {
  quantity: any;
  product?: any;
  addToCart?: any;
};

const Quanity: FC<Props> = ({ product, quantity, addToCart }) => {
  const classes = useStyles();
  const [qty, setQty] = useState(quantity);

  const addQuantity = () => {
    setQty(q => {
      addToCart({ quantity: q + 1, productId: product.id });
      return q + 1;
    });
  };

  const removeQuantity = () => {
    setQty(q => {
      const count = q - 1;
      if (count < 1) {
        return 1;
      }
      addToCart({ quantity: count, productId: product.id });
      return count;
    });
  };
  return (
    <Grid container alignItems="baseline">
      <Grid item xs={4}>
        <Typography component="span" variant="subtitle2" color="textPrimary">
          Quantity
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <IconButton onClick={addQuantity}>
          <AddIcon fontSize="small" style={{ color: green[500] }} />
        </IconButton>
      </Grid>
      <Grid item xs={2} container justify="center" className={classes.qunaity}>
        <Typography component="span" variant="body2" color="textPrimary">
          {qty}
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <IconButton onClick={removeQuantity}>
          <RemoveIcon fontSize="small" color="secondary" />
        </IconButton>
      </Grid>
    </Grid>
  );
};

// TODO :
// eslint-disable-next-line @typescript-eslint/no-empty-function
export const CartList = ({ data = [], onDelete = () => {} }: any) => {
  return data.map(({ id, quantity, product = {} }: any) => {
    const srcProductImages = product.images.filter(img => img.isDefault === true);
    const defaultImage = srcProductImages && srcProductImages[0];

    return (
      <CartListContainer mt="2" d="flex" overflow="hidden" key={id}>
        <Image size="100px" objectFit="cover" src={defaultImage.url} alt={defaultImage.altText} />
        <Box p={2} ml={2} flex="1" width="1%">
          <Box mt="1" color="blue.500" as="h6" lineHeight="tight" isTruncated>
            {product.title}
          </Box>
          <Box
            mt="1"
            color="gray.500"
            fontWeight="normal"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="capitalize">
            <strong>Price:</strong> {product.pricing && product.pricing.list} &nbsp;
          </Box>
          <AddToCart>
            <Quanity product={product} quantity={quantity} />
          </AddToCart>
        </Box>
        <IconButton
          disableFocusRipple
          disableRipple
          edge="end"
          aria-label="delete"
          onClick={() => onDelete({ id })}>
          <DeleteIcon color="secondary" fontSize="small" />
        </IconButton>
      </CartListContainer>
    );
  });
};
