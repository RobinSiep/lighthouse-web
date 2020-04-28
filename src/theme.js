export const lightTheme = {
  name: "light",
  errorColor: "#F66B6B",
  primaryColor: "#1272FF",
  translucentGrey: "#F1F1F1",
  grey: "#676767",
  lightGrey: "#C5C4C4"

};

function getBrowserPreferredTheme() {
  return lightTheme;
}

export const browserPreferredTheme = getBrowserPreferredTheme();
