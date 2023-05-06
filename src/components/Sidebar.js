import React from 'react'
import { useSelector } from 'react-redux'
import store from '../utils/store'

const Sidebar = () => {

  const isMenuOpen = useSelector((store)=> store.app.isMenuOpen);

  // early return pattern
  if(!isMenuOpen) return null;

  return (
    <div className='p-5 shadow-lg w-48'>
      <ul>
        <li>home</li>
        <li>shorts</li>
        <li>live</li>
        <li>videos</li>
      </ul>
      <h1 className='font-bold'>Subscriptions</h1>
      <ul>
        <li>music</li>
        <li>sports</li>
        <li>gaming</li>
        <li>movies</li>
      </ul>
      <h1 className='font-bold'>Watch Later</h1>
      <ul>
        <li>music</li>
        <li>sports</li>
        <li>gaming</li>
        <li>movies</li>
      </ul>
    </div>
  )
}

export default Sidebar