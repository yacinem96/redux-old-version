
import React from 'react'
import { Button } from 'react-bootstrap'
export const Counter = ({counter,increments,decrements}) => {
 
    return (
        <div>
            <h1>Counter App</h1>
            <h1>{counter}</h1>
          <Button variant='success' onClick={()=>increments()}  >+</Button>
          <Button variant='danger' onClick={()=>decrements()} >-</Button>

        </div>
    )
}
