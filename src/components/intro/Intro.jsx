import { useEffect, useRef } from "react";
import "./intro.scss";
import { init } from 'ityped';

export default function Intro() {

  const textRef = useRef();

  /*
  useEffect(() => {
    init(textRef.current, {
       showCursor: false,
       backDelay: 1500,
       backSpeed: 60,
       strings: ["Dev"],
       });   used ityped to animate string 
  
  }, []);   */
  
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello, I am</h2>
          <h1>Justin Blair</h1>
          <h3>
            Web Developer/Designer<span ref={textRef}></span>
            </h3>
        </div>

        <a href="#portfolio">
          <img src="assets/down.png" alt=""/>
        </a>
      </div>
    </div>
  )
}
