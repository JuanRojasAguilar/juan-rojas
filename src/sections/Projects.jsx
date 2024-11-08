import { Suspense, useState } from "react";
import { myProjects } from "../constants/index";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import DemoComputer from "../components/DemoComputer";

const Projects = () => {
  const projectCount = myProjects.length;
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
	const currentProject = myProjects[selectedProjectIndex];
  const handleNavigation = (direction) => {
    setSelectedProjectIndex(() => {
      switch(direction) {
        case "previous":
          return selectedProjectIndex === 0 ? projectCount - 1 : selectedProjectIndex - 1;
        case "next":
          return selectedProjectIndex === projectCount - 1 ? 0 : selectedProjectIndex + 1;
        default:
          console.warn("Accion no permitida, que estas haciendo?");
          break;
      }
    });
  }
	return (
		<section className="c-space my-20">
			<p className="head-text">My Work</p>
			<div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
				<div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
					<div className="absolute top-2 right-0">
						<img
							src={currentProject.spotlight}
							alt="spotlight"
							className="w-full h-96 object-cover rounded-xl"
						/>
					</div>
					<div
						className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
						style={currentProject.logoStyle}
					>
						<img
							src={currentProject.logo}
							alt="logo"
							className="w-10 h-10 shadow-sm"
						/>
					</div>
					<div className="flex flex-col gap-5 text-white-600 my-5">
						<p className="text-white text-2xl font-semibold animatedText">
							{currentProject.title}
						</p>
						<p className="animatedText">{currentProject.desc}</p>
						<p className="animatedText">{currentProject.subdesc}</p>
					</div>
					<div className="flex items-center justify-between flex-wrap gap-5">
						<div className="flex items-center gap-3">
							{currentProject.tags.map((tag, index) => (
								<div key={index} className="tech-logo">
									<img src={tag.path} alt={tag.name} />
								</div>
							))}
						</div>
						<a
							href={currentProject.href}
							target="_blank"
							rel="noreferrer"
							className="flex items-center gap-2 cursor-pointer text-white-600"
						>
							<p className="">Check Live Site</p>
							<img src="/assets/arrow-up.png" className="w-3 h-3" alt="arrow" />
						</a>
					</div>
          <div className="flex justify-between items-center mt-7">
              <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
                <img src="/assets/left-arrow.png" alt="left-arrow" className="w-4 h-4" />
              </button>
              <button className="arrow-btn" onClick={() => handleNavigation('next')}>
                <img src="/assets/right-arrow.png" alt="right-arrow" className="w-4 h-4" />
              </button>
          </div>
				</div>
        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
          <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]}/>
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                  <DemoComputer texture={currentProject.texture}/>
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI/2} enableZoom={false} enablePan={false}/>
          </Canvas>
        </div>
			</div>
		</section>
	);
};

export default Projects;