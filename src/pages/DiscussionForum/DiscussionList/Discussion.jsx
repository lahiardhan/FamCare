import React from 'react'
import CommentForm from '../../../components/Discussion/CommentForm'
import CommentList from '../../../components/Discussion/CommentList'
import DiscussionBody from '../../../components/Discussion/DiscussionBody'
import DiscussionTitle from '../../../components/Discussion/DiscussionTitle'
import 'react-toastify/dist/ReactToastify.css';

const Discussion = ({ token }) => {
  return (
    <>
    <div className="mt-20 px-10 lg:px-[120px] lg:py-[30px]">
      <div className="flex w-full flex-col-reverse space-x-0 lg:space-x-6 lg:flex-row">
        <div className="w-full">
            <a href="/content">
                <DiscussionTitle/>
            </a>
            <DiscussionBody />
            <CommentList />
            <CommentForm token={token}/>
          </div>
        </div> 
      </div>
    </>
  )
}

export default Discussion