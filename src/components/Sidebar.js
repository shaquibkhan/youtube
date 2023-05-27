import React from 'react'
import { useSelector } from 'react-redux'
import store from '../utils/store'
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const isMenuOpen = useSelector((store)=> store.app.isMenuOpen);

  // early return pattern
  // if(!isMenuOpen) return null;

  return (!isMenuOpen) ? '': (
    <div className='Roboto p-5 shadow-lg w-48 '>
      <ul className=''>
        <Link to={"/"}>
        <li className='bg-gray-200 rounded p-1 text-center'>Home</li>
        </Link>
        <li className=' rounded p-1 text-center'>Shorts</li>
        <li className=' rounded p-1 text-center'>Subscriptions</li>
      </ul>
      <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
      <ul>
        <li className=' rounded p-1 text-center'>Library</li>
        <li className=' rounded p-1 text-center'>History</li>
        <li className=' rounded p-1 text-center'>Your videos</li>
        <li className=' rounded p-1 text-center'>Watch later</li>
        <li className=' rounded p-1 text-center'>Show More</li>
      </ul>
      <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
      <ul>
      <li className=' rounded p-1 text-center'>Liked videos</li>
        <li className=' rounded p-1 text-center'>Cricket</li>
        <li className=' rounded p-1 text-center'>Mix videos</li>
        <li className=' rounded p-1 text-center'>Watch later</li>
        </ul>
    </div>
  )
}

export default Sidebar