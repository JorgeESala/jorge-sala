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
    document.body.classList.add('darkMode');

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
