import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material/CssBaseline';
import { lightTheme, darkTheme, luckyTheme, megaTheme, powerTheme } from './themes.js';
import LotteryGenerator from './components/lottery-numbers';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lottery Number Generator</h1>
        <LotteryGenerator />
      </header>
    </div>
  );
}

export default App;