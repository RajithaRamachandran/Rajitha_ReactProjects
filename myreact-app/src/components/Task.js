import { Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'

const Task = () => {
    var [usertask, setuserTask]=useState("")
    var [myTask, setmyTask]=useState(["Calling"])

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
            <TextField
            fullWidth
            value={usertask}
            onChange={myTaskhandle}
            variant="outlined"
            label="Enter Task"
            margin="normal"
            />
            <Button variant="outlined"
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

export default Task
