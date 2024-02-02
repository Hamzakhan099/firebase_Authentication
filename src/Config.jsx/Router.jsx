import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { auth, onAuthStateChanged } from '../Config.jsx/FirebseConfig'
import SignUp from '../Pages/SignUp'
import LogIn from '../Pages/LogIn'
import Profile from '../Pages/Profile'
import Error from '../Pages/Error'

export default function Router() {

    // const [User, setUser] = useState(false)
    // useEffect(function () {
    //     onAuthStateChanged(auth, (User) => {
    //         if (User) {
    //             const uid = User.uid;
    //             console.log(uid)
    //             setUser(true)
    //         }
    //         else {
    //             console.log('user not login')
    //             setUser(false)
    //         }
    //     })
    // }, [])

    return (
        <BrowserRouter>
            <Routes>
                <Route path='*' element={<Error />} />
                <Route path='/' element={<SignUp />} />
                <Route path='/login' element={<LogIn />} />
                <Route path='/profile' element={<Profile />} />

            </Routes>
        </BrowserRouter>
    )
}
