import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
const Home = () => {
    var[posts,setPosts]=useState([])
    axios.get("https://jsonplaceholder.typicode.com/posts") 
        .then((response)=>{
            console.log(response)
            setPosts(response.data)
        }
    )
 
  return (
    <div>
    <TableContainer>
        <Table>
            <TableHead>
                <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                <TableCell  sx={{ fontWeight: 'bold', color: '#333' }}><strong>Id</strong></TableCell>
                    <TableCell sx={{ fontWeight: 'bold', color: '#333' }}><strong> Blog Name</strong></TableCell>
                    <TableCell  sx={{ fontWeight: 'bold', color: '#333' }}><strong> Description</strong></TableCell>
                    
                </TableRow>
            </TableHead>
            <TableBody>
                {posts.map((val)=>{
                   return(
                    <TableRow>
                         <TableCell>{val.id} </TableCell>
                        <TableCell>{val.title}</TableCell>
                        <TableCell>{val.body} </TableCell>
                       
                    </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    </TableContainer> 
    </div>
  )
}

export default Home
