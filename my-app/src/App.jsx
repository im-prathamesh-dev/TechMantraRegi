import React from "react"
import { Route, Routes } from "react-router-dom"
import {Toaster} from "react-hot-toast"

import './App.css'
import SoloRegisterCard from "./components/RegisterCard/SoloRegisterCard.jsx"
import DuoRegisterCard from "./components/RegisterCard/DuoRegisterCard.jsx"
import SquadRegisterCard from "./components/RegisterCard/SquadRegisterCard.jsx"
import NewStyle from "./components/NewStyle.jsx"


function App() {
 
  

  return (
    <>
    

   
    <Routes>
    <Toaster position="top-center" reverseOrder={false} />
    
    <Route element={<NewStyle/>} path="/" />
    
    <Route element={<SoloRegisterCard/>} path="/SoloRegistration" />
    <Route element={<DuoRegisterCard/>} path="/DuoRegistration" />
    <Route element={<SquadRegisterCard/>} path="/SquadRegistration" />
      

  </Routes>

    
    
      
    </>
  )
}

export default App
