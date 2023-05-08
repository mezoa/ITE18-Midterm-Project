import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styles from '../../styles/Home.module.css';

export default function NotAuthenticated() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace('/Auth/sign-in');
    }, 2000);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Strapi - Next - NextAuth</title>
      </Head>
      <h1>Your Accesss is Not Authenticated</h1>
      <h2>You will be directly redirected to Sign-In Page</h2>
    </div>
  );
}