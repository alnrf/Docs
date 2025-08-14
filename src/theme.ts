import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles: {
    global: {
      'html, body, #root': {
        height: '100%',
      },
      body: {
        margin: 0,
      },
    },
  },
});

export default theme;