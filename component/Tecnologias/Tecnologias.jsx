import React from "react";
import "../Tecnologias/Tecnologias.scss";
import Image from "next/image";

const Tecnologias = () => {
  return (
    <>
      <section class="container">
        <h2 className="gradiant-text-centre">Skills and Technologies </h2>
        <div className="tech-responsive">
          <div className="column">
            <Image
              src={"/skills-section/Python.svg"}
              width={64}
              height={64}
              alt="Python"
            />
            <Image
              src={"/skills-section/django.svg"}
              width={64}
              height={64}
              alt="Django"
            />
            <Image
              src={"/skills-section/mysql.svg"}
              width={64}
              height={64}
              alt="MySQL"
            />
            <Image
              src={"/skills-section/laravel.png"}
              width={64}
              height={64}
              alt="Laravel"
            />

            <Image
              src={"/skills-section/php.svg"}
              width={64}
              height={64}
              alt="PHP"
            />

            <Image
              src={"/skills-section/react.svg"}
              width={64}
              height={64}
              alt="React"
            />
            <Image
              src={"/skills-section/javascript.svg"}
              width={64}
              height={64}
              alt="Javascript"
            />
            <Image
              src={"/skills-section/html.svg"}
              width={64}
              height={64}
              alt="HTML"
            />
            <Image
              src={"/skills-section/css.svg"}
              width={64}
              height={64}
              alt="Css"
            />
            <Image
              src={"/skills-section/Sass.svg"}
              width={64}
              height={64}
              alt="Sass"
            />
            <Image
              src={"/skills-section/bootstrap.svg"}
              width={64}
              height={64}
              alt="Bootstrap"
            />
              <Image
              src={"/skills-section/Mongodb.png"}
              width={64}
              height={64}
              alt="MongoDB"
            />
          </div>
        </div>

        <div class="tecnologias">
          <div class="tecnologia">
            <Image
              src={"/skills-section/Python.svg"}
              width={64}
              height={64}
              alt="Python"
            />
            <p>Python</p>
          </div>
          <div class="tecnologia">
            <Image
              src={"/skills-section/django.svg"}
              width={64}
              height={64}
              alt="Django"
            />
            <p>Django</p>
          </div>

          <div class="tecnologia">
            <Image
              src={"/skills-section/mysql.svg"}
              width={64}
              height={64}
              alt="MySQL"
            />
            <p>MySQL</p>
          </div>
          <div class="tecnologia">
            <Image
              src={"/skills-section/laravel.png"}
              width={64}
              height={64}
              alt="Laravel"
            />
            <p>Laravel</p>
          </div>
          <div class="tecnologia">
            <Image
              src={"/skills-section/php.svg"}
              width={64}
              height={64}
              alt="PHP"
            />
            <p>PHP</p>
          </div>
          <div class="tecnologia">
            <Image
              src={"/skills-section/react.svg"}
              width={64}
              height={64}
              alt="React"
            />
            <p>React</p>
          </div>
          <div class="tecnologia">
            <Image
              src={"/skills-section/javascript.svg"}
              width={64}
              height={64}
              alt="Javascript"
            />
            <p>Javascript</p>
          </div>
          <div class="tecnologia">
            <Image
              src={"/skills-section/html.svg"}
              width={64}
              height={64}
              alt="HTML"
            />
            <p>HTML</p>
          </div>
          <div class="tecnologia">
            <Image
              src={"/skills-section/css.svg"}
              width={64}
              height={64}
              alt="Css"
            />
            <p>CSS</p>
          </div>

          <div class="tecnologia">
            <Image
              src={"/skills-section/Sass.svg"}
              width={64}
              height={64}
              alt="Sass"
            />
            <p>Sass</p>
          </div>
          <div class="tecnologia">
            <Image
              src={"/skills-section/bootstrap.svg"}
              width={64}
              height={64}
              alt="Bootstrap"
            />
            <p>Bootstrap</p>
          </div>
          <div class="tecnologia">
          <Image
              src={"/skills-section/Mongodb.png"}
              width={64}
              height={64}
              alt="MongoDB"
            />
            <p>MongoDB</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tecnologias;
