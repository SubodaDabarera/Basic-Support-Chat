import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Agent from './Agent'

const AgentLogin = () => {

    const [agentID, setAgentID] = useState("")

    const clickFunction = () => {
        console.log("clicked")
        
        return (
        <>
        <Agent agentID = {agentID} />
        </>
        )
    }

  return (
    <div>
        <input placeholder='Agent ID...' 
            onChange={(e) => setAgentID(e.target.value)}
        />

        <button onClick={() => clickFunction()}>
            Click here
        </button>
        
    </div>
  )
}

export default AgentLogin