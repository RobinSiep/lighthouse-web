export const lightTheme = {
  name: "light",
  red: "#F66B6B",
  green: "#03C6AA",
  primaryColor: "#4b7ed6",
  translucentGrey: "#F1F1F1",
  grey: "#676767",
  lightGrey: "#C5C4C4"

};

function getBrowserPreferredTheme() {
  return lightTheme;
}

export const browserPreferredTheme = getBrowserPreferredTheme();
