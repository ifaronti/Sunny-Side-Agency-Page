import React from "react";
import Topnav from './components/Nav'
import GridCards from './components/Gridcards'

export default function App(){
  return(
    <main className="app">
      <div className="content">
        <Topnav/>
        <GridCards/>
      </div>
    </main>
  )
}