import React from 'react'
import "./SideMenuSubcomponent.css"
import { Card, CardContent, Typography } from '@mui/material'
const SideMenuSubcomponent = ({details}) => {
  const {title,content}={...details};
  console.log(title)
    return (
        <Card className='sideMenusubcomponent'>
            <CardContent>
                <div style={{ display: "flex" }}>
                    <div style={{ width: "50px", height: "50px", background: "grey" }}>
                    </div>
                    <div>
                        <Typography component="div" variant="h6" >{title}</Typography>
                        <Typography component="p">{content}</Typography>
                    </div>
                </div>

            </CardContent>
        </Card>
    )
}

export default SideMenuSubcomponent;