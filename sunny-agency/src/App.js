import React from "react";
import Topnav from './components/Nav'
import GridCards from './components/Gridcards'
import Testimonials from "./components/Testimonial";

export default function App(){
  return(
    <main className="app">
      <div className="content">
        <Topnav/>
        <GridCards/>
        <Testimonials/>
      </div>
    </main>
  )
}