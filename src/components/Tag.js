import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGIF from '../hooks/useGIF';
import axios from 'axios';
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Tag = () => {
    const [tag,setTag] = useState('car');
    const {gif,loading,fetchData} = useGIF(tag);
  return (
    <div className='w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>Random {tag} Gif</h1>
        {
          loading?(<Spinner/>):(<img src={gif} width="450"/>)
        }
        <input
            className='w-10/12 text-lg mb-[3px] py-2 rounded-lg text-center'
            onChange={(event) => setTag(event.target.value)}
            value={tag}
        />
        <button 
        className='w-10/12 text-lg mb-[20px] bg-yellow-500 py-2 rounded-lg '
        onClick={() => fetchData(tag)}>
            Generate
        </button>
    </div>
  )
}

export default Tag;