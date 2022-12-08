import React from 'react'
import CommentForm from '../../../components/Discussion/CommentForm'
import CommentList from '../../../components/Discussion/CommentList'
import DiscussionBody from '../../../components/Discussion/DiscussionBody'
import DiscussionTitle from '../../../components/Discussion/DiscussionTitle'

const Discussion = () => {
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
            <CommentForm/>
          </div>
        </div> 
      </div>
    </>
  )
}

export default Discussion