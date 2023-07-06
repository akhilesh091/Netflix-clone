import React,{useEffect, useState} from 'react'
import './Banner.css'
import axios from '../../axios'
import {API_KEY} from '../../constants/constants'
import {imageUrl} from '../../constants/constants'
import {baseUrl} from '../../constants/constants'

function Banner() {
  const [movie,setMovie]=useState()
  useEffect(()=>{
   
    axios.get(`${baseUrl}/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
         let random=Math.floor(Math.random()*response.data.results.length)
        setMovie(response.data.results[random])
       
    })
    console.log('sdsfdas');
  },[])
  return (
    <>
    <div className="banner_container">
    <div className='banner_image' style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}>
     <div className="ba_image">
      <h1 className='p_head'>{movie ? movie.title : ""}</h1>
      <h3 className='p_shead'>watch anywhere.and cancel anytime.</h3>
      <div className="btn">
      <p className='para_des'>{movie ? movie.overview : ""}</p>

      <button className='btn_movie'>movie</button>
      <button className='btn_wish'>whishlist</button>
      </div>
    
      </div>
     </div>
</div>

    </>
  )
}

export default Banner
