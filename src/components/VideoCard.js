import React from 'react'

const VideoCard = ({ info }) => {
    const {snippet, statistics} = info;
    const {channelTitle, thumbnails, title} = snippet;
    const {viewCount} = statistics;
  return (
    <div className='p-8 m-2 shadow-lg'>
       <img className='h-40 w-64 rounded ' alt='thumbnails' src={thumbnails.medium.url} />
       <h2 className='font-bold w-60'>{title}</h2>
       <h4 className=''>{channelTitle}</h4>
       <h5>{viewCount/100}K views</h5>
    </div>
  )
}

export const AdVideoCard = ({info})=> {
  return (
    <div className='p-2 m-2 border border-red-900'>
        <VideoCard info={info}/>
    </div>
  
  )
}

export default VideoCard;