import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryDark: string;
      secondary: string;
      text: string;
    };
    font: {
      family: string;
      size: string;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
    };
  }
}
