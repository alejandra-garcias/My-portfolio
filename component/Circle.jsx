import React, { useState } from "react"
import '../styles/home/styles.css'



export default function nav() {
  const [tamaño, settamaño] = useState("10vw")
  const [position, setPosition] = useState("-50px")
  const [colors, setColors] = useState("linear-gradient(45deg, #a7b9f9 0%, #bdbbfa 22%, #f3cb82 49%, #f8f9fa 75%")
  const hacerGrande = () => {
    settamaño("200vw")
    setPosition("-500px")
    setColors("linear-gradient(45deg, #a7b9f9 0%, #bdbbfa 22%, #f3cb82 49%, #f8f9fa 75%")
  }
  return (
    <div
      onClick={() => hacerGrande()}
      style={
        {
          width: tamaño,
          height: tamaño,
          right: position,
          top: position,
          backgroundImage: colors
        }
      }
      className="circulo"
    >

    </div>
  )
}