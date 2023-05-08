Name                  : Meo Angelo Z. Alcantara
Course Code & Section : ITE18 - GP1

Title: Next.js Login with Strapi User Authentication Step-by-Step Process

Introduction: In this tutorial, we will walk through the process of setting up user authentication in a Next.js app using Strapi as the back-end. Strapi is a headless CMS that allows for easy API creation and management.

Prerequisites:

-   Basic knowledge of JavaScript and Next.js
-   Familiarity with Strapi
-   Node.js and NPM installed on your system
-   Strapi project set up with user roles and permissions configured
-   Next.js project initialized


Title 1: Configuration Strapi Project
Step A. Prerequisite Requirements 
Install Strapi Project to your Computer Device with prerequisite that the nodes > 14 but less than 16 version.
Preffered Package Manager: npm

Step B: Installation (Strapi)
//Create a directory and install the dependencies of strapi api
- npx create-strapi-app@latest strapi-project
//To Run Strapi and Produce Localhost link for further configuration
- npm run develop
    - localhost:1337/admin   //admin panel
    - localhost:1337/       //server side link

Step C: Configuration of API Contents in Strapi
A. Content Manager
    1. User - This part records or register the uses and allows authentication if registered on that part
    2. LNovel (Light Novels) - Possible Contents of my website
    3. Home - Home
B. Content Type Builder
    1. Enable Email and Password
C. Create API (Endpoint) Token
    1. Create New Entry
    -Name: LNovel 
    -Duration: Unlimited
    -Access: Full Access
    -Save
D. Roles and Permission
    A. User
    -Enable/Check

Step D. Installation of Frontend Packages and others
A. Creating a Directory for the frontend servers
- For Nuxt -> npx create-nuxt-app <project-name>
- For Next ->npx create-next-app <project-name>
B. Installing Dependicies
-npm install for both server to install all the dependencies to guarantee a complete installed modules to be used in the frontend
C. Running or Development of Nuxt or Next into a good environment or website or to produce a localhost link
-npm run dev
-displayed the localhost:3000/
-envoking clear to the terminal for every need of compilation
D. Configuring Packages or Files in the FrontEnd server
1. In Next.js
    Configured a .env.local file to initialized the localhost of strapi endpoint
     Name                  : Meo Angelo Z. Alcantara
Course Code & Section : ITE18 - GP1

Title: Next.js Login with Strapi User Authentication Step-by-Step Process

Introduction: In this tutorial, we will walk through the process of setting up user authentication in a Next.js app using Strapi as the back-end. Strapi is a headless CMS that allows for easy API creation and management.

Prerequisites:

-   Basic knowledge of JavaScript and Next.js
-   Familiarity with Strapi
-   Node.js and NPM installed on your system
-   Strapi project set up with user roles and permissions configured
-   Next.js project initialized


Title 1: Configuration Strapi Project
Step A. Prerequisite Requirements 
Install Strapi Project to your Computer Device with prerequisite that the nodes > 14 but less than 16 version.
Preffered Package Manager: npm

Step B: Installation (Strapi)
//Create a directory and install the dependencies of strapi api
- npx create-strapi-app@latest strapi-project
//To Run Strapi and Produce Localhost link for further configuration
- npm run develop
    - localhost:1337/admin   //admin panel
    - localhost:1337/       //server side link

Step C: Configuration of API Contents in Strapi
A. Content Manager
    1. User - This part records or register the uses and allows authentication if registered on that part
    2. LNovel (Light Novels) - Possible Contents of my website
    3. Home - Home
B. Content Type Builder
    1. Enable Email and Password
C. Create API (Endpoint) Token
    1. Create New Entry
    -Name: LNovel 
    -Duration: Unlimited
    -Access: Full Access
    -Save
D. Roles and Permission
    A. User
    -Enable/Check

Step D. Installation of Frontend Packages and others
A. Creating a Directory for the frontend servers
- For Nuxt -> npx create-nuxt-app <project-name>
- For Next ->npx create-next-app <project-name>
B. Installing Dependicies
-npm install for both server to install all the dependencies to guarantee a complete installed modules to be used in the frontend.
C. Running or Development of Nuxt or Next into a good environment or website or to produce a localhost link
-npm run dev
-displayed the localhost:3000/
-envoking clear to the terminal for every need of compilation
D. Configuring Packages or Files in the FrontEnd server (Next.js)
1. In Next.js
    a. Configured a .env.local file to initialized the localhost of strapi endpoint
    STRAPI_URL=http://localhost:1337
    NEXTAUTH_SECRET=<SECRET>
    NEXTAUTH_URL=http://localhost:3000
    b. style
    -Configure the general design or sight to the webpage
    -Home.module.cc & SignIn.module.css
