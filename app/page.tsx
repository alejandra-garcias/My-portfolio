"use client";
import "../component/Card/styles.css";
import "../styles/styles.scss";
import certificado1 from "../assets/6.png";
import Image from "next/image";
import React, {useEffect, useState} from "react";
import projectsJson from "../projects.json";
import Card from "../component/Card/Card";
import Technologies from "../component/Tecnologias/Tecnologias";
import Link from "next/link";

export default function Home() {
    const [presentation, setPresentation] = useState("My name is Alejandra");
    const [statePresentation, setStatePresentation] = useState(true);
    const [projects, setProjects] = useState(projectsJson);
    const [ScrollY, setScrollY] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            switchTitle();
        }, 3500);
    }, [statePresentation]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    const switchTitle = () => {
        if (statePresentation === true) {
            setStatePresentation(false);
            setPresentation("My name is Alejandra");
        } else {
            setStatePresentation(true);
            setPresentation("I am full-stack developer");
        }
    };
    const handleScroll = () => {
        let position = window.scrollY;
        setScrollY(position);
    };
    let bubbles = ["</>", "{}", "f'{}'", "<?php"];
    return (
        <main>
            <section id="home" className="presentation">
                <div className="bubbles bubble1">
                    <span>{bubbles[0]}</span>
                </div>
                <div className="bubbles bubble2">
                    <span>{bubbles[1]}</span>
                </div>
                <div className="bubbles bubble3">
                    <span>{bubbles[2]}</span>
                </div>
                <div className="bubbles bubble4">
                    <span>{bubbles[3]}</span>
                </div>

                <article className="title">
                    <h1>
                        Hi! <br/>
                        <span className="gradiant-text-centre">{presentation}</span>
                    </h1>
                    <p>
                        Passionately crafting Python-powered solutions and building
                        full-stack experiences that meld innovation with functionality.
                    </p>
                </article>
            </section>
            <span id="projects"></span>

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
                        />
                    );
                })}
            </section>
            <Technologies/>
            <div id="certificates" className="container-grisaceo">
                <section className="container">
                    <h2 className="gradiant-text-centre">Certificates</h2>
                    <div className="projects">
                        <article className="card">
                            <Image
                                className="background-nohover"
                                src={certificado1}
                                width={2500}
                                height={500}
                                alt="Certificado Aulab"
                            />
                        </article>
                        <article className="card">
                            <Image
                                className="background-nohover"
                                src={certificado1}
                                width={2500}
                                height={500}
                                alt="Certificado Aulab"
                            />
                        </article>
                        <article className="card">
                            <Image
                                className="background-nohover"
                                src="/Certificates/Python-certificate.jpg"
                                width={2000}
                                height={450}
                                alt="Certificado Python"
                            />
                            <div className="contenedor">
                                <div className="arrow">
                                    <Link href="/Certificates/Python-certificate.pdf">
                                        <button>↗</button>
                                    </Link>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>
            </div>

            <section id="contact" className="container-contact">
                <p>
                    If you like my work or you wish to discuss further what how we can
                    help each other, please feel free to contact me or explore my
                    channels. <br/>
                    Thank you!
                </p>
                <div className="Network">
                    <div className="contact-details">
                        <a href="https://www.linkedin.com/in/alejandra-garcia-sanchez-2513a212a/">
                            <Image
                                src="/white-logos/linkedin.svg"
                                width={25}
                                height={25}
                                alt="linkedin-icon"
                            />
                        </a>
                    </div>

                    <div className="contact-details">
                        <a href="https://www.github.com/alejandra-garcias">
                            <Image
                                src="/white-logos/github.svg"
                                width={25}
                                height={25}
                                alt="github-icon"
                            />
                        </a>
                    </div>

                    <div className="contact-details">
                        <a href="mailto:algasa-97@hotmail.com">
                            <Image
                                src="/white-logos/email.svg"
                                width={25}
                                height={25}
                                alt="email-icon"
                            />
                        </a>
                    </div>


                </div>
                <Link href="/Certificates/Alejandra-Garcia ES-ING.pdf"><button className="button2">Download my CV here</button></Link>
            </section>
        </main>
    );
}
