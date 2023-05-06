import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/navSlice'

const Head = () => {

  const dispatch = useDispatch()

  const toggleMenuHandler = ()=>{
    dispatch(toggleMenu());
  }
  return (
    <div className='grid grid-flow-col p-4 m-2 shadow-lg'>
      <div className='flex col-span-1'>
        <img onClick={()=>toggleMenuHandler()} className='h-12 cursor-pointer' src='https://static.vecteezy.com/system/resources/previews/002/292/406/original/hamburger-menu-line-icon-free-vector.jpg' alt='hamburger-menu-icon'/>
        <img className='h-16' src='https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500' alt='youtube-logo'/>
      </div>
      <div className='col-span-10 px-10'>
        <input className='rounded-l-full border border-gray-400 w-1/2' type="text" />
        <button className='rounded-r-full border border-gray-800'>Search</button>
      </div>
      <div className='col-span-1'>
        <img className='h-16' src='https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg' alt='user-icon' />

      </div>
    </div>
  )
}

export default Head