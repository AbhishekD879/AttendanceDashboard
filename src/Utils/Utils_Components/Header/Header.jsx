import React from 'react'
import Clock from 'react-live-clock';
import Avatar from 'react-avatar';
import "./Header.css"
export const Header = () => {
    
  return (
    <div className='header'>
        <h2>Your Classes</h2>
        <Clock
        className='clock'
          format={'dddd, MMMM Do, YYYY, h:mm:ss A'}
          ticking={true}
          />
        <Avatar className='avatar' style={{marginLeft:"1rem"}} name={JSON.parse(localStorage.getItem("userdetails")).username} size='50px' round={true} />
    </div>
  )
}
