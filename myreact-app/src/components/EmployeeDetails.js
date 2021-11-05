import { Button, TextField } from '@material-ui/core'
import React,{ useEffect, useState }  from 'react'
import useForm from './EmpDetails'
import Header from './Header'
const EmployeeDetails = () => {
    var [value,setValue]=useForm({name:" ", address:" ",pincode: "",mobile:"",email:"",c_password:""})
    
    const read=()=>{
             console.log(value)
    }
              return (
        <div>
            <Header/>
                
             <TextField
            name="name"
            onChange={setValue}
            value={value.name}
            variant="outlined"
            fullWidth
            margin="normal"
            label="Enter Name"/>

             <TextField
             name="address"
             onChange={setValue}
             value={value.address}
            variant="outlined"
            fullWidth
            margin="normal"
            label="Enter Address"/>

             <TextField
             name="pincode"
             onChange={setValue}
             value={value.pincode}
            variant="outlined"
            fullWidth
            margin="normal"
            label="Enter Pincode"/>
            <TextField
             name="mobile"
             onChange={setValue}
             value={value.mobile}
            variant="outlined"
            fullWidth
            margin="normal"
            label="Enter Mobile Number"/>
            <TextField
             name="email"
            onChange={setValue}
            value={value.email}
            variant="outlined"
            fullWidth
            margin="normal"
            label="Enter Email Id"/>
            <TextField
            name="c_password"
            type="password"
            onChange={setValue}
            value={value.c_password}
            variant="outlined"
            fullWidth
            margin="normal"
            label="Enter Password"/>

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

export default EmployeeDetails
