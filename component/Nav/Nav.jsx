"use client"
import React, { useState } from "react"
import './Nav.css'
import Link from 'next/link';




export default function nav() {
  

  return (
    <>
    <div className="nav-bar-container">
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li ><a href="#about">About</a></li>
        <li><a href="#certificates">Certificates</a></li>
        <li><a href="#contact">Contact</a></li>
    </div>

        
     
      </>
  )
}
