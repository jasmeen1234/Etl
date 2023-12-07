import React from 'react'
import "./Footer.css"
import { Card,Button } from '@mui/material'
const Footer = () => {
  return (
    <Card className="footer" >
    <div style={{width:"90%"}} >
    <Button variant="contained" style={{ float: 'right', }} >Next</Button>
    </div>
  </Card>
  )
}

export default Footer;