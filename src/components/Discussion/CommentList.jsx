import React from "react";
import {FaRegCommentDots} from 'react-icons/fa'

function CommentList() {
    return (
        <div className="mt-10 border border-slate-200 rounded-md shadow-md">
            <div className="w-10/12 p-10">
                <h1 className="text-xl font-medium">tes - <span>tanggal</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis cum enim nisi, expedita voluptatum quae similique nobis. Hic mollitia distinctio, molestias soluta rem voluptate sapiente voluptatem quo aut id quisquam?</p>
                <div className="flex items-center mt-3 space-x-2">
                <FaRegCommentDots size={30} className="" />
                <h1>Balas</h1>
                </div>
            </div>
        </div>
    )
}

export default CommentList;