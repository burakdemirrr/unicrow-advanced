import React from 'react'
import "./Add.scss"
const Add = () => {
  return (
    <div className='add'>
      <h1>Film Ekle</h1>
        <form className="form_container" >
          <input type="text" placeholder='Filmin Adı'  />
          <input type="text" placeholder='Filmin Posteri (URL)'  />
          <input type="text" placeholder='Filmin Yayınlandığı Tarih' />
        </form>

      <button>Ekle</button>

    </div>
  )
}

export default Add