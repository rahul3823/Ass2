import React, { useState } from 'react';

const ToggleButton = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const buttonText = darkMode ? 'Light' : 'Dark';
  const backgroundColor = darkMode ? '#343a40' : 'white';
  const color = darkMode ? 'white' : 'black';

  return (
    <div style={{ backgroundColor, height: '100vh' }}>
      <button
        style={{ color, fontSize: '24px', padding: '10px 20px' }}
        onClick={toggleDarkMode}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default ToggleButton;
