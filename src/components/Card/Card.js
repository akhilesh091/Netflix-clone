import React, { useEffect,useState } from 'react'
// import {API_KEY} from '../../constants/constants'
import {imageUrl,API_KEY} from '../../constants/constants'
import './card.css'
import axios from'../../axios'
import Youtube from 'react-youtube'

function Card(props) {
  const [movie,setMovie]=useState([])
  const [urlId,setUrlId]=useState('')
  useEffect(()=>{
  
    axios.get(props.urls).then((response)=>{
        setMovie(response.data.results)
        
    })
  },[])

  const opts={
    height:'390',
    width:'100%',
    playerVars:{
      autoplay:1,
    },
  };
  const handleMovie=(id)=>{
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results);
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }else{
        console.log('length is zero');
      }

    })
  }
  return (
    <>
     <div className="card_container">
      <h1>{props.title}</h1>
      <div className="poster">
        {
          movie.map((obj)=>{
            return(

                    <img onClick={()=>handleMovie(obj.id)} src={`${imageUrl+obj.backdrop_path}`} alt="" className={props.isSmall ?'p_small' :'p_image'}/>

            )
          })
        }
      


      </div>
      {urlId ? <Youtube opts={opts} videoId={urlId.key}/>:' '}
     </div>
     
    </>
  )
}

export default Card



