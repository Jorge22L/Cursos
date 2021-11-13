import React from 'react';
import { TextField, ThemeProvider } from "@mui/material";
import theme from './theme/Styles';
import RegistrarUsuario from './theme/components/seguridad/RegistrarUsuario';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RegistrarUsuario />
    </ThemeProvider>
  );
}

export default App;
