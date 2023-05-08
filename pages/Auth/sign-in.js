import Head from 'next/head';
import styles from '../../styles/SignIn.module.css';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:1337/auth/local', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        identifier: email,
        password: password
      })
    });
    const data = await response.json();
    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('jwt', data.jwt);
    }
    alert('Credential is not valid');
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Strapi - Next - NextAuth</title>
      </Head>
      <h1>Sign In</h1>
      <form className={styles.form} onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" className={styles.input} />
        <label
          style={{
            marginTop: 10,
          }}
          htmlFor="password"
        >
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          className={styles.input}
        />
        <button
          className={styles.button}
          style={{
            marginTop: 15,
          }}
        >
          Sign In
        </button>
      </form>
    </div>
  );
}