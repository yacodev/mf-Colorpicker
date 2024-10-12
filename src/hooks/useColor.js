import { useEffect, useState } from 'react';
import { getColorList, getLastColor } from '../helper/getColor';

export const useColors = () => {
  const [color, setColor] = useState(getLastColor());
  const [colorsList, setColorsList] = useState(getColorList());

  const handelChangeColor = (e) => {
    setColor(e.target.value);
  };

  const handleSubmitSaveColor = (e) => {
    e.preventDefault();
    setColorsList([color, ...colorsList]);
  };

  const handleClearColors = () => {
    setColor('#f2f2f2');
    setColorsList([]);
    localStorage.clear();
  };

  useEffect(() => {
    localStorage.setItem('colorsList', JSON.stringify(colorsList));
  }, [colorsList]);

  return {
    color,
    colorsList,
    handelChangeColor,
    handleSubmitSaveColor,
    handleClearColors,
  };
};
