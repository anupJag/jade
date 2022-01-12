import React, { FC } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  makeStyles,
  createStyles,
  Theme,
  Grid,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { ContactUsCard } from '../ContactUsCard';
import Blue from '@material-ui/core/colors/blue';
import Grey from '@material-ui/core/colors/grey';

interface ContactUsAccordionData {
  heading: string;
  description: string;
  cards: any[];
}

interface ContactUsAccordionProps {
  data?: {
    accordionItemsCollection: {
      items: Array<ContactUsAccordionData>;
    };
  };
  activePanelId?: number;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      flexWrap: 'wrap',
    },
    content: {
      display: 'block',
    },
    expandIcon: {
      alignSelf: 'flex-start',
    },
    heading: {
      color: Blue[900],
      '&:hover': {
        textDecoration: 'underline',
      },
    },
    description: {
      color: Grey[700],
    },
    details: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gridGap: theme.typography.pxToRem(24),
      [theme.breakpoints.up('md')]: {
        gridTemplateColumns: 'repeat(4, 1fr)',
      },
    },
  }),
);

export const ContactUsAccordion: FC<ContactUsAccordionProps> = ({
  data,
  activePanelId,
}: ContactUsAccordionProps) => {
  const accordionItems = data?.accordionItemsCollection?.items || [];
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState<number>(activePanelId || 1);

  const handleChange = (panelId: number) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panelId : null);
  };

  return (
    <div className={classes.root}>
      {accordionItems?.length > 0 &&
        accordionItems.map((item: any, index: number) => (
          <Accordion
            expanded={expanded === index + 1}
            onChange={handleChange(index + 1)}
            key={index + 1}>
            <AccordionSummary
              classes={{
                content: classes.content,
                expandIcon: classes.expandIcon,
              }}
              expandIcon={<ExpandMoreIcon />}>
              <Typography display="block" className={classes.heading} variant="h6">
                {item.heading}
              </Typography>
              <Typography display="block" className={classes.description}>
                {item.description}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.details}>
              {item.cards &&
                item.cards.items &&
                item.cards.items.length &&
                item.cards.items.map((card: any, index: number) => (
                  <ContactUsCard data={card} key={index + 1} />
                ))}
            </AccordionDetails>
          </Accordion>
        ))}
    </div>
  );
};
