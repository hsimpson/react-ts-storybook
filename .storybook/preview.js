import { addDecorator, addParameters } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { withKnobs } from "@storybook/addon-knobs";

/*
const theme = create({
  base: 'dark',
});
*/

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  options: {
    // theme,
    showRoots: true,
    storySort: (a, b) => {
      if (a[0].startsWith('documentation')) {
        console.log(b[0]);
        if (b[0].startsWith('documentation-introduction')) {
          return 1;
        }

        return 0;
      }

      return 1;
    }
  },
});

addDecorator(withKnobs);
