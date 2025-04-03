import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
    };
    fontSizes: {
      small: string;
      medium: string;
      large: string;
    };
    widths: {
      maxWidth: string;
    };
    breakpoints: {
      mobile: string;
      desktop: string;
      tablet: string;
    };
  }
}
