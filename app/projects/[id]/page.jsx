"use client";
import React, {useEffect, useState} from "react";
import Data from "../../../projects.json";
import IconGradiant from "@/component/IconMap/IconGradiant";
import Image from "next/image";
import "./page.scss";

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
        <div className="contenedor-page">
            <div className="contenedor-info">
                <h1>{project.title}</h1>
                <Image
                    src={project.image}
                    width={2500}
                    height={500}
                    alt={project.title}
                    className={'img-responsive-projects'}
                />
                <p>{project.description}</p>
                <div>
                    <p>Technologies I used:</p>
                    <div className="container-iconos">
                        {project.technologies.map((t, i) => {
                            return <IconGradiant name={t} key={i}/>;
                        })}
                    </div>
                </div>
            </div>

            <div className="contenedor-fotosbotones">
                <Image
                    src={project.image}
                    width={2500}
                    height={500}
                    alt={project.title}
                />
                <div className="contenedor-botones">
                    <a href={project.urlGithub}>
                        <button className="button">Github</button>
                    </a>
                    <a href={project.urlSite}>
                        <button className="button">Go to site</button>
                    </a>
                </div>
            </div>
        </div>
    );
}
