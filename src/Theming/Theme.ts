export interface ThemeInterface
{
  breakpoints : {
    xs : string;
    sm : string;
    md : string;
    lg : string;
    xl : string;
  };
  type: string;
  color : {
    primary : {
      lighter : string;
      light : string;
      main : string;
      dark : string;
      darker : string;
      textOverLighter : string;
      textOverLight : string;
      textOverMain : string;
      textOverDark : string;
      textOverDarker : string;
    };
    secondary : {
      lighter : string;
      light : string;
      main : string;
      dark : string;
      darker : string;
      textOverLighter : string;
      textOverLight : string;
      textOverMain : string;
      textOverDark : string;
      textOverDarker : string;
    };
    background : string;
    surface : string;
    textOverBackground : string;
  };
  elevation : (height : number) => string;
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
  type: "light",
  color: {
    primary: {
      lighter: "#98D2FE",
      light: "#6ABEFF",
      main: "#42ADFF",
      dark: "#1599FF",
      darker: "#0590FB",
      textOverLighter: "#000",
      textOverLight: "#000",
      textOverMain: "#FFF",
      textOverDark: "#FFF",
      textOverDarker: "#FFF"
    },
    secondary: {
      lighter: "#FFB3B5",
      light: "#FF7D80",
      main: "#FF5156",
      dark: "#FF252B",
      darker: "#FF0007",
      textOverLighter : "#000",
      textOverLight : "#000",
      textOverMain : "#FFF",
      textOverDark : "#FFF",
      textOverDarker : "#FFF"
    },
    surface: "#FFF",
    background: "#FFF",
    textOverBackground: "#000"
  },
  elevation: (depth : number) => 
  {
    //Algorithm Credits To https://ethercreative.github.io/react-native-shadow-generator/

    const boxShadowDimensions = {
      umbra: [
        "0px 2px 1px -1px",
        "0px 3px 1px -2px",
        "0px 3px 3px -2px",
        "0px 2px 4px -1px",
        "0px 3px 5px -1px",
        "0px 3px 5px -1px",
        "0px 4px 5px -2px",
        "0px 5px 5px -3px",
        "0px 5px 6px -3px",
        "0px 6px 6px -3px",
        "0px 6px 7px -4px",
        "0px 7px 8px -4px",
        "0px 7px 8px -4px",
        "0px 7px 9px -4px",
        "0px 8px 9px -5px",
        "0px 8px 10px -5px",
        "0px 8px 11px -5px",
        "0px 9px 11px -5px",
        "0px 9px 12px -6px",
        "0px 10px 13px -6px",
        "0px 10px 13px -6px",
        "0px 10px 14px -6px",
        "0px 11px 14px -7px",
        "0px 11px 15px -7px"
      ],
      penumbra: [
        "0px 1px 1px 0px",
        "0px 2px 2px 0px",
        "0px 3px 4px 0px",
        "0px 4px 5px 0px",
        "0px 5px 8px 0px",
        "0px 6px 10px 0px",
        "0px 7px 10px 1px",
        "0px 8px 10px 1px",
        "0px 9px 12px 1px",
        "0px 10px 14px 1px",
        "0px 11px 15px 1px",
        "0px 12px 17px 2px",
        "0px 13px 19px 2px",
        "0px 14px 21px 2px",
        "0px 15px 22px 2px",
        "0px 16px 24px 2px",
        "0px 17px 26px 2px",
        "0px 18px 28px 2px",
        "0px 19px 29px 2px",
        "0px 20px 31px 3px",
        "0px 21px 33px 3px",
        "0px 22px 35px 3px",
        "0px 23px 36px 3px",
        "0px 24px 38px 3px"
      ],
      ambient: [
        "0px 0px 0px 0px",
        "0px 1px 3px 0px",
        "0px 1px 5px 0px",
        "0px 1px 8px 0px",
        "0px 1px 10px 0px",
        "0px 1px 14px 0px",
        "0px 1px 18px 0px",
        "0px 2px 16px 1px",
        "0px 3px 14px 2px",
        "0px 3px 16px 2px",
        "0px 4px 18px 3px",
        "0px 4px 20px 3px",
        "0px 5px 22px 4px",
        "0px 5px 24px 4px",
        "0px 5px 26px 4px",
        "0px 6px 28px 5px",
        "0px 6px 30px 5px",
        "0px 6px 32px 5px",
        "0px 7px 34px 6px",
        "0px 7px 36px 6px",
        "0px 8px 38px 7px",
        "0px 8px 40px 7px",
        "0px 8px 42px 7px",
        "0px 9px 44px 8px",
        "0px 9px 46px 8px"
      ]
    };

    const boxShadowColor = {
      umbra: "rgba(0,0,0,0.2)",
      penumbra: "rgba(0,0,0,0.14)",
      ambient: "rgba(0,0,0,0.12)"
    };

    return `
      ${boxShadowDimensions.umbra[depth]} ${boxShadowColor.umbra},
			${boxShadowDimensions.penumbra[depth]} ${boxShadowColor.penumbra},
			${boxShadowDimensions.ambient[depth]} ${boxShadowColor.ambient}`;
  }
};

