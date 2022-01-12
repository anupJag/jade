import React, { FC, useState } from 'react';
import { Collapse, Icon } from '@chakra-ui/core';
import { Layout } from '@jade/ui/templates';
import { Container, Row, Flex, Text, Stack, Button } from '@jade/ui/atoms';
import { Pagination, Sort } from '@jade/ui/molecules';
import ProductList from '../../organisms/ProductList/ProductList';
import { LeftContent, RightContent } from './ProductListing.template.styled';
import FilterList from '../../organisms/PLPFilters';
import { useRouter } from 'next/router';
import { getRouteParams } from '../../../utils/getRoute';

type Props = {
  searchText?: string;
  pagination: {
    totalPages: number;
    selectedPage: number;
  };
  sortOptions: {
    label: string;
    value: string;
  }[];
};

const SearchTermInfo = ({ searchText }) => {
  if (!searchText) {
    return null;
  }

  return (
    <>
      <Text fontSize="sm" mr={2}>
        Showing results for{' '}
      </Text>
      <Text fontSize="sm" fontWeight="bold">{`"${searchText}"`}</Text>
    </>
  );
};

const ProductListing: FC<Props> = ({ searchText, pagination, sortOptions }) => {
  const { pathname, query, push } = useRouter();
  const [showFilter, setShowFilter] = useState(true);
  const { sortAs, sort, pageNo } = query;
  const selectedSort = sortAs ? `${sortAs}|${sort || 1}` : '';
  const selectedPage = pageNo || 1;

  const onPageChange = page => {
    const { asPath, updatedQuery } = getRouteParams(pathname, query, { pageNo: page });

    push({ pathname, query: updatedQuery }, { pathname: asPath, query: updatedQuery });
  };

  const onSort = sortCriteria => {
    const [sortAs, sort] = sortCriteria.split('|');
    const { asPath, updatedQuery } = getRouteParams(pathname, query, { sortAs, sort });

    push({ pathname, query: updatedQuery }, { pathname: asPath, query: updatedQuery });
  };

  return (
    <Layout>
      <Container isFluid>
        <Row>
          <LeftContent>
            <Button
              justifyContent="space-between"
              py="4"
              rightIcon={showFilter ? 'minus' : 'add'}
              variant="link"
              width="100%"
              onClick={() => {
                setShowFilter(!showFilter);
              }}
              fontSize="xl"
              fontWeight="300"
              color="#000">
              Filters
            </Button>
            <Collapse isOpen={showFilter}>
              <FilterList />
            </Collapse>
          </LeftContent>
          <RightContent>
            <Flex justifyContent="space-between" py="4">
              <Stack isInline alignItems="center">
                <SearchTermInfo searchText={searchText} />
              </Stack>
              <Sort sortOptions={sortOptions} onSort={onSort} selectedSort={selectedSort} />
            </Flex>
            <ProductList />
            <Flex justifyContent="flex-end">
              {pagination?.totalPages && pagination.totalPages > 1 && (
                <Pagination
                  totalPages={pagination.totalPages}
                  onChange={onPageChange}
                  selectedPage={selectedPage as number}
                />
              )}
            </Flex>
          </RightContent>
        </Row>
      </Container>
    </Layout>
  );
};

export default ProductListing;
