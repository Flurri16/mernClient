import React, { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { checkIsAuth, registerUser } from '../redux/authSlice';
import { toast } from 'react-toastify';
const RegisterPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const isAuth = useSelector(checkIsAuth)
    const navigate = useNavigate()
    const {status} = useSelector((state) => state.auth)
    useEffect(() => {
        if(status) toast(status)
        if(isAuth) navigate('/')

    }, [status])
    const handlerSubmit = () => {
        try {
            dispatch(registerUser({username, password}))
        } catch(e) {
            console.log(e)
        }
    }
    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()} className="text-2xl bg-slate-500 flex flex-col p-6 w-1/3 mt-40 mx-auto">
                <h1 className="text-center mb-4">Rigistration</h1>
                <label className=" text-gray-400  mb-2">Username:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}  placeholder='Username'className='rounded-lg bg-gray-400 placeholder:text-gray-300 mb-4 p-2'/>
                <label className=" text-gray-400 mb-2">Password:</label>
                <input type="password"  value={password} onChange={(e) => setPassword(e.target.value)}placeholder='Password'className='rounded-lg bg-gray-400 placeholder:text-gray-300 mb-8 p-2'/>
                <div className="flex justify-between items-center">
                    <button className='py-2 px-4 bg-slate-600' onClick={handlerSubmit}>Create</button>
                    <Link to={'/login'}>Already have an account?</Link>
                </div>
            </form>
        </div>
    );
}

export default RegisterPage;
