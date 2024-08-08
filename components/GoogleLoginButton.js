import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

function GoogleLoginButton() {
  const login = useGoogleLogin({
    onSuccess: async (response) => {
      const { code } = response;
      try {
        const result = await axios.post('/api/auth/google/login', {
          authorizationCode: code,
        });
        console.log(result.data);
      } catch (error) {
        console.error('Error during Google login', error);
      }
    },
    flow: 'auth-code',
  });

  return (
    <button onClick={() => login()}>Sign in with Google</button>
  );
}

export default GoogleLoginButton;
