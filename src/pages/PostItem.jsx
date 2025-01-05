import React from 'react';

const PostItem = () => {
    return (
        <div>
             <div className="w-[700px] bg-slate-300 my-10">
                <h1 className='text-3xl bg-slate-500'>Title</h1>
                <p className='text-2xl bg-slate-600 my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aliquam, architecto perspiciatis rem aliquid at quod recusandae, repellendus corporis culpa maxime </p>
                <div className="flex justify-between text-2xl">
                    <div className="bg-slate-400 ">Author</div>
                    <div className="bg-slate-400 text-2xl">22.06.2007</div>
                </div>
            </div>
        </div>
    );
}

export default PostItem;
