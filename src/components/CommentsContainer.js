import React from 'react'

const CommentsData = [
  {
    name: 'shaquib',
    text: 'lorem ipsum dolor sit',
    replies: []
  },
  {
    name: 'shaquib',
    text: 'lorem ipsum dolor sit',
    replies: []
  },
  {
    name: 'shaquib',
    text: 'lorem ipsum dolor sit',
    replies: [
      {
        name: 'shaquib',
        text: 'lorem ipsum dolor sit',
        replies: []
      },
      {
        name: 'shaquib',
        text: 'lorem ipsum dolor sit',
        replies: [
          {
            name: 'shaquib',
            text: 'lorem ipsum dolor sit',
            replies: [
              {
                name: 'shaquib',
                text: 'lorem ipsum dolor sit',
                replies: []
              },
            ]
          },
        ]
      },
    ]
  },
  {
    name: 'shaquib',
    text: 'lorem ipsum dolor sit',
    replies: []
  },
]

const Comment = ({ data }) => {
  const { name, text, replies } = data;

  return (
    <div className='flex shadow-sm bg-gray-100 p-2 mb-2 rounded-lg'>
      <img className='w-12 h-12 rounded-lg m-1' src='https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg' alt='' />
      <div className='px-3'>
        <p className='font-bold'>{name}</p>
        <p>{text}</p>
      </div>

    </div>
  )
}

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className='pl-5 border border-l-black ml-5'>
        <CommentList  comments={comment.replies}/>
      </div>
    </div>
  ))
}
const CommentsContainer = () => {
  return (
    <div className='p-2 m-2'>
      <h1 className='font-bold'>COMMENTS :</h1>
      <CommentList comments={CommentsData} />
    </div>
  )
}

export default CommentsContainer;