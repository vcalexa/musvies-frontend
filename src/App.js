// src/App.js
import React from 'react';
import { ThemeProvider, CssBaseline, Container } from '@mui/material';
import theme from './theme';
import Header from './components/Header';
import MainContent from './components/MainContent';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

//function App() {
//  return (
//    <ThemeProvider theme={theme}>
//      <CssBaseline />
//      <Container>
//        <Header />
//        <MainContent />
//      </Container>
//    </ThemeProvider>
//  );
//}

function App() {
  const handleLoginSuccess = async (response) => {
    console.log(response);
    try {
      const res = await axios.post('http://localhost:8080/api/auth/youtube/callback', {
        token: response.credential,
      });
      console.log(res.data);
    } catch (error) {
      console.error('Error during authentication', error);
    }
  };

  const handleLoginFailure = (response) => {
    console.error('Login failed', response);
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div className="App">
        <h1>Login with YouTube</h1>
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginFailure}
        />
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
