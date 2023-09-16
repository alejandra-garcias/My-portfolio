import React from "react";
import "../Tecnologias/Tecnologias.css";
import Image from "next/image";

const Tecnologias = () => {
  return (
    <>
      <section class="container">
        <h2 className="gradiant-text-centre">Skills and Technologies </h2>
        <div class="tecnologias">
            <div>
                <Image src={"/img/Python.svg"} width={64} height={64} alt="Python" />
          <p class="mb-0">Python</p>
            </div>
          
          <div>
            <Image src={"/img/mysql.svg"} width={64} height={64} alt="MySQL" />
            <p class="mb-0">MySQL</p>
          </div>
          <div>
            <Image src={"/img/laravel.png"} width={64} height={64} alt="Laravel" />
            <p class="mb-0">Laravel</p>
          </div>
          <div>
            <Image src={"/img/php.svg"} width={64} height={64} alt="PHP" />
            <p class="mb-0">PHP</p>
          </div>
          <div>
            <Image src={"/img/react.svg"} width={64} height={64} alt="React" />
            <p class="mb-0">React</p>
          </div>
          <div>
            <Image src={"/img/html.svg"} width={64} height={64} alt="HTML" />
            <p class="mb-0">HTML</p>
          </div>
          <div>
            <Image src={"/img/css.svg"} width={64} height={64} alt="Css" />
            <p class="mb-0">CSS</p>
          </div>
          <div>
            <Image src={"/img/javascript.svg"} width={64} height={64} alt="Javascript" />
            <p class="mb-0">Javascript</p>
          </div>
          <div>
            <Image src={"/img/bootstrap.svg"} width={64} height={64} alt="Bootstrap" />
            <p class="mb-0">Bootstrap</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tecnologias;
