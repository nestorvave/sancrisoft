import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryDark: string;
      secondary: string;
      text: string;
      white: string;
    };
    
    font: {
      family: string;
      size: string;
    };
    breakpoints: {
      smallMobile: string;
      mobile: string;
      tablet: string;
    };
  }
}
