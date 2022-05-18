import React,{useEffect,useState} from 'react'
import Card from '../../Utils/Utils_Components/Card/Card'
import apiConfig from '../../axiosConfig/axiosConfig'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import HashLoader from "react-spinners/ClipLoader";
const SubjectPage = () => {
    const navigate=useNavigate()
    const {currentClass}=useParams()
    const [subject,setSubject]=useState([])
    const getSubject=async()=>{
        let {token}=JSON.parse(localStorage.getItem("userdetails"))
        const AuthStr = 'Bearer '.concat(token)
        let {data}=await apiConfig.get(`dashboard/subject/${JSON.parse(localStorage.getItem("userdetails")).id}/${currentClass}`,{
          params: {
            token
          },
          headers:{
            'authorization':AuthStr
          }
         })
         setSubject(data)
    }
    useEffect(()=>{
        getSubject()
       },[])
    let cardClick=(cl)=>{
        navigate(`/allSubject/id/${currentClass}/${cl}`)
    }
    return (
    <>
      {subject.length!==0?(<div className='branch'>
        {subject.map((cl,index)=>(<Card onClick={()=>{
          cardClick(cl)
        }} key={index} heading={cl}/>))}
      </div>):(<div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"80vh"}}>
          <HashLoader color={"black"} loading={true} size={80} />
     </div>)}
    </>
)
  
}

export default SubjectPage