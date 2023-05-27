import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/navSlice'
import { YOUTUBE_SEARCH_API } from '../utils/constant';
import { cacheResults } from '../utils/searchSlice';
// import { cacheResults } from '../utils/searchSlice';

const Head = () => {

  const [searchQuery, setsearchQuery] = useState("");
  const [suggestions, setsuggestions] = useState([]);
  const [showSuggestions, setshowSuggestions] = useState(false);

  const dispatch = useDispatch()

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }
  const searchCache = useSelector((store)=>store.search)
  useEffect(() => {
    // make an API call after every key press
    // but if the diff b/w 2 API calls is less than 200ms
    // decline th API call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setsuggestions(searchCache[searchQuery]);
      }
      else {
        getSearchSuggestions()
      }
    }, 200);
    return () => {
      clearTimeout(timer)
    }
  }, [searchQuery])

  const getSearchSuggestions = async () => {
    console.log(searchQuery)
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setsuggestions(json[1]);
    console.log(json[1])
    // update cache
    dispatch(cacheResults({
      [searchQuery]: json[1],
    }))
    
  }
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg}'>
      <div className='flex col-span-1'>
        <img onClick={() => toggleMenuHandler()} className='h-12 cursor-pointer' src='https://static.vecteezy.com/system/resources/previews/002/292/406/original/hamburger-menu-line-icon-free-vector.jpg' alt='hamburger-menu-icon' />
        <img className='h-16' src='https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500' alt='youtube-logo' />
      </div>
      <div className='col-span-10 px-10'>
        <div>
          <input className='px-5 rounded-l-full border border-gray-400 w-1/2 border p-2 '
            type="text"
            value={searchQuery}
            onChange={(e) => setsearchQuery(e.target.value)}
            onFocus={() => setshowSuggestions(true)}
            onBlur={() => setshowSuggestions(false)} />
          <button className='rounded-r-full border border-gray-400 px-5 py-2 bg-gry-100'>Search</button>
        </div>
        {showSuggestions && (
          <div className="fixed bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray">
            <ul className=' '>
              {
                suggestions.map(s => <li key={s} className='py-2 px-5 shadow-sm hover:bg-gray-100'>{s}</li>)
              }

            </ul>
          </div>
        )}
      </div>
      <div className='col-span-1'>
        <img className='h-16' src='https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg' alt='user-icon' />

      </div>
    </div>
  )
}

export default Head