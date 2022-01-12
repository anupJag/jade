import React, { FC, useContext, useEffect, useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { MUTATE_DELETE_FROM_CART } from '@jade/graphql-client';
import { Box } from '@material-ui/core';
import { AddToCart } from '@jade/ui/molecules';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { Context as GlobalContext } from '@jade/store';
import Card from '../../atoms/card/card';
import { IconButton, Input } from '@jade/ui/atoms';
import { useTheme } from '@jade/ui/themes';
import { Image, Spinner } from '@chakra-ui/core';
import { getCookie } from '@jade/utils';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      height: '100%',
    },
    secondary: {
      color: '#aaa',
      paddingLeft: '5px',
      fontSize: '0.7rem',
    },
    bold: {
      fontWeight: 800,
      paddingTop: '15px',
    },
    cartItem: {
      padding: '30px 15px',
      margin: '15px',
      border: '1px solid',
      position: 'relative',
    },
    green: {
      color: 'green',
    },
    delete: {
      position: 'absolute',
      right: '5px',
      top: '5px',
      cursor: 'pointer',
    },
    title: {
      textTransform: 'capitalize',
      fontWeight: 'bold',
    },
  }),
);

type Props = {
  data: any;
  refetch?: any;
  minified?: boolean;
};

type addRemoveProps = {
  product: any;
  quantity?: any;
  addToCart?: any;
  id?: any;
  refetch?: any;
};

const AddRemove: FC<addRemoveProps> = ({ product, quantity, addToCart, id, refetch }) => {
  const theme: any = useTheme();
  const [loading, setLoading] = useState(false);
  const userIdCookie = getCookie(document.cookie, 'userId');

  useEffect(() => {
    refetch();
  });

  const addQuantity = () => {
    addToCart({ quantity: quantity + 1, productId: product.id });
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const {
    state: { user },
  } = useContext(GlobalContext);

  const removeQuantity = () => {
    if (quantity > 1) {
      addToCart({ quantity: quantity - 1, productId: product.id });
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  const [deleteItem] = useMutation(MUTATE_DELETE_FROM_CART);

  return (
    <Box>
      <Box display={'flex'}>
        <IconButton
          isDisabled={loading}
          color={theme.themeColors.primaryColor[400]}
          aria-label="Add quantity"
          icon="add"
          onClick={addQuantity}
        />
        <Input isDisabled={true} variant="unstyled" value={quantity} textAlign="center" />
        <IconButton
          isDisabled={loading || quantity === 1}
          color={theme.themeColors.secondaryColor[400]}
          aria-label="Reduce quantity"
          icon="minus"
          onClick={removeQuantity}
        />
      </Box>

      <Box pt="15px">
        <IconButton
          position="absolute"
          top="15px"
          right="5px"
          variant="link"
          color={theme.themeColors.secondaryColor[400]}
          aria-label="Delete item from cart"
          icon="close"
          onClick={e => {
            deleteItem({ variables: { details: { addedBy: userIdCookie || '', id: id } } });
            refetch();
          }}
        />
      </Box>
    </Box>
  );
};

export const BasketItem: FC<Props> = ({ data, refetch, minified }) => {
  const classes = useStyles();
  const { id, product, quantity, itemTotal } = data;
  const {
    title,
    images,
    pricing: { list },
  } = product;

  const minHeightVal = minified ? '80px' : '170px';
  const imageWidth = minified ? '70px' : '150px';
  return (
    <Card minHeight={minHeightVal} p={'30px 50px 30px 30px'} m="10px" position={'relative'}>
      <Box display={{ md: 'flex', lg: 'flex', sm: 'flex' }}>
        <Box width={[1, 3 / 4, 3 / 4, 3 / 4]}>
          <Box display={{ md: 'flex', lg: 'flex', sm: 'flex' }}>
            <Box>
              <Image
                width={imageWidth}
                src={images[0]?.url}
                alt={`${title} image`}
                fallbackSrc="https://via.placeholder.com/150x120"
              />
            </Box>
            <Box pl={['0', '10px', '15px']} pt={['10px', '0px']}>
              <Typography variant="body2" gutterBottom className={classes.title}>
                {title}
              </Typography>
              <span>${list}</span>
            </Box>
          </Box>
        </Box>

        <Box width={[1, 1 / 4, 1 / 4, 1 / 4]} pt={['30px', '0px']} margin="auto">
          <Box>
            {!minified && (
              <AddToCart>
                <AddRemove product={product} quantity={quantity} id={id} refetch={refetch} />
              </AddToCart>
            )}
          </Box>
          <Box>
            <span className={classes.bold}>Total: </span>
            <span>$ </span>
            <span>{itemTotal?.toFixed(2)}</span>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};
