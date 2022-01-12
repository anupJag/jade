import { styled } from '@jade/ui/themes';
import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none',
    display: 'flex',
    alignItems: 'center',
  },
  iconButton: {
    padding: 10,
  },
}));

export const SearchHolder = styled.div`
  display: flex;
  align-items: center;
`;
