import {  Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import axios from 'axios'
import { useState } from 'react'
import React, { useEffect } from 'react'
const ProjectDetails = () => {
    var [data,loadData]=useState([])
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts`).then((response)=>{
            console.log(response.data)
            loadData(
                data=response.data
                
            )
        }
    )
    },[])
    


    return (
        <div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>  ID</TableCell>
                        <TableCell> Title</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((value,index)=>{
                        return <TableRow>
                            <TableCell> {value.id}</TableCell>
                            <TableCell> {value.title}</TableCell>
                            
                            </TableRow>
                    })
                }
                </TableBody>
            </Table>

                
        </div>
    )
            
     }   
              
export default ProjectDetails
