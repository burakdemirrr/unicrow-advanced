import React, { useState } from 'react'
import "./Table.scss"
import {useNavigate} from "react-router-dom"
const Table = ({films,currentPage}) => {
  const [search,setSearch]=useState("");

  const navigate=useNavigate();
  let abe =(title)=>{ 
    const ind=films.findIndex(film => film.Title === title);
    if(currentPage===1){
      return ind+1;
    }
    else{
      return ind+1+(currentPage-1)*5;
    }
    
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
    <tbody>
    <tr>
    <th className='ide'>ID</th>
    <th>Filmin Adı</th>
    <th>Filmin Yayınlandığı Tarih</th>
  </tr>

  {
    filteredfilms && filteredfilms.map((item)=>(
      <tr className='' key={item.Title}>
        <td>{`${abe(item.Title)}`}</td>
        <td>{item.Title}</td>
        <td>{item.Year}</td>
        <button className='duzenle' onClick={()=>navigate(`/single/${abe(item.Title)}`)}>Düzenle</button>
      </tr>
    ))
  }
  </tbody>
</table>
      
      <div className="button_container">
        <button onClick={()=>navigate("/add")} >Film Ekle</button>
      </div>
    </div>
  )
}

export default Table