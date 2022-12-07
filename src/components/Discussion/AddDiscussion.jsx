import { React, useState } from "react";
import DiscussionDataService from "../../services/discussion.services";

const AddDiscussion = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [date, setDate] = useState("");
    const [message, setMessage] = useState({error: false, msg: ""});

    const submitHandler = async (e) => {
        e.preventDefault();
        if(title === "" || content === ""){
          setMessage({ error: true, msg: "wajib diskusi yah" });
          return;
        }
      const newDiscussion = {
        title,
        content,
      }
      console.log(newDiscussion);
      try {
        await DiscussionDataService.addDiscussions(newDiscussion);
      } catch (error) {
        setMessage({error: true, msg: error.message})
      }
      setTitle("");
      setContent("")
    }

    return (
<form onSubmit={submitHandler}>
  <div class="mb-6">
    <label htmlFor="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Masukkan Judul</label>
    <input type="text" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={title} onChange={(e) => setTitle(e.target.value)} required/>
  </div>
  <div class="mb-6">
    <label htmlFor="content" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Masukan diskusi</label>
    <input type="text" id="content" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={content} onChange={(e) => setContent(e.target.value)} required/>
  </div>
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
    )
}

export default AddDiscussion;