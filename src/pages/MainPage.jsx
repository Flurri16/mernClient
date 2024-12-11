import React from 'react';
import {useSelector} from 'react-redux'
import PostPage from './PostPage';
import { checkIsAuth } from '../redux/authSlice';
const MainPage = () => {
    const isAuth = useSelector(checkIsAuth)
    return (
        <div>
            {
                isAuth ? <PostPage></PostPage> : <div className='text-5xl text-center mt-[150px]'>Login to see posts.</div>
            }
            
        </div>
    );
}

export default MainPage;
