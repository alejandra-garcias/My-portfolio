"use client"
import '../styles/card/styles.css'
import React, { useState, useEffect } from "react"
import projectsJson from "../projects.json"
import Card from "../component/Card"
import Circle from "../component/Circle"
import Cursor from "../component/Cursor/Cursor"
export default function Home() {

  const [presentation, setPresentation] = useState("My name is Alejandra")
  const [statePresentation, setStatePresentation] = useState(true)
  const [projects, setProjects] = useState(projectsJson)

  useEffect(() => {

    setTimeout(() => {
      switchTitle()
    }, 3500)
    
  }, [statePresentation])

  const switchTitle = ()=> {
    if (statePresentation === true) {
      setStatePresentation(false)
      setPresentation("My name is Alejandra") 
    } else {
      setStatePresentation(true)
      setPresentation("I'm a full stack developer")
    }
  }


  return (
    <main className="home">
      <Cursor/>
      <Circle/>
      <section className="presentation">
        <article>
          <h1>Hi! <br />{presentation}</h1>
          <p>Passionately crafting Python-powered solutions and building full-stack experiences that meld innovation with functionality.</p>
        </article>
      </section>
      <section className="projects">
        {
          projects.map((p) => {
            return(
              <Card
                title={p.title}
                tagline={p.tagline}
                img={p.image}
                key={p.id}
                technologies={p.technologies}
                projectUrl={p.projectUrl}
              />
            )
          })
        }
      </section>
    </main>
  )
}
