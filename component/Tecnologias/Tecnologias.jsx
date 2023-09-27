import React from "react";
import "../Tecnologias/Tecnologias.css";
import Image from "next/image";

const Tecnologias = () => {
  return (
    <>
      <section class="container">
        <h2 className="gradiant-text-centre">Skills and Technologies </h2>
        <div class="tecnologias">
          <div class="tecnologia">
            <Image
              src={"/img/Python.svg"}
              width={64}
              height={64}
              alt="Python"
            />
            <p>Python</p>
          </div>

          <div class="tecnologia">
            <Image src={"/img/mysql.svg"} width={64} height={64} alt="MySQL" />
            <p>MySQL</p>
          </div>
          <div class="tecnologia">
            <Image
              src={"/img/laravel.png"}
              width={64}
              height={64}
              alt="Laravel"
            />
            <p>Laravel</p>
          </div>
          <div class="tecnologia">
            <Image src={"/img/php.svg"} width={64} height={64} alt="PHP" />
            <p>PHP</p>
          </div>
          <div class="tecnologia">
            <Image src={"/img/react.svg"} width={64} height={64} alt="React" />
            <p>React</p>
          </div>
          <div class="tecnologia">
            <Image src={"/img/html.svg"} width={64} height={64} alt="HTML" />
            <p>HTML</p>
          </div>
          <div class="tecnologia">
            <Image src={"/img/css.svg"} width={64} height={64} alt="Css" />
            <p>CSS</p>
          </div>
          <div class="tecnologia">
            <Image
              src={"/img/javascript.svg"}
              width={64}
              height={64}
              alt="Javascript"
            />
            <p>Javascript</p>
          </div>
          <div class="tecnologia">
            <Image src={"/img/Sass.svg"} width={64} height={64} alt="Sass" />
            <p>Sass</p>
          </div>
          <div class="tecnologia">
            <Image
              src={"/img/bootstrap.svg"}
              width={64}
              height={64}
              alt="Bootstrap"
            />
            <p>Bootstrap</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tecnologias;
