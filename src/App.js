import React, { useState } from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Agent from "./Agent";
import AgentLogin from "./AgentLogin";
import Client from "./Client";

const agentsArray = [
  {"aID": "agent"},
  {"aID": "agent1"},
  {"aID": "agent2"}
]

function App() {

  const [agentIDtemp, setAgentIDTemp] = useState("")
  const [agentID, setAgentID] = useState("")

  console.log(agentID)

  return (
    <div className="App">
        <>
        {/* <input placeholder="Enter agent ID... "
          onChange={(e) => setAgentIDTemp(e.target.value)}
        />

        <button onClick={
          () => (setAgentID(agentIDtemp),
                localStorage.setItem("a_uid", agentIDtemp))
          }>
          Click to enter
        </button> */}
        
        <button
          onClick={() => localStorage.setItem("cc-uid", "")}
        >Remove user</button>

        <BrowserRouter>
        <ul>
        <li>
          <Link to="/client">Client Home</Link>
        </li>
        <li>
          <Link to="/agent">Agent Dashboard</Link>
        </li>
        {/* <button onClick={() => localStorage.setItem("cc-uid", "")}>Click to remove client</button>
        <button onClick={() => localStorage.setItem("a_uid", "")}>Click to remove Agent</button> */}
      </ul>

          <Routes>
            <Route path="/client" element = {<Client/>} />
            <Route path="/agent" element = {<Agent/>} />
          </Routes>
        </BrowserRouter>
        
        </>
         
    </div>
  );
}

export default App;
