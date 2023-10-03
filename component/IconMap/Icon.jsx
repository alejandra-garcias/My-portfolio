import React from 'react'
import { Iconos } from './IconMap' 
import Image from 'next/image'

const Icon = ({name}) => {
  return (
    <>
    {name?(
        <Image 
        className='icono' 
        src= {Iconos[name]}
        alt= {name}
        width = {10}
        height={10}
        
        >
        
        </Image>
    ):(
        <>
        </>
    )}
    </>
  )
}

export default Icon