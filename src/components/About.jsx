"use client";

import { Tabs, Tab } from "@nextui-org/tabs";
import { Card, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import GitHubIcon from "@mui/icons-material/GitHub";

import JavaImage from "../assets/javaproject.png";
import PythonImage from "../assets/pythonproject.png";

const Styles = {
  container: `
    w-full
    h-full
    bg-everforest-yellow
    text-everforest-back-500
    font-semibold sm:font-bold
    p-12
  `,
  cardFooter: `
    justify-between
    before:bg-white/10 
    border-white/20 border-1 
    overflow-hidden py-1 absolute 
    before:rounded-xl rounded-large 
    bottom-1 w-[calc(100%_-_8px)] 
    shadow-small ml-1 z-10
  `
};

const projects = [
  {
    key: "java",
    title: "Java",
    projectImage: JavaImage,
    alt: "company management java project",
    projectSrc:
      "https://github.com/JuanRojasAguilar/companies-management-system",
  },
  {
    key: "python",
    title: "Python",
    projectImage: PythonImage,
    alt: "sports league point app in python",
    projectSrc: "https://github.com/JuanRojasAguilar/proyectoSuperExperto.git",
  },
];

const About = () => {
  return (
    <div className={Styles.container} id="about">
      <h1 className="text-4xl sm:text-7xl mb-8">
        <span className="text-everforest-red">Welcome,</span>
        <br /> I'm a fullstack programmer with an open mind about how code
        should be written.
      </h1>
      <Tabs
        aria-label="Options"
        size="lg"
        classNames={{
          cursor: "bg-everforest-purple",
          tabList: "bg-everforest-back-500",
          tabContent:
            "text-lg group-data-[selected=true]:text-everforest-back-500",
        }}
      >
        {projects.map(({ key, title, projectImage, alt, projectSrc }) => (
          <Tab key={key} title={title} className="sm:flex">
            <Card isFooterBlurred radius="lg" className="border-none w-full sm:w-max">
              <Image
                className="w-full h-[240px] sm:h-[400px]"
                alt={alt}
                src={projectImage}
              />
              <a href={projectSrc} target="_blank">
                <CardFooter className={Styles.cardFooter}>
                  <p className="text-md text-everforest-gray-3">See Code</p>
                  <Button
                    className="text-tiny text-white bg-black/20"
                    variant="flat"
                    color="default"
                    radius="lg"
                    size="sm"
                  >
                    <GitHubIcon />
                  </Button>
                </CardFooter>
              </a>
            </Card>
            <div className="hidden sm:inline w-1/3">
              <h1 className="text-7xl pl-20 text-pretty text-everforest-red">{alt}</h1>
            </div>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};

export default About;
