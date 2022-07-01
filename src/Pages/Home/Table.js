import React from 'react'
import "./Table.scss"
import {useNavigate} from "react-router-dom"
const Table = ({films}) => {

  const navigate=useNavigate();
  let abe =(title)=>{ 
    const ind=films.findIndex(film => film.Title == title);
    console.log(ind+1);
    return ind+1;
  }

  return (
    <div>
  <table>
    <tr>
    <th className='ide'>ID</th>
    <th>Filmin Adı</th>
    <th>Filmin Yayınlandığı Tarih</th>
  </tr>

  {
    films && films.map((item,index)=>(
      <tr>
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