import React, {useState}from 'react';
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
// import { createPost } from '../redux/features/post/postSlice';
const AddPostPage = () => {
    // const [title, setTitle] = useState('')
    // const [text, setText] = useState('')
    // const [image, setImage] = useState('')
    // const dispatch = useDispatch()
    // const navigate = useNavigate()
    // const submitHandler = () => {
    //     try {
    //         const data = new FormData()
    //         data.append('title', text)
    //         data.append('text', text)
    //         data.append('image', image)
    //         dispatch(createPost(data))
    //         navigate('/')
    //     } catch(err) {
    //         console.log(err)
    //     }
    // }
    // const clearFormHandler = () => {
    //     setText('')
    //     setTitle('')
    // }

    return (
        <form className='w-1/3 mx-auto py-10 text-2xl' onSubmit={(e) => e.preventDefault()}>
            <label className='text-gray-300 py-2 bg-gray-600 text-3xl mt-2 flex items-center justify-center border-2 border-dotted cursor-pointer'>
                Pin the image:
                <input type="file" className='hidden' />
            </label>
            <div className='flex object-cover pw-2'></div>
            <label className=' text-white opacity-70'>
                Title of post: 
                <input type="text" placeholder='title' className='mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2  outline-none placeholder:text-gray-700'/>
            </label>
            <label className=' text-white opacity-70'>
                Text of post: 
                <textarea placeholder='text'  className='  mt-1 text-black w-full resize-none h-40 rounded-lg bg-gray-400 border py-1 px-2  outline-none placeholder:text-gray-700'/>
            </label>
            <div className='flex gap-8 items-center justify-center mt-4'>
                <button className='flex justify-center items-center bg-gray-600  text-white rounded-sm py-2 px-4'>Add post</button>
                <button className='flex justify-center items-center bg-red-500  text-white rounded-sm py-2 px-4'>Cancel</button>
            </div>
        </form>
    );
}

export default AddPostPage;
