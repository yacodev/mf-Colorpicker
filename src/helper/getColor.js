export const getColorList = () =>
  JSON.parse(localStorage.getItem('colorsList')) || [];

export const getLastColor = () => {
  const colorsList = getColorList();
  return colorsList[0] || '#000000';
};
