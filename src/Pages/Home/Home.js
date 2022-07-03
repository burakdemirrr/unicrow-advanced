import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import "./Home.scss"
import Table from "./Table"
const Home = () => {

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