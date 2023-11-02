import React, { createContext, useReducer } from 'react'
import "./App.css";
import Header from "./components/includes/Header/Header";
import Footer from "./components/includes/Footer/Footer";
import Routing from "./components/includes/Routes/Routes";
import { initialState, reducer } from "../src/reducer/UseReducer";


// Hide and show logout and login, registration 
// 1. contextAPI 
export const UserContext = createContext();

export default function App(){

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <UserContext.Provider value = {{state, dispatch}}> 
        <Header/>
          <Routing />
        <Footer/>
      </UserContext.Provider>      
    </> 
  )
}