import React from "react";
import { useState } from "react";
import CommentsDataService from "../../services/comments.services";
import moment from "moment/moment";

function CommentForm() {
  const [comments, setComments] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  const dateToFormat = moment().format("M MMM YYYY");
  const submitHandler = async (e) => {
    e.preventDefault();
    if (comments === "") {
      setMessage({ error: true, msg: "Tuliskan uraian diskusi terlebih dahulu" });
      return;
    }
    const newComments = {
      comments,
      date: dateToFormat,
    };
    console.log(newComments);
    try {
      await CommentsDataService.addComments(newComments);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
    setComments("");
  };

  return (
    <div className="mt-10">
      <form action="" onSubmit={submitHandler}>
        <textarea name="" id="" cols="30" rows="10" className="w-full rounded-md ring-secondary-color" placeholder="Type something..." value={comments} onChange={(e) => setComments(e.target.value)} required></textarea>
        <div className="flex justify-end">
          <button type="submit" className="bg-secondary-color px-10 py-2 rounded-xl text-white font-medium">
            Diskusi
          </button>
        </div>
      </form>
    </div>
  );
}

export default CommentForm;
