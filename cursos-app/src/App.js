import React from 'react';
import { TextField, ThemeProvider } from "@mui/material";
import theme from './theme/Theme';
import RegistrarUsuario from './components/seguridad/RegistrarUsuario';
import PerfilUsuario from './components/seguridad/PerfilUsuario';
import Login from './components/seguridad/Login';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Login />
    </ThemeProvider>
  );
}

export default App;
