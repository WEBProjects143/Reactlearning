import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import "./login.css";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const Navigate= useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
    const data={
        email:email,
        password:password
    }
    axios.post("http://localhost:4000/api/user/login",data)
    .then((res)=>{
        if(res){
            localStorage.setItem("token",res.data.token) 
            alert(`${res.data.name} logged In `);
            Navigate("/home")
        }else{
            alert('Wrong Email and password')
        }
    })
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-btn">Login</button>
      </form>
    </div>
  );
}

export default Login;
