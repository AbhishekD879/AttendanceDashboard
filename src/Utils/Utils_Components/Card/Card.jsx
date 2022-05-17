import React, { useRef,useEffect} from 'react'
import "./Card.css"
const Card = ({heading,onClick}) => {
  const cardRef=useRef(null)
  let backgroundHeader=[
    'url("https://gstatic.com/classroom/themes/Chemistry.jpg")', 'url("https://gstatic.com/classroom/themes/img_backtoschool.jpg")', 'url("https://gstatic.com/classroom/themes/img_breakfast.jpg")', 'url("https://gstatic.com/classroom/themes/img_reachout.jpg")', 'url("https://gstatic.com/classroom/themes/img_code.jpg")', 'url("https://gstatic.com/classroom/themes/Honors.jpg")', 'url("https://gstatic.com/classroom/themes/img_read.jpg")', 'url("https://gstatic.com/classroom/themes/img_bookclub.jpg")', 'url("https://gstatic.com/classroom/themes/img_learnlanguage.jpg")'
  ]
  useEffect(()=>{
   cardRef.current.style=`background-image:${backgroundHeader[Math.floor((Math.random()*backgroundHeader.length))]}`
  },[])
  return (
    <div onClick={onClick} className='card'>
        <div ref={cardRef} className='card_header'>
            {heading}
        </div>
    </div>
  )
}

export default Card