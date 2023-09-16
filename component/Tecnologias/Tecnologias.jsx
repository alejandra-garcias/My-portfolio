import React from 'react'
import "../Tecnologias/Tecnologias.css"
import Laravel from "../Icons/Svg/Laravel"
import Css from "../Icons/Svg/Css"
import Html from "../Icons/Svg/Html"
import Javascript from "../Icons/Svg/Javascript"
import MySQL from "../Icons/Svg/MySQL"
import Php from "../Icons/Svg/Php"
import Python from "../Icons/Svg/Python"
import SvgReact from "../Icons/Svg/SvgReact"

const Tecnologias = () => {
    return (
      <>    
      <section class = "container">
          
              <h2> / Skills and Technologies </h2>
              <div class="tecnologias">
                  <div>
                  <Python/>
                  <p class="mb-0">Python</p>  
              </div>
              <div>
                  <MySQL/>
                  <p class="mb-0">MySQL</p>  
              </div>
              <div>
                  <Laravel/>
                  <p class="mb-0">Laravel</p>  
              </div>
              <div>
                  <Php/>
                  <p class="mb-0">PHP</p>  
              </div>
              <div>
                  <SvgReact/>
                  <p class="mb-0">React</p>  
              </div>
              <div>
                  <Html/>
                  <p class="mb-0">HTML</p>  
              </div>
              <div>
                  <Css />
                  <p class="mb-0">CSS</p>  
              </div>
              <div>
                  <Javascript/>
                  <p class="mb-0">Javascript</p>  
              </div>
              <div>
                  <img width="80px" src="" alt="" />
                  <p class="mb-0">Bootstrap</p>  
              </div>
              </div>
  
      
      </section>
      </>
      
    )
  }
  
  export default Tecnologias