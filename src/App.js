import React from 'react'
import Homepage from './components/Homepage'
import './App.css'
import { useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Switch } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline'


const App = () => {
  const [theme, settheme] = useState(false);
  const darkTheme = createTheme({
    palette: {
      mode: theme ? 'dark' : 'light',
    },
  });
  const handleChange = (event) => {
    settheme(event.target.checked);
  }
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Homepage />
        <label>Dark Mode</label>
        <Switch
          checked={theme}
          onChange={handleChange} />
      </ThemeProvider>


    </div>
  )
}

export default App
