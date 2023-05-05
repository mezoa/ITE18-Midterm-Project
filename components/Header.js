import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from './AuthContext';

const Header = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          {!user && (
            <li>
              <Link href="/login">Login</Link>
            </li>
          )}
          {user && (
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;