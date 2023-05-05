import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../components/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (await login(email, password)) {
      router.push('/');
    }
  };

  return (
    <div>
      <h2>Welcome!</h2>
	  <form onSubmit={handleSubmit}>
	    <div > 
	      <label htmlFor="email">Email:     </label>
	      <input
	        type="email"
	        id="email"
	        value={email}
	        onChange={(e) => setEmail(e.target.value)}
	      />
	    </div>
	    <div>
	      <label htmlFor="password">Password:   </label>
	      <input
	        type="password"
	        id="password"
	        value={password}
	        onChange={(e) => setPassword(e.target.value)}
	      />
	    </div>
	    <button type="submit"> Submit </button>
	  </form>
	</div>
	); 
};
export default Login;