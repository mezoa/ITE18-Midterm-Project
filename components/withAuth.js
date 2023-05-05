import { useAuth } from '../components/AuthContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const withAuth = (Component) => (props) => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  return user ? <Component {...props} /> : null;
};

export default withAuth;
