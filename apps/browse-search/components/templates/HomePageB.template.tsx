import React from 'react';
import { OptimizelyFeature } from '@jade/ui/abtests';
import { Col, Container, Row } from '@jade/ui/atoms';
import { HeroBanner } from '@jade/ui/molecules';
import { Heading } from '@jade/ui/atoms';
import { ProductCarousel } from '@jade/ui/organism';
import { ImageSectionsWithHeading } from '@jade/ui/molecules';

const HomePageB = ({ data }: { data: any }) => {
  return (
    <>
      <Container isFluid={true} withGutter={false}>
        <Row mb="lg" withGutter={false}>
          <Col>
            <HeroBanner {...data.heroImage} height="400px" />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row mb="lg" withGutter={true}>
          <Col>
            <h1>ABC</h1>
            <OptimizelyFeature feature="home_page_heading">
              {isEnabled =>
                isEnabled ? (
                  <Heading tagName="h1">Optimized Products</Heading>
                ) : (
                  <Heading tagName="h1">Featured Products</Heading>
                )
              }
            </OptimizelyFeature>
            <ProductCarousel heading="Best Seller" products={data.products} />
          </Col>
        </Row>
        <ImageSectionsWithHeading
          imageSections={data.categoryImageSection.image}
          layout={'2-column'}
          heading={data.categoryImageSection.title}
        />
      </Container>
    </>
  );
};

export default HomePageB;
