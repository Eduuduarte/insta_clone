import Image from 'next/image';
import React from 'react';
import dots from '../assets/dots.png';
import hearth from '../assets/hearth.png';
import comment from '../assets/comment.png';
import message from '../assets/message.png';
import save from '../assets/save.png';
import emojy from '../assets/emojy.png';

const Post = ({ userName, profilePic, postPhoto, caption }) => {
   const comments=[
    {
    username: "jon Doe",
    comment: "Hello from the comment section"
   },
    {
    username: "Mike Doe",
    comment: "Second Hello from the comment section"
   },
  ]

  return (
    <div>
      <div className='border rounded-lg my-3'>
        {/* Header */}
        <div className='flex items-center p-3'>
          <div className='flex items-center w-full'>
            <div className='h-8 w-8 mr-3'>
              <img src={profilePic.src} alt='' className='rounded-full' />
            </div>
            <div className=''>
              <p className='font-semibold text-sm'>{userName}</p>
              <p className='text-sm'>Original Audio</p>
            </div>
          </div>
          <div className='h-6 w-6'>
            <Image src={dots} />
          </div>

        </div>
        {/* Photo */}
        <div className=''>
          <img src={postPhoto.src} />
        </div>

        <div className='m-3'>
          {/* Buttons */}
          <div>
            <div className='flex justify-between'>
              <div className='flex space-x-4'>
                <div className='Btn'>
                  <Image src={hearth} />
                </div>
                <div className='Btn'>
                  <Image src={comment} />
                </div>
                <div className='Btn'>
                  <Image src={message} />
                </div>
              </div>

              <div className='Btn'>
                <Image src={save} />
              </div>
            </div>
          </div>

          <div className='mt-2 customfont'>
            <p>20,573 likes</p>
          </div>
        </div>

        {/* Caption */}
        <div className='flex items-center mt-2 m-3'>
          <p className='customfont mr-2 whitespace-nowrap'>{userName}</p>
          <p className='truncate'>{caption}</p>
        </div>
        {/* View all comments */}
          <p className='text-sm text-gray-700 mt-1 my-2 m-3'>View all 327 comments</p>
        {/* Coments */}
        <div className=''>
          {comments.map((comment) => (
            <div className='max-w-24 overflow-y-auto flex justify-between m-3'>
              <div className='flex items-center truncate'>
                <p className='customfont mr-2'>{comment.username}</p>
                <p className='truncate mr-2'>{comment.comment}</p>
              </div>
              <div className='h-3 w-3 shrink-0'>
                <Image src={hearth}/>
              </div>
            </div>
          ))}
        </div>
        {/* TimeStamp */}
        <p className='text-gray-400 text-xs my-2 m-3'>4 minutes ago</p>
        {/* Border */}
        <div className='border-t my-3'></div>
        {/* Input */}
        <div className='flex justify-between p-1 m-3'>
            <div className='flex'>
              <div className='Btn mr-4'>
                <Image src={emojy}/>
              </div>

              <input className='outline-0' type="text" placeholder="Add a comment..."/>
            </div>
            <button className='font-bold text-sm text-[#0095F6]'>Post</button>
        </div>
      </div>
    </div>
  )
}

export default Post
