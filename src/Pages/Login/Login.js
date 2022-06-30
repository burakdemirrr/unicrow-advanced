import React from 'react'
import "./Login.scss"
const Login = () => {
  return (
    <div className='login'>

      <div className="box">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png" alt="" />

      <form action="">

        <input type="text" placeholder='email' />
        <input type="text" placeholder='parola' />
     
        <button>Giris Yap</button>
      </form>
        <p>Parolamı Unuttum</p>
        </div>
    </div>
  )
}

export default Login