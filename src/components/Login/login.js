import React, { useState } from 'react'
import {Col, Button, FormGroup, Input, Row} from 'reactstrap';
import axious from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from 'react-router-dom';
import { storeUser } from '../../helper';

const initialUser = {password: "", identifier: ""};

const Login = () => {
    const [user, setUser] = useState(initialUser);
    const navigate = useNavigate();

    const handleChange = ({target}) => {
        const {name, value} = target
        setUser((currentuser) => ({
        ...currentuser,
        [name]: value,
        }));
    };

        const handleLogin = async() => {
        const url = 'http://localhost:1337/api/auth/local';    
            try{
                if (user.identifier && user.password)
                {
                    const {data} = await axious.post(url, user);
                    if (data.jwt){
                    storeUser(data);
                    toast.success('Logged in Successfully!', {
                        hideProgressBar: true,
                    })
                    setUser(initialUser);
                    navigate('/');
                    }
                }
            }catch (error){
                toast.error(error.message, {
                    hideProgressbar: true,
                })
            }


        };
    return (
        <Row className='Login'>
            <Col sm="12" md={{size: 4, offset: 4}}>
                <div>
                    <h2>Login: </h2>
                    <FormGroup>
                        <Input type="email" name="identifier" value={user.identifier} onChange={handleChange} placeholder="Enter Email or Username" />
                    </FormGroup>
                    <FormGroup>
                        <Input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter Password" />
                    </FormGroup>
                    <Button color ="primary" onClick={handleLogin}> Login</Button>
                    <h6>
                        Click <Link to ='/signup'> Here </Link> to Sign Up
                        
                    </h6>
                </div>
            </Col>
        </Row>
        
    );
};

export default Login;