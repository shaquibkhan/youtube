import React, { useEffect, useState } from 'react'
import { YOTUBE_API } from '../utils/constant';
import VideoCard, { AdVideoCard } from './VideoCard';
import { Link } from 'react-router-dom';

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
    <div className='flex flex-wrap'>
      {/* {videos[0] && <VideoCard info={videos[0]} />} */}
      {videos.map((video)=> (
        <Link key={video.id} to={"/watch?v=" + video.id}>
        <VideoCard key={video.id} info={video}/>
        </Link>
      )
      )}
      
    </div>
  )
}

export default VideoContainer