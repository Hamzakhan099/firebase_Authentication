import React from 'react'
import LogInForm from '../Forms/LogInForm'
import { auth, signInWithEmailAndPassword } from '../Config.jsx/FirebseConfig'
import { useNavigate } from 'react-router-dom'

export default function LogIn() {
    const navigate = useNavigate()

    const Logfun = (data) => {
        // console.log(data);
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                navigate('/profile')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    return (
        <div>
            <h1>Login</h1>
            <LogInForm keyed={Logfun} />
        </div>
    )
}