E. Modifying and Manipulating Components/Pages and others (next.js)
1. Services
    -auth.js - for making API endpoint
    import axios from 'axios';
        
        const strapiUrl = process.env.STRAPI_URL;

        export async function signIn({ email, password }) {
        const res = await axios.post(`${strapiUrl}/api/auth/local`, {
            identifier: email,
            password,
        });
        return res.data;
        }
2. Page/Auth Invocation of Authentication Tools 
-Sign-in
    ->Not-Auth -> A Js or file that indicates an error by the User end by accessing stricted pages.
    import axios from 'axios';

    const strapiUrl = process.env.STRAPI_URL;

    export async function signIn({ email, password }) {
    const res = await axios.post(`${strapiUrl}/api/auth/local`, {
        identifier: email,
        password,
    });
    return res.data;
    }

    ->Sign-in Page
        -Enail and Password User Input
        -Sign in button that was not able integrate using Strapi but yet again was able to post the data.
        - Also the part where the fething and posting happends for authentication using Strapi

-Home/Index-
    -Page that showcase the Home button/frontpage typically of the website.
    
    import { signOut, useSession } from 'next-auth/react';
    import Head from 'next/head';
    import Link from 'next/link';
    import { useEffect } from 'react';
    import styles from '../styles/Home.module.css';

        export default function Home() {
        const { data: session } = useSession();

        useEffect(() => {
            if (session == null) return;
            console.log('session.jwt', session.jwt);
        }, [session]);

        return (
            <div className={styles.container}>
            <Head>
                <title>Strapi - Next - NextAuth</title>
            </Head>
            <h1>{session ? 'Authenticated' : 'Not Authenticated'}</h1>
            {session && (
                <div style={{ marginBottom: 10 }}>
                <h3>Session Data</h3>
                <div>Email: {session.user.email}</div>
                <div>JWT from Strapi: Check console</div>
                </div>
            )}
            {session ? (
                <button onClick={signOut}>Sign out</button>
            ) : (
                <Link href="/Auth/sign-in">
                <button>Sign In</button>
                </Link>
            )}
            <Link href="/protected">
                <button
                style={{
                    marginTop: 10,
                }}
                >
                Protected Page
                </button>
            </Link>
            </div>
        );
        }

-Protected Page -> display the protected page which only allows user that was authenticated to access the page and if not it'll simply not process the value

            import { getSession } from 'next-auth/react';
            import Head from 'next/head';
            import Link from 'next/link';
            import styles from '../styles/Home.module.css';

            export default function Protected() {
            return (
                <div className={styles.container}>
                <Head>
                    <title>Strapi - Next - NextAuth</title>
                </Head>
                <h1>Protected Page</h1>
                <Link href="/">
                    <button>Back to home page</button>
                </Link>
                </div>
            );
            }

            export const getServerSideProps = async (context) => {
            const session = await getSession(context);
            // Check if session exists or not, if not, redirect
            if (session == null) {
                return {
                redirect: {
                    destination: '/Auth/not-auth',
                    permanent: true,
                },
                };
            }
            return {
                props: {},
            };
            };

3. API Endpoint
-nextAuth.js - establish connection with the API token to allow authentication
        const jwt = localStorage.getItem('jwt');

        const response = await fetch('http://localhost:1337/users/me', {
        headers: {
            'Authorization': `Bearer ${jwt}`
        }
        });

        if (response.ok) {
        const data = await response.json();
        console.log(data);
        }

-[...nextauth].js -creating or configuring authentication providers
        -import NextAuth from 'next-auth';
        import CredentialsProvider from 'next-auth/providers/credentials';
        import { signIn } from '../../../services/auth';

        export default NextAuth({
        // Configure one or more authentication providers
        providers: [
            CredentialsProvider({
            name: 'Sign in with Email',
            credentials: {
                email: { label: 'Email', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials, req) {
                /**
                * This function is used to define if the user is authenticated or not.
                * If authenticated, the function should return an object contains the user data.
                * If not, the function should return `null`.
                */
                if (credentials == null) return null;
                /**
                * credentials is defined in the config above.
                * We can expect it contains two properties: `email` and `password`
                */
                try {
                const { user, jwt } = await signIn({
                    email: credentials.email,
                    password: credentials.password,
                });
                return { ...user, jwt };
                } catch (error) {
                // Sign In Fail
                return null;
                }
            },
            }),
        ],
        callbacks: {
            session: async ({ session, token }) => {
            session.id = token.id;
            session.jwt = token.jwt;
            return Promise.resolve(session);
            },
            jwt: async ({ token, user }) => {
            const isSignIn = user ? true : false;
            if (isSignIn) {
                token.id = user.id;
                token.jwt = user.jwt;
            }
            return Promise.resolve(token);
            },
        },
        });
        
5. Problem: Not able to authenticate the user as of the moment but was able to communicate with the strapi