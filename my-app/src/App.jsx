import React from "react"
import { Route, Routes } from "react-router-dom"

import './App.css'
import SoloRegisterCard from "./components/RegisterCard/SoloRegisterCard.jsx"
import DuoRegisterCard from "./components/RegisterCard/DuoRegisterCard.jsx"
import SquadRegisterCard from "./components/RegisterCard/SquadRegisterCard.jsx"
import NewStyle from "./components/NewStyle.jsx"


function App() {
 
  

  return (
    <>
    

   
    <Routes>

    
    <Route element={<NewStyle/>} path="/" />
    
    <Route element={<SoloRegisterCard/>} path="/SoloRegistration" />
    <Route element={<DuoRegisterCard/>} path="/DuoRegistration" />
    <Route element={<SquadRegisterCard/>} path="/SquadRegistration" />
      

  </Routes>

    
    
      
    </>
  )
}

export default App
