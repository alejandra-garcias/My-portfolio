import React from "react";
import "../Tecnologias/Tecnologias.scss";
import Image from "next/image";

const Tecnologias = () => {
    return (
        <div className="tecnologias">
            <div className="tecnologia">
                <Image
                    src={"/skills-section/Python.svg"}
                    width={64}
                    height={64}
                    alt="Python"
                />
                <p>Python</p>
            </div>
            <div className="tecnologia">
                <Image
                    src={"/skills-section/django.svg"}
                    width={64}
                    height={64}
                    alt="Django"
                />
                <p>Django</p>
            </div>

            <div className="tecnologia">
                <Image
                    src={"/skills-section/mysql.svg"}
                    width={64}
                    height={64}
                    alt="MySQL"
                />
                <p>MySQL</p>
            </div>
            <div className="tecnologia">
                <Image
                    src={"/skills-section/laravel.png"}
                    width={64}
                    height={64}
                    alt="Laravel"
                />
                <p>Laravel</p>
            </div>
            <div className="tecnologia">
                <Image
                    src={"/skills-section/php.svg"}
                    width={64}
                    height={64}
                    alt="PHP"
                />
                <p>PHP</p>
            </div>
            <div className="tecnologia">
                <Image
                    src={"/skills-section/react.svg"}
                    width={64}
                    height={64}
                    alt="React"
                />
                <p>React</p>
            </div>
            <div className="tecnologia">
                <Image
                    src={"/skills-section/javascript.svg"}
                    width={64}
                    height={64}
                    alt="Javascript"
                />
                <p>Javascript</p>
            </div>
            <div className="tecnologia">
                <Image
                    src={"/skills-section/html.svg"}
                    width={64}
                    height={64}
                    alt="HTML"
                />
                <p>HTML</p>
            </div>
            <div className="tecnologia">
                <Image
                    src={"/skills-section/css.svg"}
                    width={64}
                    height={64}
                    alt="Css"
                />
                <p>CSS</p>
            </div>

            <div className="tecnologia">
                <Image
                    src={"/skills-section/sass.svg"}
                    width={64}
                    height={64}
                    alt="Sass"
                />
                <p>Sass</p>
            </div>
            <div className="tecnologia">
                <Image
                    src={"/skills-section/bootstrap.svg"}
                    width={64}
                    height={64}
                    alt="Bootstrap"
                />
                <p>Bootstrap</p>
            </div>
            <div className="tecnologia">
                <Image
                    src={"/skills-section/Mongodb.png"}
                    width={64}
                    height={64}
                    alt="MongoDB"
                />
                <p>MongoDB</p>
            </div>
        </div>

    );
};

export default Tecnologias;
