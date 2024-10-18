"use client";

import ProjectCards from "../components/ProjectCards.jsx"

const Styles = {
  container: `
    w-full
    h-full
    bg-everforest-yellow
    text-everforest-back-500
    font-semibold sm:font-bold
    p-8
    pt-4
  `,
};


const About = () => {
  return (
    <div className={Styles.container} id="about">
      <h1 className="text-4xl sm:text-7xl mb-8">
        <span className="text-everforest-red">Welcome,</span>
        <br /> I'm a fullstack programmer with an open mind about how code
        should be written.
      </h1>
      <ProjectCards />
    </div>
  );
};

export default About;
