import React, { useEffect, useState } from 'react'
import { YOTUBE_API } from '../utils/constant';
import VideoCard from './VideoCard';

const VideoContainer = () => {
  const [videos, setVideos] = useState([])

  useEffect(()=>{
    getVideos();
  },[])

 const getVideos = async()=>{
  const data = await fetch(YOTUBE_API);
  const json = await data.json();
  setVideos(json.items);
 }
  return (
    <div className='flex'>
      {videos.map((video)=> (
        <VideoCard key={video.id} info={video}/>
      )
      )}
      
    </div>
  )
}

export default VideoContainer