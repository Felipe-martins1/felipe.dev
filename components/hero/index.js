import React from "react";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { BiChevronsDown } from "react-icons/bi";
import ColorMode from "./ColorMode";
const Hero = () => {
  const scroll = () => {
    window.scrollTo(0, 1150, "smooth");
  };

  return (
    <React.Fragment>
      <ColorMode />
      <div id="main">
        <div className="title">
          <h1>
            Hi! <br />
            i'm <span>Felipe</span>
          </h1>
          <h2>Fullstack Developer</h2>
          <h2 className="contact">
            <Link href="https://github.com/Felipe-martins1">
              <span>
                <AiFillGithub />
              </span>
            </Link>
            <Link href="https://linkedin.com/in/felipemartins1">
              <span>
                <AiFillLinkedin />
              </span>
            </Link>
            <p>
              <AiOutlineMail /> felipe.dom.martins@gmail.com
            </p>
          </h2>
        </div>
        <BiChevronsDown onClick={scroll} className="BiChevronsDown" />
      </div>
    </React.Fragment>
  );
};

export default Hero;
