import { createGlobalStyle } from "styled-components";

type ThemeType = typeof theme;
export interface IThemeStyled {
  theme: ThemeType;
  color?: boolean;
}
export const GlobalStyles = createGlobalStyle<IThemeStyled>`
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
  body {
    font-family: 'Montserrat', sans-serif;
    background-color: ${props =>
      props.color
        ? props.theme.backgroundStyle.body
        : props.theme.backgroundStyle.primary}
  }
`;
export const theme = {
  primary: "#fff",
  secondary: "#680A65",

  icons: {
    main: "#b4689a",
    default: "#9DF311 "
  },
  textStyle: {
    primary: "#fff",
    default: "#494949",
    secondary: "#680A65",
    thirdy: "#4388CA",
    fourty: "#242024",
    empty: "#F0D3F7"
  },
  backgroundStyle: {
    primary: " #e0f2f1;",
    element: "#d09262",
    body: "#ff004938",
    secondary: "#db7093"
  },
  buttonStyles: {
    main: "#db7093",
    default: "#fff",
    auth: "#613a61",
    stream: "#251c22"
  }
};
