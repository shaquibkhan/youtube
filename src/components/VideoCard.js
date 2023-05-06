import React from 'react'

const VideoCard = ({ info }) => {
    console.log(info)
    const {snippet, statistics} = info;
    const {channelTitle, thumbnails, title} = snippet;
    const {viewCount, likeCount} = statistics;
  return (
    <div className='p-2 m-2'>
       <img className='h-40 w-auto' alt='thumbnails' src={thumbnails.medium.url} />
       <h2>{title}</h2>
       <h2>{channelTitle}</h2>
       <h2>{viewCount/100}K views</h2>
    </div>
  )
}

export default VideoCard;