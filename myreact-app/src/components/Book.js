import { Button, TextField } from '@material-ui/core'
import { render } from '@testing-library/react'
import React,{ useState }  from 'react'
import useForm from './BookRead'
const Book = () => {
    var [value,setValue]=useForm({title:" ", author:" ",price: ""})

const read=()=>{

    console.log(value)
}
    
    return (
        <div>
            <TextField
            name="title"
            onChange={setValue}
            value={value.title}
            variant="outlined"
            fullWidth
            margin="normal"
            label="Book Title"/>

             <TextField
             name="author"
             onChange={setValue}
             value={value.author}
            variant="outlined"
            fullWidth
            margin="normal"
            label="Book Author"/>

             <TextField
             name="price"
             onChange={setValue}
             value={value.price}
            variant="outlined"
            fullWidth
            margin="normal"
            label="Book Price"/>

            <Button 
            variant="contained"
            fullWidth
            margin="normal"
            color="secondary"
            onClick={read}>
             SUBMIT
             </Button>
        </div>
    )
}

export default Book
