import React, { FC } from 'react';
import { HyperLink } from '@jade/ui/atoms';
import {
  AccordionTreeWrap,
  ToggleAbleBar,
  Heading,
  ToggleArea,
  Content,
  IconHolder,
  Text,
  StyledIcon,
} from './accordion-tree.styled';

export type TreeProps = {
  isToggleAble: boolean;
  isExpanded: boolean;
  label: string;
  data?: any;
  onToggle?: (id: string) => void;
  id: string;
  parentId?: string;
  link?: string;
};

export const AccordionTree: FC<TreeProps> = ({
  isToggleAble = true,
  isExpanded = false,
  label = '',
  data = [],
  onToggle = () => {},
  id = '',
  parentId = false,
  link = '',
}) => {
  const hasChildren = data.length > 0;
  const renderChildren = children => {
    return children.map(child => {
      return (
        <AccordionTree key={child.id} {...child} parentId={id} onToggle={onToggle}></AccordionTree>
      );
    });
  };
  const onToggleAction = () => {
    onToggle(id);
  };
  return (
    <AccordionTreeWrap>
      <ToggleAbleBar>
        {(isToggleAble && (
          <Heading
            onClick={onToggleAction}
            aria-expanded={isExpanded ? true : false}
            aria-controls={`${id}_region`}>
            <Text>{label}</Text>
            {isToggleAble && (
              <IconHolder>
                {(isExpanded && <StyledIcon name="chevron-up" />) || (
                  <StyledIcon name="chevron-down" />
                )}
              </IconHolder>
            )}
          </Heading>
        )) || (
          <HyperLink type="SecondaryNav" href={link} target="_self">
            {label}
          </HyperLink>
        )}
      </ToggleAbleBar>
      {isExpanded && hasChildren && (
        <ToggleArea>
          <Content id={`${id}_region`} role="region">
            {renderChildren(data)}
          </Content>
        </ToggleArea>
      )}
    </AccordionTreeWrap>
  );
};
