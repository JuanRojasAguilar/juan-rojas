import Globe from "react-globe.gl";
import Button from "../components/Button";
import { useState } from "react";

const About = () => {
	const [hasCopied, setHasCopied] = useState(false);
	const handleCopy = () => {
		navigator.clipboard.writeText("yo217@hotmail.es");
		setHasCopied(true);
		setTimeout(() => {
			setHasCopied(false);
		}, 2000);
	};
	return (
		<section className="c-space my-20" id="about">
			<div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
				<div className="col-span-1 xl:row-span-3">
					<div className="grid-container">
						<img
							src="/assets/grid1.png"
							alt="grid-1"
							className="w-full sm:h-[276px] h-fit object-contain"
						/>
						<p className="grid-headtext">Hi I&apos;m Juan</p>
						<p className="grid-subtext">
							With over 3 years of experience, I developed skills in frontend
							and backend technologies.
						</p>
					</div>
					<div></div>
				</div>
				<div className="col-span-1 xl:row-span-3">
					<div className="grid-container">
						<img
							src="/assets/grid2.png"
							alt="grid-2"
							className="w-full sm:h-[276px] h-fit object-contain"
						/>
						<div>
							<p className="grid-headtext">Tech Stack</p>
							<p className="grid-subtext">
								I specialize in JavaScript with a focus on the React ecosystem,
								and Java using SpringBoot for backend development.
							</p>
						</div>
					</div>
				</div>
				<div className="col-span-1 xl:row-span-4">
					<div className="grid-container">
						<div className="rounded-full w-full sm:h-[326px] h-fit flex justify-center items-center">
							<Globe
								height={326}
								width={326}
								backgroundColor="rgba(0,0,0,0)"
								backgroundImageOpacity={0.5}
								showAtmosphere
								showGraticulesa
								globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
								bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
								labelsData={[
									{
										lat: 9,
										lng: -72,
										text: "Hello!",
										color: "white",
										size: 100,
									},
								]}
							/>
						</div>
						<div>
							<p className="grid-headtext">
								I work remotely across most timezones.
							</p>
							<p className="grid-subtext">
								Based on South Americas. (Find me in the globe!)
								<a href="#contact">
								<Button
									name={"Contact Me"}
									isBeam
									containerClass={"w-full mt-10"}
								/>

								</a>
							</p>
						</div>
					</div>
				</div>
				<div className="xl:col-span-2 xl:row-span-3">
					<div className="grid-container">
						<img
							src="/assets/grid3.png"
							alt="grid-3"
							className="w-full sm:h-[266px] h-fit object-contain"
						/>
						<div>
							<p className="grid-headtext">The Drive To Code</p>
							<p className="grid-subtext">
								I love learning new things about how the world around us works.
								Coding is not only my profession - it&apos;s my passion.
							</p>
						</div>
					</div>
				</div>
				<div className="xl:col-span-1 xl:row-span-2">
					<div className="grid-container">
						<img
							src="/assets/grid4.png"
							alt="grid-4"
							className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
						/>
						<div className="space-y-2">
							<p className="grid-subtext text-center">Contact Me</p>
							<div className="copy-container" onClick={handleCopy}>
								<img
									src={hasCopied ? "/assets/tick.svg " : "/assets/copy.svg"}
									alt="copy"
								/>
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">yo217@hotmail.es</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