export const DarkTheme = {
  ...Common,
  type: "dark",
  color: {
    primary: {
      lighter: "#08277B",
      light: "#041E64",
      main: "#01154B",
      dark: "#000C2D",
      darker: "#000209",
      textOverLighter: "#FFF",
      textOverLight: "#FFF",
      textOverMain: "#FFF",
      textOverDark: "#FFF",
      textOverDarker: "#FFF"
    },
    secondary: {
      lighter: "#CA0018",
      light: "#950011",
      main: "#62000C",
      dark: "#4C0009",
      darker: "#3E0109",
      textOverLighter : "#FFF",
      textOverLight : "#FFF",
      textOverMain : "#FFF",
      textOverDark : "#FFF",
      textOverDarker : "#FFF"
    },
    surface: "#121212",
    background: "#121212",
    textOverBackground: "#DDD"
  },
  elevation: (depth : number) => 
  {
    const value = (255 / 72) * (depth + 5);
    return `rgb(${value}, ${value}, ${value})`;
  }
};

export function lightShadow(depth : number) : string
{
  //Algorithm Credits To https://ethercreative.github.io/react-native-shadow-generator/

  const boxShadowDimensions = {
    umbra: [
      "0px 2px 1px -1px",
      "0px 3px 1px -2px",
      "0px 3px 3px -2px",
      "0px 2px 4px -1px",
      "0px 3px 5px -1px",
      "0px 3px 5px -1px",
      "0px 4px 5px -2px",
      "0px 5px 5px -3px",
      "0px 5px 6px -3px",
      "0px 6px 6px -3px",
      "0px 6px 7px -4px",
      "0px 7px 8px -4px",
      "0px 7px 8px -4px",
      "0px 7px 9px -4px",
      "0px 8px 9px -5px",
      "0px 8px 10px -5px",
      "0px 8px 11px -5px",
      "0px 9px 11px -5px",
      "0px 9px 12px -6px",
      "0px 10px 13px -6px",
      "0px 10px 13px -6px",
      "0px 10px 14px -6px",
      "0px 11px 14px -7px",
      "0px 11px 15px -7px"
    ],
    penumbra: [
      "0px 1px 1px 0px",
      "0px 2px 2px 0px",
      "0px 3px 4px 0px",
      "0px 4px 5px 0px",
      "0px 5px 8px 0px",
      "0px 6px 10px 0px",
      "0px 7px 10px 1px",
      "0px 8px 10px 1px",
      "0px 9px 12px 1px",
      "0px 10px 14px 1px",
      "0px 11px 15px 1px",
      "0px 12px 17px 2px",
      "0px 13px 19px 2px",
      "0px 14px 21px 2px",
      "0px 15px 22px 2px",
      "0px 16px 24px 2px",
      "0px 17px 26px 2px",
      "0px 18px 28px 2px",
      "0px 19px 29px 2px",
      "0px 20px 31px 3px",
      "0px 21px 33px 3px",
      "0px 22px 35px 3px",
      "0px 23px 36px 3px",
      "0px 24px 38px 3px"
    ],
    ambient: [
      "0px 0px 0px 0px",
      "0px 1px 3px 0px",
      "0px 1px 5px 0px",
      "0px 1px 8px 0px",
      "0px 1px 10px 0px",
      "0px 1px 14px 0px",
      "0px 1px 18px 0px",
      "0px 2px 16px 1px",
      "0px 3px 14px 2px",
      "0px 3px 16px 2px",
      "0px 4px 18px 3px",
      "0px 4px 20px 3px",
      "0px 5px 22px 4px",
      "0px 5px 24px 4px",
      "0px 5px 26px 4px",
      "0px 6px 28px 5px",
      "0px 6px 30px 5px",
      "0px 6px 32px 5px",
      "0px 7px 34px 6px",
      "0px 7px 36px 6px",
      "0px 8px 38px 7px",
      "0px 8px 40px 7px",
      "0px 8px 42px 7px",
      "0px 9px 44px 8px",
      "0px 9px 46px 8px"
    ]
  };

  const boxShadowColor = {
    umbra: "rgba(122,122,122,0.2)",
    penumbra: "rgba(122,122,122,0.14)",
    ambient: "rgba(122,122,122,0.12)"
  };

  return `
    ${boxShadowDimensions.umbra[depth]} ${boxShadowColor.umbra},
    ${boxShadowDimensions.penumbra[depth]} ${boxShadowColor.penumbra},
    ${boxShadowDimensions.ambient[depth]} ${boxShadowColor.ambient}`;
}