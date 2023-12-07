import React from 'react'
import "./Footer.css"
import { Card,Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
const Footer = ({details}) => {
  const navigate=useNavigate()
  const  submitHandler=(e)=>{
    console.log(details)
        navigate("/documents")
  }
  return (
    <Card className="footer" >
    <div style={{width:"90%"}} >
    <Button variant="contained" style={{ float: 'right', }} onClick={submitHandler}    >Next</Button>
    </div>
  </Card>
  )
}

export default Footer;