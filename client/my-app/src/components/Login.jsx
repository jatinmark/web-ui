import React,{useState} from 'react'

function Login() {
    const [username , setusername] = useState("");
    const [password , setpassword] = useState("");

const login = () => {

}

  return (
    <div className='login'>
    <label>Login</label>
  
<input placeholder='Type your username here' onChange={(e) => {
   setusername(e.target.value);
    }}></input>


<input placeholder='Type your password here' onChange={(e) => {
 setpassword(e.target.value);
   }}></input>

    <button onClick={login}></button>
    </div>
  )
}

export default Login