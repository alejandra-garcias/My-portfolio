"use client"
import React, { useState, useEffect } from "react"
import './Nav.scss'
import Link from "next/link"


export default function nav() {
  const [ScrollY, setScrollY] = useState(0)
  useEffect(()=>{
    window.addEventListener('scroll',handleScroll)

  },[])
  const handleScroll = () =>{
    let position = window.scrollY
     setScrollY(position)
    
  }
console.log(ScrollY)

  return (
    <>
    <div className="nav-bar-container">
        <li><Link className={ScrollY<552? 'active': null} href="/">Home</Link></li>
        <li><Link className={ScrollY>=552 && ScrollY<=1200 ? 'active': null}href="/#projects">Projects</Link></li>
        <li><Link className={ScrollY>=1203 && ScrollY<=1600 ? 'active': null} href="/#certificates">Certificates</Link></li>
        <li><Link className={ScrollY>=1600 && ScrollY<=2298 ? 'active': null} href="/#contact">Contact</Link></li>
    </div>

        
     
      </>
  )
}
