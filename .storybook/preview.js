import {addParameters} from '@storybook/react';
import {create} from '@storybook/theming';

const theme = create({
  base: 'dark',
});

addParameters({
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
