import "./main.css";
import { useState } from "react";
import { motion } from "framer-motion";
import {AnimatePresence} from "framer-motion";
const myProjects = [
  { projectTitle: "html&css", category: "html&css", imgPath: "/image/1.jpg" },
  { projectTitle: "html&css", category: "html&css", imgPath: "/image/5.jpg" },
  { projectTitle: "javascript", category: "java", imgPath: "/image/2.jpg" },
  { projectTitle: "javascript", category: "java", imgPath: "/image/6.jpg" },
  { projectTitle: "react", category: "react", imgPath: "/image/3.jpg" },
  { projectTitle: "react", category: "react", imgPath: "/image/4.jpg" },
  { projectTitle: "react", category: "react", imgPath: "/image/7.jpg" },
  { projectTitle: "react", category: "react", imgPath: "/image/8.jpg" },
];
export default function Main() {
  const [Active, setActive] = useState("all");
  const [arr, setArr] = useState(myProjects);
  const clickHandler = (buttonCategory) => {
    setActive(buttonCategory);
    const newArr = myProjects.filter((item) => {
      return item.category === buttonCategory;
    });
    setArr(newArr);
  };
  return (
    <main className="flex">
      <section className="flex left-section">
        <button
          onClick={() => {
            setActive("all");

            setArr(myProjects);
          }}
          className={Active === "all" ? "active" : null}
        >
          all project
        </button>
        <button
          onClick={() => {
            clickHandler("html&css");
          }}
          className={Active === "html&css" ? "active" : null}
        >
          html&css
        </button>
        <button
          onClick={() => {
            clickHandler("java");
          }}
          className={Active === "java" ? "active" : null}
        >
          javascript
        </button>
        <button
          onClick={() => {
            clickHandler("react");
          }}
          className={Active === "react" ? "active" : null}
        >
          react
        </button>
      </section>
      <section id="pro" className="right-section flex">
        <AnimatePresence>
        {arr.map((item) => {
          return (
            <motion.article 
            layout
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 90}}


            
            className="card">
              <img width={266} src={item.imgPath} alt="img project" />
              <div className="box" style={{ width: "266px" }}>
                <h2 className="title">{item.projectTitle}</h2>
                <p className="sub-title">
                  I'm a Junior front End developer, seeking a position where I
                  can utilize my development and operational skills for
                  organizational development to achieve my passion to have high
                  experience and my own development approaches.
                </p>

                <div className="flex icons">
                  <div className="flex" style={{ gap: "11px" }}>
                    <div className="icon-link"></div>
                    <div className="icon-github"></div>
                  </div>
                  <a href="##" className="flex link">
                    more<span className="icon-arrow_forward"></span>
                  </a>
                </div>
              </div>
            </motion.article>
          );
        })}
        </AnimatePresence>
      </section>
    </main>
  );
}
