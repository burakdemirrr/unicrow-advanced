import React, { useState } from 'react'
import {useNavigate, useParams} from "react-router-dom"
import Navbar from '../../components/Navbar/Navbar';
import "./Single.scss"

const Single = () => {
  const [name,setName]=useState("");
  const [date,setDate]=useState("");

  const navigate=useNavigate();

  let {id} = useParams();
  const films=JSON.parse(localStorage.getItem("films"));
  const film=films[id-1];

  const handleDelete=(task)=>{
    const deleted=films.filter((falm)=>falm.Title !== task.Title);
    localStorage.setItem("films",JSON.stringify(deleted));
    navigate("/home");
  }

  return (
    <div>
      <Navbar/>
      <div className="container">
      <div className="img_container">
        <img src={film.Poster} alt="Film Posteri" />
      </div>
      
      <div className="">

      <form className="form_container" >
          <input type="text" placeholder='Filmin Adı' value={name} onChange={(e)=>setName(e.target.value)} />
          <input type="text" placeholder='Filmin Yayınlandığı Tarih' value={date} onChange={(e)=>setDate(e.target.value)} />
      </form>

      <div className="button_container">
        <button onClick={()=>handleDelete(film)}>Sil</button>
        <button>Düzenle</button>
      </div>
     
      </div>
    
    </div>
    
    </div>
  )
}

export default Single