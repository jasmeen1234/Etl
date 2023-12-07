import React from 'react'
import "./SideMenu.css"
import SideMenuSubcomponent from './SideMenuSubcomponent';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
const details={
   title:"Details Collections",
   content:"collect details"
}
const documents={
  title:"Documents Collections",
  content:"collect documents"
}
const purpose={
  title:"Statement of Purpose",
  content:""
}
const interview={
  title:"Interview Availability",
  content:""
}
const SideMenu = () => {
  return (
    <div className='sidemenu'>
      <SideMenuSubcomponent />
      <Typography style={{marginLeft:"50px"}}>Explore differnt sections</Typography>
      <div>
      <Link to="/form" >
        <SideMenuSubcomponent details={details} />
        </Link>
        <Link to="/documents" >
        <SideMenuSubcomponent  details={documents} />
        </Link>
        <Link to="/interview" >
        <SideMenuSubcomponent  details={interview}/>
        </Link>
        <Link to="/purpose" >
        <SideMenuSubcomponent  details={purpose} />
        </Link>

      </div>
    </div>
  )
}

export default SideMenu;