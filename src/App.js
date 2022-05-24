import React, { useState } from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Agent from "./Agent";
import AgentLogin from "./AgentLogin";
import Client from "./Client";
import MultipleAgents from "./MultipleAgents";

const agentsArray = [
  {"aID": "agent"},
  {"aID": "agent1"},
  {"aID": "agent2"}
]

function App() {

  const [agentIDtemp, setAgentIDTemp] = useState("")
  const [agentID, setAgentID] = useState("")
  const [userID, setUserID] = useState("")
  const [userIDtemp, setUserIDtemp] = useState("")

  console.log(agentID)

  return (
    <div className="App">
        <>
        <input placeholder="Enter agent ID... "
          onChange={(e) => setAgentIDTemp(e.target.value)}
        />
        <button onClick={
          () => (setAgentID(agentIDtemp),
                localStorage.setItem("agent-uid", agentIDtemp))
          }>
          Click to enter agent
        </button>
        <br></br>

        <input placeholder="Enter user ID... "
          onChange={(e) => setUserIDtemp(e.target.value)}
        />
        <button onClick={
          () => (setUserID(userIDtemp),
                localStorage.setItem("cc-uid", userIDtemp))
          }>
          Click to enter user
        </button>


        <br></br>
        <button
          style={{backgroundColor: "red"}}
          onClick={() => localStorage.setItem("cc-uid", "")}
        >Remove user</button>

        <button style={{backgroundColor: "red"}}
          onClick={() => localStorage.setItem("agent-uid", "")}
        >Remove agent</button>


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
            <Route path='/multipleAgents' element = {<MultipleAgents/>} />
          </Routes>
        </BrowserRouter>
        
        </>
         
    </div>
  );
}

export default App;
