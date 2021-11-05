import { Button, Typography } from '@material-ui/core'
import React,{ useState } from 'react'
var Counter=()=>{

var [CounterValue, setCountervalue]=useState(0)
const IncrementCounter=()=>{
    setCountervalue(
        CounterValue=CounterValue+1
        )
}
const DecrementCounter=()=>{
    setCountervalue(
        CounterValue=CounterValue-1
        )
}

    return (
        <div>
            <h1>
                {CounterValue}
            </h1>
            <Button variant="outlined"
            fullWidth
            color="secondary"
            onClick={IncrementCounter} >
              
              +
            </Button>
            <Button variant="outlined"
            fullWidth
            color="primary"
            onClick={DecrementCounter} >
              
              -
            </Button>
        </div>
    )
}

export default Counter
