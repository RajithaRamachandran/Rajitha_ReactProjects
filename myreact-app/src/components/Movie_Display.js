import {  Button, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import axios from 'axios'
import { useState } from 'react'
import React from 'react'
import useForm from './Read'
const Movie_Display = () => {
    var [value,setvalue]=useState([])
    const disp=()=>{
        axios.get(`"http://localhost:8080/view"`).then((response)=>{
            console.log(response.data)
            setvalue(
                value=response.data
                
            )
        }
    )
    
    }
    


    return (
        <div>
            <Button onClick={disp}fullWidth variant="contained" color="primary">DISPLAY</Button>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell> movie name</TableCell>
                        <TableCell> actor</TableCell>
                        <TableCell> actress</TableCell>
                        <TableCell> director</TableCell>
                        <TableCell> release year</TableCell>
                        <TableCell> camera</TableCell>
                        <TableCell> producer</TableCell>
                        <TableCell> language</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {value.map((value,index)=>{
                        return <TableRow>
                            <TableCell> {value.moviename}</TableCell>
                            <TableCell> {value.actor}</TableCell>
                            <TableCell> {value.actress}</TableCell>
                            <TableCell> {value.director}</TableCell>
                            <TableCell> {value.releaseyear}</TableCell>
                            <TableCell> {value.camera}</TableCell>
                            <TableCell> {value.producer}</TableCell>
                            <TableCell> {value.language}</TableCell>
                            
                            </TableRow>
                    })
                }
                </TableBody>
            </Table>

                
        </div>
    )
            
     }   
              
export default Movie_Display
