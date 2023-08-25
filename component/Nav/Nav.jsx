"use client"
import React, { useState } from "react"
import './Nav.css'
import Link from 'next/link';


export default function nav() {
  const [tamaño, settamaño] = useState("10vw")
  const [position, setPosition] = useState("-50px")
  const [colors, setColors] = useState("linear-gradient(45deg, #a7b9f9 0%, #bdbbfa 22%, #f3cb82 49%, #f8f9fa 75%")
  const [show, setshow]= useState(false)
  const [navmenuZIndex, setNavmenuZIndex] = useState('absolute');


  
  const hacerGrande = () => {
    settamaño("200vw")
    setPosition("-500px")
    setshow(true)
    setNavmenuZIndex('fixed')
  }
  const hacerPequenio = () => {
    settamaño("10vw")
    setPosition("-50px")
    setshow(false)
    setNavmenuZIndex('absolute')
  }
  const onPress= () => {
    if(show==false){

      hacerGrande()
  }else {
    hacerPequenio()
  }
}

  return (
    <>
    <div
      style={
        {
          width: tamaño,
          height: tamaño,
          right: position,
          top: position,
          backgroundImage: colors
        }
      }
      className="circulo"></div>
      <div className="icon" onClick={() => onPress()}>
        <div
          className="barrita"
          style={{ transform: show ? "rotate(-135deg)" : "rotate(0)" }} />
        <div
          className="barrita"
          style={{
            transform: show ? "rotate(135deg)" : "rotate(0)",
            marginTop: show ? "0px" : "10px"
          }} />
        <div
          className="barrita"
          style={{ opacity: show ? 0 : 1 }} />
      </div>

      
        <div className='navmenu' style={{ position: navmenuZIndex, opacity: show ? 1 : 0 }}>
        <ul>
      <li>
      <Link href="./">
          Home
        </Link>
      </li>
      <li>
      <Link href="./about">
          About
        </Link>
      </li>
      <li>
      <Link href="./contact">
          Contact
        </Link>
      </li>
    </ul>
        </div>
      
      
      </>
  )
}
