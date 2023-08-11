import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: 'https://gabrielcamacho.vercel.app//icon.svg',
    brandTitle: 'Gabriel Camacho Components',
    brandUrl: 'https://gabrielcamacho.vercel.app/',
  },
});
