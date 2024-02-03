import "./App.css";
import Hero from "./component/2-hero/Hero";
import Header from "./component/1-header/Header";
import Main from "./component/3-main/Main";
import Contact from "./component/4-contact/Contact";
import Footer from "./component/5-footer/Footer";
import { useState,useEffect } from "react";

function App() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
   window.addEventListener("scroll",()=>{
    if (window.scrollY >200) {
      setScroll(true);
    } else {
      setScroll(false);
      
    }

   })
  }, []);
  return (
    <div id="up" className="App">
      <Header />

      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />
      <a style={{opacity:scroll? 1:0 ,transition:"1s"}} href="#up">
        <button  className="scroll2up icon-keyboard_arrow_up"></button>
      </a>
    </div>
  );
}

export default App;
