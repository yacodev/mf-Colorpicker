import React from 'react';
import ReactDOM from 'react-dom/client';
import { ColorPicker } from './Components/ColorPicker';

import './index.css';
import { useColors } from './hooks/useColor';

const App = () => {
  const { handleSubmitSaveColor, handelChangeColor, color, colorsList } =
    useColors();

  return (
    <div className='container'>
      <ColorPicker
        handleSubmitSaveColor={handleSubmitSaveColor}
        handelChangeColor={handelChangeColor}
        color={color}
      />
    </div>
  );
};
const rootElement = document.getElementById('app');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
