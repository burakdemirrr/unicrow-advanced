import { Avatar } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from "../../redux/slice"

const Navbar = ({user}) => {
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const handleLogout=()=>{
    
    localStorage.removeItem('token')
    window.location.reload()
    dispatch(logout())
    navigate("/")
  }
  return (
    <div>
      <Avatar>{user.email[0].toUpperCase()}</Avatar>
      <p>{user.email}</p>

      <button onClick={handleLogout}>Logout</button>
      
    </div>
  )
}

export default Navbar