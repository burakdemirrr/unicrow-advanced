import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./Add.scss"
const Add = () => {
  const [title, setTitle] = React.useState("");
  const [date, setDate] = React.useState("");
  const [image, setImage] = React.useState("");
  const navigate=useNavigate();

  const films=JSON.parse(localStorage.getItem("films"));
  
  const handleAdd=()=>{
    films.push({
      Poster:image,
      Runtime:"105min",
      Title:title, 
      Year:date,
    });
    localStorage.setItem("films",JSON.stringify(films));
    navigate("/home")
  }
  return (
    <div className='add'>
      <h1>Film Ekle</h1>
        <form className="form_container" >
          <input type="text" placeholder='Filmin Adı' value={title} onChange={(e)=>setTitle(e.target.value)}  />
          <input type="text" placeholder='Filmin Posteri (URL)' value={image} onChange={(e)=>setImage(e.target.value)} />
          <input type="text" placeholder='Filmin Yayınlandığı Tarih'value={date} onChange={(e)=>setDate(e.target.value)} />
        </form>

      <button onClick={handleAdd}>Ekle</button>

    </div>
  )
}

export default Add