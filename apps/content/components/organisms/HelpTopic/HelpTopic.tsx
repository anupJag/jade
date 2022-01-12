import React, { FC, useContext } from 'react';
import dynamic from 'next/dynamic';
import { Row } from '@jade/ui/atoms';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

import { HelpContext } from '../../../stores/help/Context';

const modules = {
  accordionList: dynamic(() =>
    import('../../molecules/ContactUsAccordion').then(module => module.ContactUsAccordion),
  ),
  columnWithLinksGroups: dynamic(() =>
    import('../../molecules/ColumnWithLinks').then(module => module.default),
  ),
  dynamicHeadingContent: dynamic(() =>
    import('../../molecules/DynamicHeadingContent').then(module => module.default),
  ),
  headingWithContentList: dynamic(() =>
    import('../../molecules/HeadingWithContentList').then(module => module.default),
  ),
  promotionList: dynamic(() =>
    import(
      '../../../../../libs/ui/molecules/src/lib/image-section-with-heading/image-section-with-heading'
    ).then(module => module.ImageSectionsWithHeading),
  ),
};

const cssStyling = makeStyles(theme => ({
  wrapper: {
    padding: theme.spacing(2),
    margin: theme.spacing(2, 'auto'),
    maxWidth: 960,
  },
}));

const HelpSlotList: FC = () => {
  const styling = cssStyling();

  const { state } = useContext(HelpContext);
  const { slotData } = state;

  const Children = slotData.map(slot => {
    const DynamicModule = modules[slot.moduleName];
    return <DynamicModule data={slot.data} {...slot.data} />;
  });

  if (Children.length > 0) {
    return (
      <>
        <Typography component="div" classes={{ root: styling.wrapper }}>
          <Row mb="lg">{Children}</Row>
        </Typography>
      </>
    );
  }

  return null;
};

export default HelpSlotList;
