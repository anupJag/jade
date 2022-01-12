import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import makeStyles from '@material-ui/core/styles/makeStyles';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Blue from '@material-ui/core/colors/blue';

interface ILinks {
  /**
   * Hyperlink Reference
   */
  href: string;

  /**
   * Label for Hyperlink
   */
  label: string;
}

interface IColumnLink {
  /**
   * Link Collection Header
   * @type {string}
   */
  header: string;

  /**
   * Collection of links
   */
  links: {
    items: Array<ILinks>;
  };
}

interface ColumnWithLinksProps {
  data: {
    linkSectionsCollection: {
      items: Array<IColumnLink>;
    };
  };
}

const cssStyling = makeStyles(theme => ({
  columnWithLinkWrapper: {
    backgroundColor: theme.palette.grey[300],
    padding: theme.spacing(1),
  },
  columnLink: {
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing(2),
    height: '100%',
  },
  columnHeader: {
    paddingBottom: theme.spacing(1),
  },
  linkOuterWrapper: {
    borderBottom: '1px solid',
    borderBottomColor: 'inherit',
  },
  linkWrapper: {
    width: '100%',
    padding: theme.spacing(1, 0),
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
  },
  overrideUnderline: {
    '&:hover': {
      textDecoration: 'none',
      color: Blue[600],
    },
  },
}));

const ColumnWithLinks: React.FC<ColumnWithLinksProps> = props => {
  const styling = cssStyling();
  const { data: dataObj } = props;
  const data = (dataObj && dataObj.linkSectionsCollection.items) || null;

  const calculateWidth: any = () => {
    if (data.length > 12) return 1;
    return Math.ceil(12 / data.length);
  };

  return (
    <Grid
      container
      data-testid="column-links-wrapper"
      classes={{ root: styling.columnWithLinkWrapper }}
      spacing={2}>
      {data?.length > 0 &&
        data.map(({ header, links }, index) => (
          <React.Fragment key={index}>
            <Grid item sm={calculateWidth()} data-testid="wrapper-columns">
              <Grid container direction="column" classes={{ root: styling.columnLink }}>
                <Grid item classes={{ root: styling.columnHeader }}>
                  <Typography variant="h5">{header}</Typography>
                </Grid>
                <Grid item>
                  <Grid container direction="column">
                    {links?.items?.length > 0 &&
                      links.items.map(({ href, label }, index) => (
                        <Grid
                          item
                          key={index}
                          classes={{
                            root:
                              index === links.items.length - 1 ? null : styling.linkOuterWrapper,
                          }}>
                          <Link
                            data-testid="column-links"
                            href={href}
                            classes={{
                              root: styling.linkWrapper,
                              underlineHover: styling.overrideUnderline,
                            }}>
                            {label}
                            <Typography component="span">
                              <ChevronRight />
                            </Typography>
                          </Link>
                        </Grid>
                      ))}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </React.Fragment>
        ))}
    </Grid>
  );
};

export default ColumnWithLinks;
