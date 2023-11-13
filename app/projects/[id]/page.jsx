"use client";
import React, {useEffect, useState} from "react";
import Data from "../../../projects.json";
import IconGradiant from "@/component/IconMap/IconGradiant";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";

export default function ProjectDetails({params}) {
    const [project, setProject] = useState(null);

    useEffect(() => {
        const foundProject = Data.find((project) => project.id === params.id);

        if (foundProject) {
            setProject(foundProject);
        }
    }, [params.id]);


    if (!project) {
        return <div>Proyecto no encontrado</div>;
    }


    return (
        <>
            <div className={styles.container}>
                <article>
                    <section className={styles.containerTitle}>
                        <h1>{project.title}</h1>
                        <Image
                            src={project.image}
                            width={2500}
                            height={500}
                            alt={project.title}
                            className={styles.imgResponsiveProjects}
                        />
                        <p>{project.description}</p>
                    </section>


                    <section className={styles.containerIcons}>
                        <h2>Technologies I used:</h2>
                        <div>
                            {project.technologies.map((t, i) => {
                                return <IconGradiant name={t} key={i}/>;
                            })}
                        </div>
                    </section>


                </article>

                <article>
                    <Image
                        src={project.image}
                        width={2500}
                        height={500}
                        alt={project.title}
                        className={styles.img}
                    />
                </article>
            </div>

            <div className={styles.containerBack}>


                <section className={styles.containerRoles}>
                    <div>
                        <h2>Role:</h2>
                        <p>Web designer, developer and project owner</p>
                    </div>
                    <div>
                        <h2>Year:</h2>
                        <p>2023</p>
                    </div>
                </section>

                <section className={styles.containerLinks}>
                    <h2>Links:</h2>
                    <div className={styles.btns}>
                        <a href={project.urlGithub}>
                            <p>
                                Github

                            </p>
                        </a>
                        <a href={project.urlSite}>
                            <p>
                                Go to site

                            </p>
                        </a>


                    </div>
                    <div>
                        <Link className="button" href="/#projects">
                            See other projects
                        </Link>
                    </div>
                </section>


            </div>
        </>

    );
}
