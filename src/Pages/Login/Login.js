import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { login } from '../../redux/slice';
import "./Login.scss"
const Login = () => {
  const navigate=useNavigate();
  const [form,setForm]=useState({
    email:"",
    password:"",
  });
  const dispatch=useDispatch();
  
  const handleInputs=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(login(form));
    navigate("/home")

  }
  return (
    <div className='login'>

      <div className="box">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png" alt="" />

          <form onSubmit={handleSubmit}>

            <input type="text" name="email" placeholder='email' value={form.email}  onChange={(e)=>handleInputs(e)} />
            <input type="password" placeholder='parola'name="password" value={form.password}  onChange={(e)=>handleInputs(e)}/>
        
            <button>Giris Yap</button>
            
          </form>

        <p>Parolamı Unuttum</p>
      </div>
    </div>
  )
}

export default Login