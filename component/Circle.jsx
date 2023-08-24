import React, { useState } from "react"
import '../styles/home/styles.css'



export default function nav() {
  const [tamaño, settamaño] = useState("10vw")
  const [position, setPosition] = useState("-50px")
  const [colors, setColors] = useState("linear-gradient(45deg, #a7b9f9 0%, #bdbbfa 22%, #f3cb82 49%, #f8f9fa 75%")
  const [show, setshow]= useState(false)
  const hacerGrande = () => {
    settamaño("200vw")
    setPosition("-500px")
    setshow(true)
  }
  const hacerPequenio = () => {
    settamaño("10vw")
    setPosition("-50px")
    setshow(false)
  }
  const onPress= () => {
    if(show===false){

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
      </>
  )
}
