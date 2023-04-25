import React from 'react'
import requests from '../Requests' 
import {useEfect, useState} from 'react'
import axios from 'axios'

const Main = () => {
  const [movies, setMovies]= useState([])

useEfect (() =>{
axios.get(requests.requestPopular).then((response)=>{
  setMovies(response.data)
})
}, [])
console.log(movies)
  return (
    <div>
      
    </div>
  )
}

export default Main
