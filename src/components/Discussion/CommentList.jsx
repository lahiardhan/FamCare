import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaRegCommentDots } from "react-icons/fa";
import CommentDataService from "../../services/comments.services";
import showFormattedDate from "../../utils/formattedDate";
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode';

function CommentList() {
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState({
    username: 'user',
  });

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const jwtToken = atob(token);
      const payLoad = jwtDecode(jwtToken)
      const userFromPlayLoad = payLoad.player;
      user.username = `${userFromPlayLoad.username}`;
      setUser(user);
    }
  }, []);

  useEffect(() => {
    getComments();
  });

  const getComments = async () => {
    const data = await CommentDataService.getAllComments();
    setComments(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  return (
    <>
      <div className="mt-10">
        <h2 className="text-xl font-medium">Comments</h2>
      </div>
      {comments.map((doc, index) => {
        return (
          <div className="mt-2 border border-slate-200 rounded-md shadow-md">
            <div className="w-10/12 p-10">
              <p key={index}>{doc.comments}</p>
              <div className="flex items-center mt-3 space-x-2"></div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default CommentList;
