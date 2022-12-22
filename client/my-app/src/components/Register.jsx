import React, { useState } from 'react'

function Register() {

const [user , setuser] = useState();

const register = () => {
    
}


  return (
    <div className='register'>
    <label>Register</label>
    <input placeholder='Type your name here' onChange={(e) => {
   setuser( {...user , name : e.target.value})
    }}></input>

<input placeholder='Type your username here' onChange={(e) => {
   setuser( {...user , username : e.target.value})
    }}></input>

<input placeholder='Type your email here' onChange={(e) => {
   setuser( {...user , email : e.target.value})
    }}></input>

<input placeholder='Type your password here' onChange={(e) => {
   setuser( {...user , password : e.target.value})
    }}></input>

    <button onClick={register}></button>
    </div>
  )
}

export default Register