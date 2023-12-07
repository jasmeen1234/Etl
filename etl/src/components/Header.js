import React from "react";
import { AppBar, Toolbar, Typography, Box,FormGroup,FormControlLabel,Checkbox } from "@mui/material";
// import TheatersIcon from "@mui/icons-material/Theaters";

const Header = () => {
  return (
    <AppBar style={{ background: "white",height:"68px" }}>
      <Toolbar>
        <Box style={{ display: "flex",justifyContent:"space-between" }}>
          {/* <TheatersIcon />
          <Typography variant="h5">Movie App</Typography> */}
          ------------------------------
          <div>
          <Checkbox defaultChecked />
          <Typography style={{color:"black"}} variant="p">Form sections</Typography>
          </div>
          ------------------------------
          <div>
          <Checkbox   />
          <Typography style={{color:"black"}} variant="p">Basis</Typography>
          </div>
          ------------------------------
          <div>
          <Checkbox  />
          <Typography style={{color:"black"}} variant="p">Basis</Typography>
          </div>
        </Box>

      </Toolbar>
    </AppBar>
  )
}

export default Header;