import React, { useEffect, useState } from 'react';
import './App.css';
import WelcomePage from './component/WelcomePage';
import HomePage from './component/HomePage';
import ToggleTheme from './component/ToggleTheme';

function App() {
  const [displayHome, showIntro] = useState(true);

  function toggleMode() {
    document.body.classList.toggle('darkMode');
  }

  useEffect(() => {
    // Activar dark mode por defecto
    document.body.classList.add('darkMode');

    // Mostrar la página principal después de un tiempo
    const timer = setTimeout(() => {
      showIntro(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ToggleTheme toggleTheme={toggleMode} />
      {displayHome ? <WelcomePage /> : <HomePage />}
    </>
  );
}

export default App;
