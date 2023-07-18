import { createGlobalStyle, css, DefaultTheme } from "styled-components";
import { Colors } from "./styled";

export * from "./components";

export const MEDIA_WIDTHS = {
  upToExtraSmall: 641,
  upToSmall: 801,
  upToMedium: 1097,
  upToLarge: 1281,
};

const mediaWidthTemplates: {
  [width in keyof typeof MEDIA_WIDTHS]: typeof css;
} = Object.keys(MEDIA_WIDTHS).reduce((accumulator, size) => {
  (accumulator as any)[size] = (a: any, b: any, c: any) => css`
    @media (max-width: ${(MEDIA_WIDTHS as any)[size]}px) {
      ${css(a, b, c)}
    }
  `;
  return accumulator;
}, {}) as any;

const white = "#FFF";
const black = "#000";

const complusRed = "#FF0748";
const darkSilver = "#757575";
const warning = "#F3841E";
const success = "#18C145";

export function colors(darkMode: boolean): Colors {
  return {
    /* Base Colors */
    white,
    black,

    /* Complus Legendary Background */
    complusLegendary: darkMode
      ? "./img/complus-dark-bg.png"
      : "./img/complus-light-bg.png",

    /* Primary Color */
    primary: darkMode ? "#C3C5CB" : "#565A69",

    /* Secondary Color */
    secondary: darkMode ? "#6C7284" : "#888D9B",

    /* Background Color */
    bg: darkMode ? "rgba(33, 36, 39, 0.6)" : "rgba(255, 255, 255, 0.6)",

    /* Text Colors */
    text: darkMode ? "#FFF" : "#111",

    /* Border Color */
    border: darkMode ? "#565A69" : "#C3C5CB",

    /* Other Colors */
    complusRed,
    darkSilver,
    error: complusRed,
    warning,
    success,
  };
}

export function theme(darkMode: boolean): DefaultTheme {
  return {
    ...colors(darkMode),

    grids: {
      sm: 8,
      md: 12,
      lg: 24,
    },

    //shadows
    shadow: darkMode ? "#000" : "#2F80ED",

    // media queries
    mediaWidth: mediaWidthTemplates,
  };
}

export function complusThemeFn(darkMode: boolean): DefaultTheme {
  return {
    ...theme(darkMode),
  };
}

export const MainGlobalStyle = createGlobalStyle`
html, input, textarea, button {
  font-family: 'Ubuntu', sans-serif;
  font-display: fallback;
}
@supports (font-variation-settings: normal) {
  html, input, textarea, button {
    font-family: 'Ubuntu', sans-serif;
  }
}

html,
body {
  margin: 0;
  padding: 0;
}

*, *::before, *::after {
  box-sizing: border-box;
  user-select: none;
}

&::-webkit-scrollbar {
  width: 0.25rem;
}

h1,h2,h3,h4,h5,h6 {
  margin:0;
  }

button {
  user-select: none;
}

a {
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
}
a:hover,
a:focus {
  text-decoration: none;
}

html {
  font-size: 14px;
  font-weight: 400;
  font-variant: none;
  font-smooth: always;
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-text-size-adjust: 100%;
  text-rendering: optimizeLegibility;
  -webkit-text-shadow: 0.1rem 0.1rem 0.5rem rgba(0, 0%, 0%, 0.5);
  -moz-text-shadow: 0.1rem 0.1rem 0.5rem rgba(0, 0%, 0%, 0.5);
  -ms-text-shadow: 0.1rem 0.1rem 0.5rem rgba(0, 0%, 0%, 0.5);
  -o-text-shadow: 0.1rem 0.1rem 0.5rem rgba(0, 0%, 0%, 0.5);
  text-shadow: 0.1rem 0.1rem 0.5rem rgba(0, 0%, 0%, 0.5);
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 0;
}

@keyframes spinners-react-dotted-shrink {
  50% {
    transform: translate(0, 0);
    opacity: 0;
  }
}
`;

export const ThemedGlobalStyle = createGlobalStyle`
html {
  color: ${({ theme }) => theme.text};
}

body {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-image: url(${({ theme }) => theme.complusLegendary});
  filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${({
    theme,
  }) => theme.complusLegendary}', sizingMethod='scale');
  -ms-filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${({
    theme,
  }) => theme.complusLegendary}', sizingMethod='scale')";
  scroll-behavior: smooth;
}
`;
