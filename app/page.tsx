"use client";
import "../component/Card/styles.css";
import styles from "../styles/home.module.scss";
import React, { useEffect, useState, useCallback } from "react";
import projectsJson from "../projects.json";
import Card from "../component/Card/Card";
import Tecnologias from "@/component/Tecnologias/Tecnologias";
import Certificates from "@/component/Certificates/Certificates";
import Form from "@/component/Form/Form";
import Link from "next/link";
import Image from "next/image";





export default function Home() {
  const [presentation, setPresentation] = useState("My name is Alejandra");
  const [statePresentation, setStatePresentation] = useState(true);
  const [projects, setProjects] = useState(projectsJson);
  const [ScrollY, setScrollY] = useState(0);

  const switchTitle = useCallback(() => {
    if (statePresentation) {
        setStatePresentation(false);
        setPresentation("My name is Alejandra");
    } else {
        setStatePresentation(true);
        setPresentation("I am full-stack developer");
    }
}, [statePresentation]);
const handleScroll = () => {
    let position = window.scrollY;
    setScrollY(position);
};
let bubbles = ["</>", "{}", "f'{}'", "<?php"];

useEffect(() => {
    setTimeout(() => {
        switchTitle();
    }, 3500);
}, [switchTitle]);

useEffect(() => {
    window.addEventListener("scroll", handleScroll);
}, []);

  // Logica formulario de contactos
  



  return (
    <>
      <main>
        <section id="home" className={`${styles.presentation}`}>
          <div className={`${styles.bubbles} ${styles.bubble1}`}>
            <span>{bubbles[0]}</span>
          </div>
          <div className={`${styles.bubbles} ${styles.bubble2}`}>
            <span>{bubbles[1]}</span>
          </div>
          <div className={`${styles.bubbles} ${styles.bubble3}`}>
            <span>{bubbles[2]}</span>
          </div>
          <div className={`${styles.bubbles} ${styles.bubble4}`}>
            <span>{bubbles[3]}</span>
          </div>

          <article className={styles.presentationTitle}>
            <h1>
              Hi! <br />
              <span>{presentation}</span>
            </h1>
            <p>
              Passionately crafting Python-powered solutions and building
              full-stack experiences that meld innovation with functionality.
            </p>
          </article>
        </section>
        <section id="projects">
          <div className={styles.projects}>
            {projects.map((p) => {
              return (
                <Card
                  title={p.title}
                  tagline={p.tagline}
                  img={p.image}
                  key={p.id}
                  technologies={p.technologies}
                />
              );
            })}
          </div>
        </section>

        <section className={`${styles.section} ${styles.technologies}`}>
          <h2 className={styles.title}>Skills and Technologies </h2>

          <div className={styles.sectionContentContainer}>
            <div className={`${styles.sectionContent} ${styles.explication}`}>
              <p>
                I am a Python specialist with a robust focus on development,
                particularly excelling in agile methodologies, specifically
                Scrum. Additionally, I possess a knack for seamlessly adapting
                to various programming languages.
              </p>
            </div>

            <div className={styles.sectionContent}>
              <Tecnologias />
            </div>
          </div>
        </section>

        <section
          id="certificates"
          className={`${styles.section} ${styles.certificates}`}
        >
          <h2 className={styles.title}>Certificates</h2>

          <div className={styles.sectionContentContainer}>
            <div className={`${styles.sectionContent} ${styles.explication}`}>
              <p>
                I pursued my education in technology through a combination of
                traditional academies, and through my own research and project
                development.
              </p>
            </div>

            <div className={styles.sectionContent}>
              <Certificates></Certificates>
            </div>
          </div>
        </section>

        <footer id="contact" className={`${styles.footer}`}>
          <div className={styles.footerContent}>
            <div className={styles.footerItem}>
              <h2>ALEJANDRA</h2>
              <p>Full Stack Developer</p>
              <div className={styles.footerText}>
                <section className={styles.networks}>
                  <a
                    href="https://www.linkedin.com/in/alejandra-garcia-sanchez-2513a212a/"
                    target={"_blank"}
                  >
                    <Image
                      src="/white-logos/linkedin.svg"
                      width={25}
                      height={25}
                      alt="linkedin-icon"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/alejandra-garcia-sanchez-2513a212a/"
                    target={"_blank"}
                  >
                    <Image
                      src="/white-logos/github-blanco.svg"
                      width={25}
                      height={25}
                      alt="linkedin-icon"
                    />
                  </a>

                  <a href="mailto:algasa-97@hotmail.com" target={"_blank"}>
                    <Image
                      src="/white-logos/email.svg"
                      width={25}
                      height={25}
                      alt="linkedin-icon"
                    />
                  </a>
                  <a href="tel:+34644742998" target={"_blank"}>
                    <Image
                      src="/white-logos/phone.svg"
                      width={25}
                      height={25}
                      alt="linkedin-icon"
                    />
                  </a>
                </section>
              </div>
              
            </div>

            <div>
              <Form/>
            </div>

            <div className={styles.footerItem}>
              <h4>My Cv</h4>
              <div className={styles.footerText}>
                <div className={styles.footerBtn}>
                  <Link href="/Certificates/Alejandra-Garcia ES-ING.pdf">
                    <button>
                      <p>Download</p>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.copyright}>
          <p>Copyright © 2023 Alejandra.</p>
          <a href="#home">
          <Image
                      src="/img/goup.svg"
                      width={40}
                      height={40}
                      alt="goup-icon"
                    /></a>
            
          </div>
        </footer>
      </main>
    </>
  );
}
