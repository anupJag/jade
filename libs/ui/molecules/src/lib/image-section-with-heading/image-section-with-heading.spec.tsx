import React from 'react';
import { render } from '@testing-library/react';

import { ImageSectionsWithHeading } from './image-section-with-heading';
import { defaultTheme, ThemeProvider } from '@jade/ui/themes';

describe('ImageSectionsWithHeading', () => {
  it('should render successfully', () => {
    const mockImageSections = [
      { imgUrl: './sample/image', imgAlt: 'sample image', linkUrl: './sample/link' },
    ];
    const { baseElement } = render(
      <ThemeProvider theme={defaultTheme}>
        <ImageSectionsWithHeading
          heading="Heading"
          layout="2-column"
          imageSections={mockImageSections}
        />
      </ThemeProvider>,
    );
    expect(baseElement).toBeTruthy();
  });
});
