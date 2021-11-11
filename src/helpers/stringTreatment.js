export const toUpperCaseAndUnderlineRemover = (string) => {
  const withoutUnderline = string.replace('_', ' ');
  return withoutUnderline.charAt(0).toUpperCase() + withoutUnderline.slice(1);
};

export const treatKeys = (planetsArray) => (
  Object.keys(planetsArray[0]).map((key) => toUpperCaseAndUnderlineRemover(key))
);
