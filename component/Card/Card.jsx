import Image from "next/image";
import React from "react";
import Link from "next/link";
import Icon from "../IconMap/Icon.jsx";

function Card({ title, img, tagline, technologies }) {
  return (
    <article className="card">
      <Image
        className="background"
        src={img}
        width={2500}
        height={500}
        alt="Picture of the author"
      />
      <div className="contenedor">
        <div className="text">
          <h1 className="title">{title}</h1>
          <span className="title">{tagline}</span>
        </div>
        <div className="tech-arrow">
          <div className="tech">
            {technologies.map((t) => {
              return <Icon name={t} />;
            })}
          </div>
          <div className="arrow">
            <Link href={`/projects/${title}`}>
              <button>↗</button>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Card;
