import Image from 'next/image'
import React from 'react'
import '../styles/home/styles.css'



function Card({ title, img,tagline, projectUrl}) {
    return (
        <article className='card'>
            
            <Image
                src={img}
                width={2500}
                height={500}
                alt="Picture of the author"
            />
            <div className='contenedor'>

                <h1 className='title'>{title}</h1>
                <small className= 'title'>{tagline}</small>   
            </div>

                
        </article>
    )
}

export default Card