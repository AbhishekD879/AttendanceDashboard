import React,{useEffect,useState} from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SchoolIcon from '@mui/icons-material/School';
import apiConfig from '../../axiosConfig/axiosConfig';
import { useParams } from 'react-router-dom';
import HashLoader from "react-spinners/ClipLoader";
const LectureInfo = () => {
  const [lecture,setLecture]=useState([])
  const{currentClass,sub}=useParams()
  const getLectue=async()=>{
      let {token}=JSON.parse(localStorage.getItem("userdetails"))
      const {data}=await apiConfig.get(`/dashboard/allSubject/${JSON.parse(localStorage.getItem("userdetails")).id}/${currentClass}/${sub}`,{
          params:{
            token
          }
      })
    let sortedData=data.sort((a,b) => +a.lectureNo- +b.lectureNo);
     setLecture(sortedData)
  }
  useEffect(()=>{
    getLectue()
  },[])
  return (
    <div style={{overflowY:"scroll",maxHeight:"81vh"}}>
     {lecture.length!==0?(
         lecture.map((el,index)=>(
         <div key={`lecture${index}`}>
         <Accordion key={`lecture${index}`}>
        <AccordionSummary
          sx={{backgroundColor:"black",color:"white"}}
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{"LectureNo. "+el.lectureNo}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          
            {el.students.map((st,index)=>(
                <div key={`student${index}`}  style={{display:"flex",alignItems:"center"}}>
              <SchoolIcon/>
              <p style={{marginLeft:"10px"}}>{st}</p>
                </div>
            ))}
          
        </AccordionDetails>
      </Accordion>
      <hr/>
         </div>
      
         ))
     ):(<div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"80vh"}}>
        <HashLoader color={"black"} loading={true} size={80} />
     </div>)}
    </div>
  )
}

export default LectureInfo