import { GoogleOAuthProvider } from '@react-oauth/google';

const MyApp = ({ Component, pageProps }) => {
  return (
    <GoogleOAuthProvider clientId="976216336745-6chr0tn4sevdkpsub66sp0i0nrjk0ct9.apps.googleusercontent.com">
      <Component {...pageProps} />
    </GoogleOAuthProvider>
  );
};

export default MyApp;
