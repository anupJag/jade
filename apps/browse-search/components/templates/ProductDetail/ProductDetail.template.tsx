import React, { FC } from 'react';
import { Heading } from '@chakra-ui/core';
import { Layout } from '@jade/ui/templates';
import { Container, Row, Col, Breadcrumb } from '@jade/ui/atoms';
import { ProductImage } from '../../molecules/product-image/product-image';
import { ProductInfo } from '../../molecules/product-info/product-info';
import { ProductSpecification } from '../../molecules/product-specification/product-specification';
import { ProductAddToCart } from '@jade/ui/organism';

const productPath = [
  {
    title: 'CLothing',
    url: '/',
  },
  {
    title: 'Fashion brands',
    url: '/',
  },
];

export const ProductDetail: FC<{ product }> = ({ product }) => {
  return (
    <Layout>
      <Container>
        <Row mb={4}>
          <Col>
            <Breadcrumb list={productPath} />
          </Col>
        </Row>
        <Row mb={4}>
          <Col columns={5}>
            <ProductImage images={product.images} />
          </Col>
          <Col columns={7}>
            <ProductInfo product={product} mb="8" />
            <ProductAddToCart product={product} />
          </Col>
        </Row>
        <Row>
          <Col columns={12} pt={4}>
            <Heading as="h2" mb={4} size="xl">
              About This Item
            </Heading>
            <ProductSpecification specifications={product.description} />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default ProductDetail;
