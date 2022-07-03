import { Avatar } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from "../../redux/slice"
import "./Navbar.scss"

const Navbar = ({user}) => {
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const handleLogout=(e)=>{
    e.preventDefault();
    localStorage.removeItem('films')
    dispatch(logout())
    navigate("/")
  }
  return (
    <div className='navbar'>
      <Avatar>{user.email[0].toUpperCase()}</Avatar>
      <p>{user.email}</p>

      <button onClick={handleLogout}>Logout</button>
      
    </div>
  )
}

export default Navbar