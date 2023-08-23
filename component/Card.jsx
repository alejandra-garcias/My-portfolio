import Image from 'next/image'
import React from 'react'
import '../styles/home/styles.css'

function Card({ title, img, }) {
    return (
        <article className='card'>
            
            <Image
                src={img}
                width={500}
                height={250}
                alt="Picture of the author"
            />
            <div className='contenedor'>
                <h1 className='title'>{title}</h1>
                <h3 className= 'title'>{}</h3>
            </div>
        </article>
    )
}

export default Card