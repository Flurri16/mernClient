import { Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";

import MainPage from "./pages/MainPage";
import AddPostPage from './pages/AddPostPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import PostPage from './pages/PostPage'

import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getMe } from "./redux/authSlice";
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getMe())
  }, [dispatch])
  return (
    <div>
      <Layout></Layout>
      <Routes>
      <Route path='/' element={<MainPage/>}/>
        <Route path='register' element={<RegisterPage/>}/>
        <Route path='login' element={<LoginPage/>}/>
        <Route path=':id' element={<PostPage/>}/>
        <Route path='new' element={<AddPostPage/>}/>
        {/* <Route path='posts' element={<PostsPage/>}/> */}
        {/* <Route path=':id/edit' element={<EditPostPage/>}/> */}
      </Routes>
      <ToastContainer position='bottom-right'></ToastContainer>
    </div>
  );
}

export default App;
