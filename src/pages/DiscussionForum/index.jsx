/* eslint-disable max-len */
import userEvent from '@testing-library/user-event';
import { doc } from 'firebase/firestore';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import ModalDiscussion from '../../components/Discussion/ModalDiscussion';
import DiscussionDataService from '../../services/discussion.services';
import { Link, useNavigate } from 'react-router-dom';

function DiscussionForum() {
  const [discussions, setDiscussion] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    getDiscussions();
  }, [])

  console.log(discussions);

  const getDiscussions = async () => {
    const data = await DiscussionDataService.getAllDiscussions();
    setDiscussion(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
  }
  return (
    <div className="mt-20 px-10 lg:px-[120px] lg:py-[30px]">
      <div className="flex w-full flex-col-reverse space-x-0 lg:space-x-6 lg:flex-row">
        <div className="lg:w-[70%]">
          <div className="w-full flex">
            <form action="" className="w-full flex items-center">
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <FiSearch />
                </div>
                <input type="text" id="simple-search" className="text-gray-300bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-secondary-color focus:border-secondary-color w-full pl-10 p-2.5" required placeholder="Cari pembahasan..." />
              </div>
            </form>
            <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-primary-color rounded-lg border focus:ring-4 focus:outline-none focus:ring-blue-300 ">
              <FiSearch />
            </button>
          </div>
          {discussions.map((doc, index) => {
            return (
            <div className="mt-8 shadow-lg rounded-lg" key={doc.id}>
              <div className="bg-secondary-color px-10 py-5 rounded-tr-lg rounded-tl-lg">
                <Link to={`/forum/${doc.id}`}>
                  <h1 className="text-lg font-medium text-white lg:text-2xl">{doc.title}</h1>
                  </Link>
              </div>
              <div className="bg-gray-100 px-10 py-3 rounded-bl-lg rounded-br-lg">
                <p className="text-justify text-sm lg:text-base">
                  {doc.content}
                </p>
                <div className="mt-10">
                  <span className="rounded-xl px-4 py-1 text-white font-medium  bg-primary-color">#keyword</span>
                </div>
              </div>
            </div>
              )
            })}
        </div>
        <div className="w-full mt-5 mb-3 lg:mt-0 lg:mb-0 lg:w-[30%]">
          <div className="flex flex-col justify-center items-center lg:flex-row">
            <button type="button" className="w-full p-3 text-md font-medium text-white bg-secondary-color rounded-lg lg:text-xl">
              <ModalDiscussion/>
            </button>
          </div>
          {/* <div className="border-secondary-color border h-full mt-10 rounded-lg hidden lg:block">
            <div className="flex justify-center">
              <h1 className="mt-5 text-2xl font-medium">Kata kunci</h1>
            </div>
            <div className="grid grid-cols-3 px-5 mt-3 gap-2">
              <span className="rounded-xl px-4 py-1 text-white font-medium  bg-primary-color">#keyword </span>
              <span className="rounded-xl px-4 py-1 text-white font-medium  bg-primary-color">#keyword </span>
              <span className="rounded-xl px-4 py-1 text-white font-medium  bg-primary-color">#keyword </span>
              <span className="rounded-xl px-4 py-1 text-white font-medium  bg-primary-color">#keyword </span>
              <span className="rounded-xl px-4 py-1 text-white font-medium  bg-primary-color">#keyword </span>
              <span className="rounded-xl px-4 py-1 text-white font-medium  bg-primary-color">#keyword </span>
              <span className="rounded-xl px-4 py-1 text-white font-medium  bg-primary-color">#keyword </span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default DiscussionForum;
