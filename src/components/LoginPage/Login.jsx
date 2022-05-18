import React,{useState} from 'react'
import "./Login.css";
import usernamelogo from "./usernamelogo.svg"
import passwordlogo from "./passwordlogo.svg"
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import apiConfig from "./../../axiosConfig/axiosConfig"
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate=useNavigate()
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const handelLogin=async()=>{
        
        if(username.length===0 || password.length===0){
            toast.error('Invalid Details!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }else{
            
            let {userDetails}=(await apiConfig.post("/dashboard/login",{username,password},{
                headers:{
                    "Access-Control-Allow-Origin": "*",
                }
            })).data;
            // alert(JSON.stringify(userDetails))
            if(userDetails){
                console.log(userDetails)
                localStorage.removeItem("userdetails")
                localStorage.setItem("userdetails",JSON.stringify(userDetails))
            toast.success("Login Success!",{
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                })
                setTimeout(()=>{
                    navigate("/branch",{replace:true})
                },2500)
            }
        }
    }
  return (
   <>
        <div className='loginContainer'>
     <div className='loginPage__left'>
        <h1>
            Attandence Cam
        </h1>
        <h3>
        Dashboard for Attendance Captured From <br/> Attandence Cam <br />

            App
        </h3>
     </div>
     <div className='loginPage__Right'>
        <div className='loginForm'>
            <div className='loginForm__top'>
                <h3>Hello!</h3>
                <h4>Login To Get Started</h4>
            </div>
            <div className='loginForm__middle'>
                <div className='loginForm__middle__input'>
                    <img src={usernamelogo} alt="username"/>
                    <input type="text" onChange={(e)=>{setUsername(e.target.value)}} placeholder='Username' value={username}/>
                </div>
                <div className='loginForm__middle__input'>
                    <img src={passwordlogo} alt="password"/>
                    <input type="text" onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password' value={password}/>
               </div>
               <button onClick={handelLogin} className='login_btn'>
                    Login
                </button>
            </div>
            <h4>Forget Username or Password</h4>
            <button onClick={(e)=>{
                 window.location.href = "mailto:abhishekdiwate879@gmail.com";
                e.preventDefault();
            }} className='login_btn'>
            Contact Admins
            </button>
        </div>
     </div>
    </div>
    <ToastContainer
position="top-center"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
   </>
  )
}

export default Login