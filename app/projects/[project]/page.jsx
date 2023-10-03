import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='contenedor-page'>
        <div className='contenedor-info'>
            <h1>Project title</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est consectetur corrupti qui aliquid, maxime tenetur nulla dolor, ullam sed autem vero rem dicta officiis reprehenderit omnis quam, nihil fugit dolorem.</p>
            <ul className='container-iconos'>
            <li>d</li>
            <li>d</li>
            <li>d</li>
            </ul>

        </div>
        <div className='contenedor-fotosbotones'>
            <Image src={"/1png"} width={64} height={64} alt="imagen" />
            <div className='contenedor-botones'>
            <button></button>
            <button></button>
            <button></button>
            </div>
        </div>
    </div>
  )
}

export default page