import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaRegCommentDots } from 'react-icons/fa'
import CommentDataService from "../../services/comments.services";

function CommentList() {
    const [comments, setComments] = useState([])

    useEffect(() => {
        getComments()
    })

    const getComments = async () => {
        const data = await CommentDataService.getAllComments();
        setComments(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }
    return (
        <>
            {comments.map((doc, index) => {
                return (
        <div className="mt-10 border border-slate-200 rounded-md shadow-md">
            <div className="w-10/12 p-10">
                <h1 className="text-xl font-medium">tes - <span>tanggal</span></h1>
                        <p key={index}>{ doc.comments }</p>
                <div className="flex items-center mt-3 space-x-2">
                </div>
            </div>
        </div>  
                )
            }) }
        </>
    )
}

export default CommentList;