import React, { useState } from 'react'
import "./Table.scss"
import {useNavigate} from "react-router-dom"
const Table = ({films}) => {
  const [search,setSearch]=useState("");

  const navigate=useNavigate();
  let abe =(title)=>{ 
    const ind=films.findIndex(film => film.Title === title);
    console.log(ind+1);
    return ind+1;
  }
  console.log(search);

  const filteredfilms=films?.filter(film=>{
    return film.Title.toLowerCase().includes(search.toLowerCase());
  })

  return (
    <div>
      <div className="search">
        <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Film Ara" />
      </div>
  <table>
    <tr>
    <th className='ide'>ID</th>
    <th>Filmin Adı</th>
    <th>Filmin Yayınlandığı Tarih</th>
  </tr>

  {
    filteredfilms && filteredfilms.map((item)=>(
      <tr className=''>
        <td>{item.Runtime}</td>
        <td>{item.Title}</td>
        <td>{item.Year}</td>
        <button onClick={()=>navigate(`/single/${abe(item.Title)}`)}>Düzenle</button>
      </tr>
    ))
  }
  
</table>
      

    </div>
  )
}

export default Table