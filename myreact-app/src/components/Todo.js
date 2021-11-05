
import { Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'
const Todo = () => {
    var [usertask, setuserTask]=useState("")
    var [myTask, setmyTask]=useState([""])
    
const addtoTask=()=>{
    setmyTask(
        myTask=>[...myTask,usertask]
    )
}
const myTaskhandle=(event)=>{
    console.log(myTask)
    setuserTask(
        usertask=event.target.value
    )
}
    return (
        <div>
            <h1>
                TODO 
                </h1>
            <TextField
            fullWidth
            value={usertask}
            onChange={myTaskhandle}
            variant="outlined"
            label="Enter Task"
            margin="normal"
            />
           

            <Button variant="contained"
            fullWidth
            color="secondary"
            onClick={addtoTask} >
              
              SUBMIT
            </Button>
            <ul>
                {myTask.map( (value,index)=>{
                    return <div>
                        <li key={index}> {value} </li>
                        </div>
                })}
            </ul>
        </div>
    )
}

export default Todo
