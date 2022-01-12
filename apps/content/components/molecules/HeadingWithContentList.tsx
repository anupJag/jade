import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Blue from '@material-ui/core/colors/blue';

interface ListContent {
  title: string;
  content?: any;
}

interface ListContentItems {
  data: {
    headingWithContentCollection: {
      items: Array<ListContent>;
    };
  };
}

const cssStyling = makeStyles(theme => ({
  container: {
    border: `1rem solid ${theme.palette.grey[300]}`,
    borderColor: theme.palette.grey[300],
    margin: '2rem',
    padding: theme.spacing(5),
    '& ol>li::marker': {
      fontSize: '21px',
      color: Blue[700],
      fontWeight: 'bold',
    },
  },
  title: {
    fontWeight: 'bold',
    fontSize: '21px',
    color: Blue[700],
  },
  content: {
    '& a': {
      fontWeight: 'normal',
      color: theme.palette.primary.main,
      whiteSpace: 'nowrap',
      textDecoration: 'none',
      borderBottom: `1px solid ${Blue[700]}`,
      transition: 'border-color .3s ease-out, color .3s ease-out',
    },

    '& a:hover': {
      color: `${Blue[500]}`,
      borderBottom: `1px solid ${Blue[500]}`,
      outline: '0 solid',
    },
  },
}));

const HeadingWithContentList: React.FC<ListContentItems> = props => {
  const styling = cssStyling();

  const { data } = props;

  return (
    <Grid container direction="column" spacing={2} classes={{ root: styling.container }}>
      <ol>
        {data?.headingWithContentCollection?.items?.length > 0 &&
          data.headingWithContentCollection.items.map(({ title, content }) => (
            <li>
              <Grid>
                <Typography variant="h5" classes={{ root: styling.title }}>
                  {title}
                </Typography>
              </Grid>
              <Grid item classes={{ root: styling.content }}>
                <Typography
                  component="div"
                  dangerouslySetInnerHTML={{ __html: content.toString() }}></Typography>
              </Grid>
            </li>
          ))}
      </ol>
    </Grid>
  );
};

export default HeadingWithContentList;
