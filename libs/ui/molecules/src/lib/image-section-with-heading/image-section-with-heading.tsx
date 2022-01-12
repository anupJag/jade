import React, { FC } from 'react';
import { Link } from '@jade/ui/atoms';
import { Image } from '@jade/ui/atoms';
import { Col, Row } from '@jade/ui/atoms';
import { Heading } from '@jade/ui/atoms';

type Props = {
  // imageSections: { imgUrl: string; imgAlt: string; linkUrl: string }[];
  // TODO: Need to fix the type of imageSections
  imageSections: any;
  layout: '2-column' | '4-column';
  heading: string;
};

export const ImageSectionsWithHeading: FC<Props> = ({ imageSections, layout, heading }) => {
  const images = imageSections?.items || imageSections;
  const columns = layout === '2-column' ? 6 : 3;
  return (
    <>
      <Heading tagName="h2">{heading}</Heading>
      <Row>
        {images.map(({ imgUrl, imgAlt, linkUrl }, index) => (
          <Col key={`imageSection_${index}`} columns={columns} mb="lg">
            <Link href="/c/[category-slug]" as={linkUrl}>
              <a>
                <Image src={imgUrl.url || imgUrl} alt={imgAlt} />
              </a>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};
