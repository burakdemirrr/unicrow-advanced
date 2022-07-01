import React from 'react'
import {useParams} from "react-router-dom"
const Single = () => {
  let {id} = useParams();
  

  return (
    <div>Single</div>
  )
}

export default Single