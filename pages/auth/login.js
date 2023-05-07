import { useState } from 'react';
import api from '../../components/api';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Login = () => {
    const { push } = useRouter();
    const [alert,setAlert] = useState();

    const initialValues = {
        identifier: "",
        password: ""
    }

    const validationSchema = Yup.object({
        identifier: Yup.string().required("Required"),
        password: Yup.string().required("Required")
    });

    const onSubmit = (values, { setSubmitting, resetForm }) => {
        setAlert();

        api
		.post('/auth/local/register', values)
		.then(response => {
		  const message = `Please check your email (${values.email}) to confirm your account.`;
		  setAlert(['success', message]);
		  setEmail(values.email);
	  
		  resetForm();
		})
		.catch(error => {
		  if (error.response && error.response.data && error.response.data.message) {
			// If the error response and message exist, set the alert message
			setAlert(['alert', error.response.data.message]);
		  } else {
			// If the error response or message does not exist, set a generic error message
			const messages = error.response && error.response.data && Array.isArray(error.response.data.message) && error.response.data.message.length > 0 && error.response.data.message[0].messages
			  ? error.response.data.message[0].messages
			  : ["Something went wrong"];
			const list = [];
			messages.map((message,i) => {
			  let item = "";
			  if (i === 0) item += `<ul>`;
			  item += `<li>${message.id}</li>`;
			  if (i === messages.length - 1) item += `</ul>`;
			  list.push(item);
			});
			setAlert(['alert', list]);
		  }
		})
		.finally(() => {
		  setSubmitting(false);
		});
    }

    return (
        <>
            <h1>Login</h1>
            <hr />
            {alert && (
                <div style={{ backgroundColor: "lightcoral" }}>
                    <div dangerouslySetInnerHTML={{ __html: alert[1] }} />
                </div>
            )}
            <br />
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => onSubmit(values, { setSubmitting, resetForm })} >
                { ({ isSubmitting, isValid }) => (
                    <Form>
                        <div>
                            <div><label htmlFor="identifier">Username or Email</label></div>
                            <Field type="text" id="identifier" name="identifier" placeholder="Username or Email" />
                            <div className="error"><ErrorMessage name="identifier" /></div>
                        </div>

                        <br />

                        <div>
                            <div><label htmlFor="password">Password</label></div>
                            <Field type="password" id="password" name="password" placeholder="Password" />
                            <div className="error"><ErrorMessage name="password" /></div>
                            <small>
                                <Link href="/auth/forgot-password">Forgot password? </Link>
                            </small>
                        </div>

                        <br />

                        <button 
                            type="submit"
                            disabled={!isValid} >
                            {!isSubmitting && "Login"}
                            {isSubmitting && "Loading..."}
                        </button>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default Login;