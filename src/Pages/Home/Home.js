import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar';
import useAxios from '../../hooks/useAxios';
import "./Home.scss"
import Table from "./Table"
const Home = () => {
  const {response,error,loading}=useAxios();
  console.log(response);

 useEffect(()=>{
      localStorage.setItem("films",JSON.stringify(response));
 },[response]);

 const films=JSON.parse(localStorage.getItem("films"));
 console.log(films);
  return (
    <div className='home'>
      <Navbar/>
      <Table films={films}/>
     
    </div>
  )
}

export default Home