import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  listBox: {
    maxHeight: 500,
    overflowY: 'visible',
  },
  input: {
    flex: 1,
    fontSize: '16px',
    padding: '0 5px',
    color: '#778899',
  },
  image: {
    marginRight: theme.spacing(2),
    width: 50,
    height: 50,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));
