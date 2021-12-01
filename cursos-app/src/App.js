import React from 'react';
import { Grid, ThemeProvider } from "@mui/material";
import theme from './theme/Theme';
import RegistrarUsuario from './components/seguridad/RegistrarUsuario';
import PerfilUsuario from './components/seguridad/PerfilUsuario';
import Login from './components/seguridad/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppNavBar from './components/navegacion/AppNavBar';

function App() {
  return (
      <Router>
        <ThemeProvider theme={theme}>
          <Grid container>
          <AppNavBar>
            <Routes>
              
              <Route exact path='/auth/login' element={<Login />} />
              <Route exact path='/auth/registrar' element={ <RegistrarUsuario />} />
              <Route exact path='/auth/perfil' element={ <PerfilUsuario />} />
              <Route exact path="/" element={ <Login />} />
            </Routes>
            </AppNavBar>
          </Grid>
        </ThemeProvider>
      </Router>
  );
}

export default App;
