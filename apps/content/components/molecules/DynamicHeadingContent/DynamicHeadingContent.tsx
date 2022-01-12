import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Blue from '@material-ui/core/colors/blue';

interface DynamicHeadingContentProps {
  data: {
    title: string;
    content?: string;
    backgroundColor?: string;
  };
}

const cssStyling = makeStyles(theme => ({
  container: {
    backgroundColor: Blue[50],
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  title: {
    fontWeight: 'bold',
  },
  content: {
    maxWidth: theme.spacing(68),

    '& a': {
      fontWeight: 'normal',
      color: theme.palette.primary.main,
      whiteSpace: 'nowrap',
      textDecoration: 'none',
      borderBottom: '1px solid',
      borderBottomColor: Blue[900],
      transition: 'border-color .3s ease-out, color .3s ease-out',
    },

    '& a:hover': {
      color: Blue[600],
      borderBottomColor: theme.palette.grey[50],
      outline: '0 solid',
    },
  },
}));

const DynamicHeadingContent: React.FC<DynamicHeadingContentProps> = props => {
  const { data } = props;
  const { title, content, backgroundColor } = data;

  const styling = cssStyling();

  return (
    <>
      <Grid
        container
        data-testid="heading-content-wrapper"
        direction="column"
        spacing={2}
        classes={{ root: styling.container }}
        style={{ backgroundColor }}>
        <Grid item>
          <Typography data-testid="heading-title" variant="h5" classes={{ root: styling.title }}>
            {title}
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            component="div"
            classes={{ root: styling.content }}
            dangerouslySetInnerHTML={{ __html: content?.toString() }}></Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default DynamicHeadingContent;
