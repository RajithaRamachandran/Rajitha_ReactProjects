import {  Button, Table, TableBody, TableCell, TableHead, TableRow, TextField } from '@material-ui/core'
import axios from 'axios'
import { useState } from 'react'
import React from 'react'
import useForm from './Read'
const Movie_Update = () => {
    var [value,setvalue]=useState([])
    const disp=()=>{
        axios.get(`"http://localhost:8080/update"`).then((response)=>{
            console.log(response.data)
            setvalue(
                value=response.data
                
            )
        }
    )
    
    }


    return (
        <div>
            <TextField variant="outlined" fullWidth label="Enter Movie name" name="moviename" value={value.moviename} onChange={setvalue}/>
            <TextField variant="outlined" fullWidth label="Enter Actor" name="actor" value={value.actor} onChange={setvalue}/>
            <TextField variant="outlined" fullWidth label="Enter Actress" name="actress" value={value.actress} onChange={setvalue}/>
            <TextField variant="outlined" fullWidth label="Enter Director name" name="director" value={value.director} onChange={setvalue}/>
            <TextField variant="outlined" fullWidth label="Enter Release year" name="releaseyear" value={value.releaseyear} onChange={setvalue}/>
            <TextField variant="outlined" fullWidth label="Enter camera man" name="camera" value={value.camera} onChange={setvalue}/>
            <TextField variant="outlined" fullWidth label="Enter Producer name" name="producer" value={value.producer} onChange={setvalue}/>
            <TextField variant="outlined" fullWidth label="Enter language" name="language" value={value.language} onChange={setvalue}/>
            <Button onClick={disp}fullWidth variant="contained" color="primary">UPDATE</Button>
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
              
export default Movie_Update
