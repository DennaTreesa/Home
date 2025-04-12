import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar >
        <Typography variant="h6" sx={{marginRight:2}}>BLOG</Typography>
            <Link to='/denna' style={{ textDecoration: 'none',marginRight:'10px' }}>
            <Button variant="contained" color='secondary'>HOME</Button></Link>
            <Link to='/form' style={{ textDecoration: 'none',marginRight:'10px' }}>
            <Button variant="contained" color='secondary'>ADD BLOG</Button></Link>
        </Toolbar>
      </AppBar>
      <br /> <br /> <br />
    </div>
  )
}

export default NavBar