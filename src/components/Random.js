import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGIF from '../hooks/useGIF';
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Random = () => {
    const {gif,loading,fetchData} = useGIF();
  return (
    <div className='w-1/2 bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>A Random Gif</h1>
        {
          loading?(<Spinner/>):(<img src={gif} width="450" />)
        }
        <button 
        className='w-10/12 mb-[20px] bg-yellow-500 text-lg py-2 rounded-lg '
        onClick={()=>fetchData()}>
            Generate
        </button>
    </div>
  )
}

export default Random;