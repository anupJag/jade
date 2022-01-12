import { styled } from '@jade/ui/themes';
import { Button, Icon } from '@jade/ui/atoms';

export const AccordionTreeWrap = styled.div``;

export const ToggleAbleBar = styled.div`
  display: flex;
  align-items: center;
  a {
    flex: 1;
    padding-left: 0;
    padding-right: 0;
  }
`;

export const Heading = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: none;
  border: none;
  padding: 16px 0;
  cursor: pointer;
  flex: 1;
  border-bottom: 1px solid #ddd;
  &:focus {
    border: none;
  }
  &:hover {
    background: none;
  }
`;
export const ToggleArea = styled.div`
  padding-left: 20px;
`;
export const Content = styled.div``;
export const IconHolder = styled.span`
  margin-left: auto;
`;
export const Text = styled.span`
  line-height: 20px;
  font-size: 14px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
export const StyledIcon = styled(Icon)`
  width: 1.5em;
  height: 1.5em;
`;
