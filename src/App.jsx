import React from "react";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import HeaderLeft from "./components/HeaderLeft";
import Home from "./components/Home";
import Project from "./components/Project";
import SkillsEdu from "./components/SkillsEdu";



function App() {
  return (
    <>
      <div className="flex min-h-screen w-full subpixel-antialiased">
      <HeaderLeft />
      
      <main className="flex-[3]" >
        <Home />
        <Experience />
        <Project />
        <SkillsEdu/>
        {/* <Contact /> */}
      </main>
      </div>
    </>
  );
}

export default App;
