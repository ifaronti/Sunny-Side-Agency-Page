import React from "react";
import Topnav from './components/Nav'
import GridCards from './components/Gridcards'
import Testimonials from "./components/Testimonial";
import FlexCards from "./components/Flexcards";
import Footer from "./components/Footer";

export default function App(){
  return(
    <main className="app">
      <div className="content">
        <Topnav/>
        <GridCards/>
        <Testimonials/>
        <FlexCards/>
        <Footer/>
      </div>
    </main>
  )
}