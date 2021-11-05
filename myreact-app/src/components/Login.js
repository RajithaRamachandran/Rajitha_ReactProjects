import { Button, RadioGroup, TextField} from '@material-ui/core'
import React from 'react'

import Header from './Header'
const Login = () => {
    return (
        <div>
           <Header/> 
        <TextField
        variant="outlined"
        fullWidth
        label="Enter Name"
        margin="normal"
        />
        
        <TextField
        variant="outlined"
        fullWidth
        label="Enter Admission Number"
        />
        <TextField
        variant="outlined"
        fullWidth
        label="Enter Username"
        />
       <TextField
       type="password"
        variant="outlined"
        fullWidth
        label="Enter Password"
        />
        <Button 
        variant="contained"
        color="primary"
        fullWidth
        
        >REGISTER</Button>

       
        </div>
    )
}

export default Login
