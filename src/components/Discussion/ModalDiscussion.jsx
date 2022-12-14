import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import DiscussionDataService from "../../services/discussion.services";
import showFormattedDate from "../../utils/formattedDate";

const ModalDiscussion = ({ token }) => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState(showFormattedDate);
  const [message, setMessage] = useState({ error: false, msg: "" });

  const navigate = useNavigate();

    const onAddDiscussionClick = () => {
      if (token === null) {
        toast.error('Mohon Login Terlebih dulu sebelum menambah diskusi');
      } else {
        setShowModal(true);
      }
    }

  // const getDate = () => {
  //   const date = showFormattedDate();
  //   setDate(date);
  // };
  // console.log(getDate);
  const submitHandler = async (e) => {
    e.preventDefault();
    if (title === "" || content === "") {
      setMessage({ error: true, msg: "wajib diskusi yah" });
      return;
    }
    const newDiscussion = {
      title,
      content,
    };
    console.log(newDiscussion);
    try {
      await DiscussionDataService.addDiscussions(newDiscussion);
    } catch (error) {
      setMessage({ error: true, msg: error.message });
    }
    setTitle("");
    setContent("");
    window.location.reload();
  };
  return (
    <>
      <button
        type="button"
        onClick={onAddDiscussionClick}
      >
        Buat diskusi baru +
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  {/* <h3 className="text-3xl font=semibold">General Info</h3> */}
                  <button className="bg-transparent border-0 text-black float-right" onClick={() => setShowModal(false)}>
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">x</span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full" onSubmit={submitHandler}>
                    <label className="block text-black text-sm font-bold mb-1">Masukkan judul</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <label className="block text-black text-sm font-bold mb-1">Masukkan uraian pertanyaan</label>
                    <textarea className="shadow appearance-none border rounded w-full py-2 px-1 text-black" value={content} onChange={(e) => setContent(e.target.value)} />
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <button className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1" type="button" onClick={() => setShowModal(false)}>
                        Tutup
                      </button>
                      <button
                        className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        // onClick={() => setShowModal(false)}
                        type="submit"
                      >
                        Buat data
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default ModalDiscussion;
