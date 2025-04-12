import { Button, TextField } from '@mui/material'
import React from 'react'

const Blog = () => {
  return (
    <div>
      <h3>ADD BLOG</h3>
       <form>
      <TextField id="outlined-basic" label="Blog Name" variant="outlined" /><br/><br/>
        <TextField id="outlined-basic" label="Description" variant="outlined" /><br/><br/>
        <TextField id="outlined-basic" label="Author Name" variant="outlined" /><br/><br/>
        <Button type="submit" variant='contained'>SUBMIT BLOG</Button>
        </form>
        </div>
  )
}

export default Blog   
