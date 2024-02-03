import React from "react";
import Lottie from "lottie-react";
import developerAnimation from "../../../src/animation/developer.json";
import { motion } from "framer-motion";

import "./hero.css";
export default function Hero() {
  return (
    <section className="hero flex">
      <div className="left-section ">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="/image/me.png"
            className="avatar"
            alt="avatar"
          />
          <div className="icon-verified"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
          className="title"
        >
          Front-End Developer(react).
        </motion.h1>
        <p id="about" className="sub-title">
          I'm a Junior front End developer, seeking a position where I can
          utilize my development and operational skills for organizational
          development to achieve my passion to have high experience and my own
          development approaches.
        </p>
        <div className="all-icons flex">
          <a href="https://twitter.com/mustafaayman980">
            <div className="icon icon-twitter"></div>
          </a>

          <a href="https://www.instagram.com/mustafaayman77?igsh=MWR4a3RoeTB2d3U1bQ%3D%3D&utm_source=qr">
            <div className="icon icon-instagram"></div>
          </a>

          <a href="https://github.com/mustafaayman980">
            <div className="icon icon-github"></div>
          </a>

          <a href="http://linkedin.com/in/mustafa-ayman-747672255">
            <div className="icon icon-linkedin-square"></div>
          </a>
        </div>
      </div>

      <div className="right-section animation ">
        <Lottie style={{}} animationData={developerAnimation} />
      </div>
    </section>
  );
}
