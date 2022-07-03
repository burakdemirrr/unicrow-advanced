import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar';
import "./Home.scss"
import Pagination from "./Pagination"
import Table from "./Table"

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);



  const films=JSON.parse(localStorage.getItem("films"));

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentFilms = films.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='home'>
      <Table films={currentFilms} currentPage={currentPage}/>
      <Pagination paginate={paginate}/>
    </div>
  )
}

export default Home