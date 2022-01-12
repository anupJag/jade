import React, { useState, useEffect } from 'react';
import * as S from './drawer-navigation.styled';
import { AccordionTree } from '@jade/ui/molecules';
import { initializeApollo } from '@jade/graphql-client';
import { QUERY_CATEGORY_LIST } from '@jade/graphql-client';

export const mappedTreeData = (nodeId, treeData) => {
  return treeData.map(tree => {
    return tree.id === nodeId
      ? { ...tree, isExpanded: !tree.isExpanded }
      : { ...tree, data: mappedTreeData(nodeId, tree.data) };
  });
};

export const fetchCategoryData = async (client, callback) => {
  const {
    data: { fetchCategories = [] },
  } = await client.query({
    query: QUERY_CATEGORY_LIST,
  });

  const data = fetchCategories
    .filter(category => {
      return category.isRootCategory === true;
    })
    .map(category => {
      return {
        ...category,
        label: category.name,
        isToggleAble: category.isRootCategory || false,
        link: (!category.isRootCategory && `/category/${category.id}`) || '',
        isExpanded: false,
        data: fetchCategories
          .filter(cat => {
            return cat.parentId === category.id;
          })
          .map(childCat => {
            return {
              ...childCat,
              isToggleAble: false,
              link: (!childCat.isRootCategory && `/category/${childCat.id}`) || '',
              isExpanded: false,
              data: [],
              label: childCat.name,
            };
          }),
      };
    });
  callback(data);
};

export const DrawerNavigation = () => {
  const [navData, setNavData] = useState([]);

  useEffect(() => {
    const apolloClient = initializeApollo();
    fetchCategoryData(apolloClient, setNavData);
  }, []);

  const onCategoryToggle = id => {
    const updatedMapData = mappedTreeData(id, navData);
    setNavData(updatedMapData);
  };

  const NavItems = navData.map(nav => (
    <S.NavItem key={nav.id}>
      <AccordionTree {...nav} onToggle={onCategoryToggle}></AccordionTree>
    </S.NavItem>
  ));
  return (
    <S.Container>
      <S.Nav>
        <S.NavList>{NavItems}</S.NavList>
      </S.Nav>
    </S.Container>
  );
};
