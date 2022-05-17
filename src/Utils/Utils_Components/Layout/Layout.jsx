import React from 'react'
import {Header} from "./../Header/Header"
import SideBar from '../SiderBar/SideBar'
import SubjectPage from '../../../components/SubjectPage/SubjectPage'
import "./Layout.css"
import BranchPage from '../../../components/BranchPage/BranchPage'
const Layout = ({cardType}) => {
  return (
    <div className='layout'>
        <div className='layoutSideBar'>
            <SideBar/>
        </div>
        <div className='layoutRight'>
            <Header/>
           <div className='dynamicContent'>
           {cardType}
           </div>
        </div>
    </div>
  )
}

export default Layout