import { ThemedCssFunction } from "styled-components";

export type Color = string;
export interface Colors {
  /* Base Colors */
  white: Color;
  black: Color;

  /* Complus Legendary Background */
  complusLegendary: Color;

  /* Primary Color */
  primary: Color;

  /* Secondary Color */
  secondary: Color;

  /* Background Color */
  bg: Color;

  /* Text Color */
  text: Color;

  /* Border Color */
  border: Color;

  /* Other Colors */
  complusRed: Color;
  darkSilver: Color;
  error: Color;
  warning: Color;
  success: Color;
}

export interface Grids {
  sm: number;
  md: number;
  lg: number;
}
declare module "styled-components" {
  export interface DefaultTheme extends Colors {
    grids: Grids;

    // shadows
    shadow: string;

    // media queries
    mediaWidth: {
      upToExtraSmall: ThemedCssFunction<DefaultTheme>;
      upToSmall: ThemedCssFunction<DefaultTheme>;
      upToMedium: ThemedCssFunction<DefaultTheme>;
      upToLarge: ThemedCssFunction<DefaultTheme>;
    };
  }
}
