import React, { FC } from 'react';
import { StyledClearFilter } from './clear-filter.styled';
import { Icon, Link } from '@jade/ui/atoms';
import { removeSlugQuery } from '@jade/utils';
import { NextRouter, useRouter } from 'next/router';
import { SLUG_TYPES } from '@jade/ui/utils';

export const ClearFilterComponent: FC = () => {
  const router = useRouter();
  const pageTypePathName: string = `${router.asPath.split('?')[0]}`;
  let pageSlugString: string = SLUG_TYPES[pageTypePathName.split('/')[1]];
  const filteredRouterQuery = removeSlugQuery(router as NextRouter, pageSlugString);

  return (
    <>
      {Object.keys(filteredRouterQuery).length ? (
        <StyledClearFilter>
          <Link href={{ pathname: pageTypePathName, query: {} }}>
            <a>
              <Icon name="close" size="10px" mr={2} /> Clear Filter
            </a>
          </Link>
        </StyledClearFilter>
      ) : null}
    </>
  );
};
