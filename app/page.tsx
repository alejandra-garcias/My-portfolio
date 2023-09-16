"use client";
import "../styles/card/styles.css";
import "../styles/home/styles.css";
import certificado1 from "../assets/6.png";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import projectsJson from "../projects.json";
import Card from "../component/Card";


export default function Home() {
  const [presentation, setPresentation] = useState("My name is Alejandra");
  const [statePresentation, setStatePresentation] = useState(true);
  const [projects, setProjects] = useState(projectsJson);
  const [ScrollY, setScrollY] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      switchTitle();
    }, 3500);
  }, [statePresentation]);

  useEffect(()=>{
    window.addEventListener('scroll',handleScroll)

  },[])

  const switchTitle = () => {
    if (statePresentation === true) {
      setStatePresentation(false);
      setPresentation("My name is Alejandra");
    } else {
      setStatePresentation(true);
      setPresentation("I'm a full-stack developer");
    }

  };
  const handleScroll = () =>{
    let position = window.scrollY
     setScrollY(position)
    
  }
  return (
    <main className="home">
      <section id="home" className="presentation">
        <article>
          <h1>
            Hi! <br />
            <span className="gradiant-text-centre">{presentation}</span>
          </h1>
          <p>
            Passionately crafting Python-powered solutions and building
            full-stack experiences that meld innovation with functionality.
          </p>
        </article>
        <span id="projects"></span>
      </section>

      <div>
        <h2 className="gradiant-text-centre">Projects</h2>
      </div>

      <section className="projects">
        {projects.map((p) => {
          return (
            <Card
              title={p.title}
              tagline={p.tagline}
              img={p.image}
              key={p.id}
              technologies={p.technologies}
              projectUrl={p.projectUrl}
            />
          );
        })}
      </section>
      <section id="about" className="container">
        <h2 className="gradiant-text-centre"> About me</h2>
        <div className="about-container">

          <div className="education-container">
            <h3 className="gradiant-text">Education</h3>
            <ul>
              <li>Degree in Marketing</li>
              <p>Bournemouth Universiy</p>
              <p>
                I acquired a solid foundation in understanding market dynamics,
                with a focus on SEO, user-centered design, content creation,
                project management, web analytics, and effective communication.
              </p>
              <br />
              <li>Bootcamp Desarrollo Web Full Stack</li>
              <p>Aulab Hackademy. 400+hours</p>
              <p>
                In 400 hours of coursework, I learned full-stack web
                development, including HTML, CSS, JavaScript,React and
                Next.js(front-end), and PHP/Laravel (back-end) and MySQL for
                database management. I also adopted agile methodologies and the
                Scrum framework for efficient project management.
              </p>
              <br />
              <li>Curso Python y bases de datos</li>
              <p>Escuela Directa</p>
              <p>
                I acquired a comprehensive understanding of Python, including
                its fundamentals, game development capabilities, and
                applications in machine learning and artificial intelligence
                (AI) during my studies.
              </p>
              <br />
              <li>C1 Ingles</li>
              <p>Cambridge English</p>
              <p>
                The C1 Cambridge level certifies a high proficiency in English,
                enabling effective communication in academic and professional
                settings, as well as comprehension of complex texts and
                discussions.
              </p>
            </ul>
          </div>
          <div className="work-container">
            <h3 className="gradiant-text">Work Experience</h3>
            <ul>
              <li>Marketing and Sales Officer</li>
              <p>Aulab - Bari Italia</p>
              <p>
                I engaged in direct B2B sales of full-stack web development
                bootcamps, addressing technical inquiries and hosting
                interactive webinars for prospective clients. I also executed
                marketing initiatives tailored to the Spanish market, all while
                working remotely and maintaining seamless communication with the
                team.
              </p>
              <br />
              <li>Marketing Manager</li>
              <p>Infotour360 - Sevilla, Spain </p>
              <p>
                In my experience at Infotour, a company specializing in virtual
                tour creation, my responsibilities included SEO management,
                website maintenance, and client negotiations. I successfully
                ensured top-notch online visibility, maintained a seamless web
                presence, and fostered strong client relationships, contributing
                to the company's growth and success.
              </p>
              <br />
              <li>Clients Relations and Events Manager</li>
              <p>Southbourne School of English - Bournemouth </p>
              <p>
                I managed client relationships by creating customized event
                programs, overseeing every aspect from planning to the actual
                event day, and maintaining strong communication throughout.
                Additionally, I led a team of over 50 individuals, handling
                recruitment, training, and management, while also taking charge
                of budget preparation.
              </p>
            </ul>
          </div>
        </div>
      </section>
      <div id="certificates" className="container-grisaceo">
        <section className="container">
          <h2 className="gradiant-text-centre">Certificates</h2>
          <div className="projects">
            <article className="card">
              <Image
                src={certificado1}
                width={2500}
                height={500}
                alt="Certificado Aulab"
              />
              
            </article>
            <article className="card">
              <Image
                src={certificado1}
                width={2500}
                height={500}
                alt="Certificado Aulab"
              />
              
            </article>
            <article className="card">
              <Image
                src={certificado1}
                width={2500}
                height={500}
                alt="Certificado Aulab"
              />
              
            </article>
          </div>
        </section>
      </div>

      <section id="contact" className="container-contact">
        <h2> Contact</h2>
        <p>
          If you like my work or you wish to discuss further what how we can
          help each other, please feel free to contact me or explore my
          channels. <br />
          Thank you!
        </p>
        <div className="Network">
          <h3> My networks</h3>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/alejandra-garcia-sanchez-2513a212a/">
                Alejandra Garcia Sanchez
              </a>
            </li>

            <li>
              <a href="https://www.github.com/alejandra-garcias">
                alejandra-garcias
              </a>
            </li>

            <li>
              <a href="mailto:algasa-97@hotmail.com">algasa-97@hotmail.com</a>
            </li>
            <li>
              <a href="tel:+34644742998">+34 644 74 29 98</a>
            </li>
          </ul>
          <button className="button">Download my CV here</button>
        </div>
      </section>
    </main>
  );
}
