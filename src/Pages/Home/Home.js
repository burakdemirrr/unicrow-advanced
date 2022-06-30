import React, { useEffect } from 'react'
import useAxios from '../../hooks/useAxios';

const Home = () => {
  const {response,error,loading}=useAxios();
  console.log(response);

 useEffect(()=>{
      localStorage.setItem("films",JSON.stringify(response));
 },[]);

 const films=JSON.parse(localStorage.getItem("films"));
  return (
    <div>
      {
        films && films.map((item)=>(
          <div className="">{item.Title}</div>
        ))
      }
    </div>
  )
}

export default Home