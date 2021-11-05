import { Button, TextField } from '@material-ui/core'
import axios from 'axios'
import React from 'react'
import useForm from './Read'
const AddCourse = () => {
    var [value,setvalue]=useForm ({"title":"","description":"","remarks":"","date":""})

    const readValues=()=>{
        console.log(value)
        axios.post("https://mylinkurcodesapp.herokuapp.com/addcourse",value).then((response)=>{console.log(response.data);})
    }
    return (
        <div>
            <TextField
            variant="outlined"
            fullWidth
            margin="normal"
            name="title"
            onChange={setvalue}
            value={value.title}
            label="Enter title"

            />
             <TextField
            variant="outlined"
            fullWidth
            margin="normal"
            name="description"
            onChange={setvalue}
            value={value.description}
            label="Enter description"

            />
             <TextField
            variant="outlined"
            fullWidth
            margin="normal"
            name="remarks"
            onChange={setvalue}
            value={value.remarks}
            label="Enter remarks"

            />
             <TextField
            variant="outlined"
            fullWidth
            margin="normal"
            name="date"
            onChange={setvalue}
            value={value.date}
            label="Enter date"

            />
            <Button variant="contained"
            fullWidth
            onClick={readValues}
            >SUBMIT

            </Button>


        </div>
    )
}

export default AddCourse
