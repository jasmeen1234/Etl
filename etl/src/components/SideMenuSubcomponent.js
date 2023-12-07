import React from 'react'
import "./SideMenuSubcomponent.css"
import { Card, CardContent, Typography } from '@mui/material'
const SideMenuSubcomponent = ({ details }) => {
    const { title, content } = { ...details };
    console.log(title)
    return (
        <Card className='sideMenusubcomponent'>
            <CardContent>
                <div style={{ display: "flex" }}>
                    <div style={{ width: "50px", height: "50px", background: "grey",margin:"10px" }}>
                    </div>
                    <div style={{margin:"10px" }} >
                        <h3 style={{ display: "inline", fontFamily: " Roboto", letterSpacing: "0em",textDecoration: 'none' }}>{title}</h3>
                        <Typography component="p" style={{
                            fontFamily: "Roboto",
                            fontSize: "12px",
                            fontWeight: " 400",
                            lineLeight: "14px",
                            letterSpacing: "0em",
                            textLlign: "left",
                            textDecoration: 'none'
                        }} >{content}</Typography>
                    </div>
                </div>

            </CardContent>
        </Card>
    )
}

export default SideMenuSubcomponent;