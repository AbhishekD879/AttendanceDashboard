import React from 'react'
import "./Sidebar.css";
import classeslogo from "./classes.svg";
import contactlogo from "./contact.svg";
import { useNavigate } from 'react-router-dom';
const SideBar = () => {
  const navigate=useNavigate();
  return (
    <div className='sideBar'>
        <h1>Attendence Cam</h1>
        <div className='sidebar__Nav'>
            <div onClick={()=>{
                navigate("/branch")
            }} className='sidebar__Nav__links'>
                <img src={classeslogo} alt="sideBarClasses"/>
                <span>Classes</span>
            </div>
            <div onClick={(e)=>{
                 window.location.href = "mailto:abhishekdiwate879@gmail.com";
                e.preventDefault();
            }} className='sidebar__Nav__links'>
                <img src={contactlogo} alt="sidebarContact"/>
                <span>Contact Admins</span>
            </div>
        </div>
    </div>
  )
}

export default SideBar