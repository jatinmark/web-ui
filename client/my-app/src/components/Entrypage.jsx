import React from 'react'
import "./Entrypage.css"
import Button from '@mui/material/Button';
import Login from './Login'
import Register from './Register'





function Entrypage() {
  return (
    <div className='entry_page'>
    
    <div className="title">
    <h3>async</h3>
      <h1>
        tic tac <br />toe
      </h1>
    </div>
    <div className='buttons'>
    <Button variant="contained" sx={{  padding: "20px 0 20px 0" ,backgroundColor : "#F2C94C" ,  boxShadow: "2px 2px 16px rgba(0, 0, 0, 0.16)" }} 
    onClick= { <Login />} >
    Login
</Button>
<Button variant="contained" sx={{    padding: "20px 0 20px 0" ,backgroundColor : "#2F80ED" , boxShadow: "2px 2px 16px rgba(0, 0, 0, 0.16)" }}
onClick= { <Register />} >
Register
</Button>
 </div>
    </div>
  )
}

export default Entrypage