import React from 'react'
import "./Table.scss"
const Table = ({films}) => {
  return (
    <div>
  <table>
    <tr>
    <th className='ide'>ID</th>
    <th>Filmin Adı</th>
    <th>Filmin Yayınlandığı Tarih</th>
  </tr>

  {
    films && films.map((item)=>(
      <tr>
        <td>{item.Runtime}</td>
        <td>{item.Title}</td>
        <td>{item.Year}</td>
        <button>Düzenle</button>
      </tr>
    ))
  }
  
</table>
      

    </div>
  )
}

export default Table