export interface ThemeInterface
{
  breakpoints : {
    xs : string;
    sm : string;
    md : string;
    lg : string;
    xl : string;
  };
  color : {
    primary : {
      lighter : string;
      light : string;
      main : string;
      dark : string;
      darker : string;
    };
    secondary : {
      lighter : string;
      light : string;
      main : string;
      dark : string;
      darker : string;
    };
    background : string;
    font : {
      default : string;
    };
  };
}

const Common = {
  breakpoints: {
    xs: "(max-width: 600px)",
    sm: "(min-width: 601px)",
    md: "(min-width: 961px)",
    lg: "(min-width: 1281px)",
    xl: "(min-width: 1921px)"
  }
};

export const LightTheme = {
  ...Common,
  color: {
    primary: {
      lighter: "#98D2FE",
      light: "#6ABEFF",
      main: "#42ADFF",
      dark: "#1599FF",
      darker: "#0590FB"
    },
    secondary: {
      lighter: "#FFB3B5",
      light: "#FF7D80",
      main: "#FF5156",
      dark: "#FF252B",
      darker: "FF0007"
    },
    background: "#FFF",
    font: {
      default: "#222"
    }
  }
};

export const DarkTheme = {
  ...Common
};