import Header from '@importnext/components/Header';
import { AuthProvider } from '../components/AuthContext';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Header />
      <Component {...pageProps} />
    </AuthProvider>
  );
}


export default MyApp;