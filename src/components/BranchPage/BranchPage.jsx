import React,{useEffect,useState} from 'react'
import Card from '../../Utils/Utils_Components/Card/Card'
import apiConfig from '../../axiosConfig/axiosConfig'
import "./BranchPage.css"

import { useNavigate } from 'react-router-dom'
import HashLoader from "react-spinners/ClipLoader";
const BranchPage = () => {
  const navigate=useNavigate()
  const [branch,setBranch]=useState([])
  const getBranch=async()=>{
    let {token}=JSON.parse(localStorage.getItem("userdetails"))
    const AuthStr = 'Bearer '.concat(token)
    let {data}=await apiConfig.get(`dashboard/getBranch/${JSON.parse(localStorage.getItem("userdetails")).id}`,{
      params: {
        token
      },
      headers:{
        'authorization':AuthStr
      }
     
    })
    setBranch(data)
  }
  useEffect(()=>{
   getBranch()
  },[])
  let cardClick=(cl)=>{
    navigate(`/subject/${cl}`)
  }
  return (
    
    <>
      {branch.length!==0?(<div className='branch'>
    {branch.map((cl,index)=>(<Card onClick={()=>{
      cardClick(cl)
    }} key={index} heading={cl}/>))}
    </div>):(<div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"80vh"}}>
        <HashLoader color={"black"} loading={true} size={80} />
     </div>)}
    </>
    
    
  )
}

export default BranchPage