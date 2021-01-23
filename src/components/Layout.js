import React from 'react';

import SearchMovies from './SearchMovies';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import 'fontsource-roboto';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const theme = createMuiTheme({
  typography: {
    h1: {
      textAlign: 'center',
      marginBottom: 35,
      marginTop: 25, 
      fontSize: 80
    }, 
    h3: {
      textAlign: 'center',
      marginBottom: 40, 
      marginTop: 40,
      fontSize: 60
    }, 
    h4: {
      textAlign: 'center',
      marginBottom: 20, 
      marginTop: 20 
    },
    subtitle1: {
      fontSize: 18
    }, 
  }
})

const Layout = () => {
    return ( 
      <>
        <ThemeProvider theme={theme}>
          <Container maxWidth="md">
            <Typography variant="h1">
              Movie Search
            </Typography>
            <SearchMovies />    
          </Container>
        </ThemeProvider>
      </>  
    );
}
 
export default Layout;