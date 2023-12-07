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
  content:"Collect information from Candidates on their education, work experience, contact no,etc"
}
const purpose={
  title:"Statement of Purpose",
  content:"Start creating a new form with the wide options of fields available"

}
const interview={
  title:"Interview Availability",
  content:"Start creating a new form with the wide options of fields available"
}
const SideMenu = () => {
  return (
    <div className='sidemenu'>
      <SideMenuSubcomponent />
      <Typography style={{marginLeft:"50px"}}>Explore differnt sections</Typography>
      <div>
      <Link to="/" >
        <SideMenuSubcomponent details={details} />
        </Link>
        <Link to="/documents" >
        <SideMenuSubcomponent  details={documents} />
        </Link>
        <Link to="/purpose" >
        <SideMenuSubcomponent  details={purpose} />
        </Link>
        <Link to="/interview" >
        <SideMenuSubcomponent  details={interview}/>
        </Link>
        

      </div>
    </div>
  )
}

export default SideMenu;