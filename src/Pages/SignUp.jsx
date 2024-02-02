import React from 'react'
import SignUpForm from '../Forms/SignUpForm'
import { auth, createUserWithEmailAndPassword } from '../Config.jsx/FirebseConfig'
import { useNavigate } from 'react-router-dom'

export default function SignUp() {
    const navigate = useNavigate()

    const Sfun = (data) => {
        // console.log(data);
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                navigate('/login')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    return (
        <div>
            <h1>signUp</h1>
            <SignUpForm Sfunction={Sfun} />
        </div>
    )
}
