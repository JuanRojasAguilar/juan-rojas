export const navLinks = [
	{
		id: 1,
		name: "Home",
		href: "#",
	},
	{
		id: 2,
		name: "About",
		href: "#about",
	},
	{
		id: 3,
		name: "Work",
		href: "#work",
	},
	{
		id: 4,
		name: "Contact",
		href: "#contact",
	},
];

export const clientReviews = [
	{
		id: 1,
		name: "Emily Johnson",
		position: "Marketing Director at GreenLeaf",
		img: "assets/review1.png",
		review:
			"Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
	},
	{
		id: 2,
		name: "Mark Rogers",
		position: "Founder of TechGear Shop",
		img: "assets/review2.png",
		review:
			"Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.",
	},
	{
		id: 3,
		name: "John Dohsas",
		position: "Project Manager at UrbanTech ",
		img: "assets/review3.png",
		review:
			"I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
	},
	{
		id: 4,
		name: "Ether Smith",
		position: "CEO of BrightStar Enterprises",
		img: "assets/review4.png",
		review:
			"Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
	},
];

let notUsedProjects = [
	{
		title: "CarePulse - Health Management System",
		desc: "An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.",
		subdesc:
			"With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.",
		href: "https://www.youtube.com/watch?v=lEflo_sc82g",
		texture: "/textures/project/project3.mp4",
		logo: "/assets/project-logo3.png",
		logoStyle: {
			backgroundColor: "#60f5a1",
			background:
				"linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
			border: "0.2px solid rgba(208, 213, 221, 1)",
			boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
		},
		spotlight: "/assets/spotlight3.png",
		tags: [
			{
				id: 1,
				name: "React.js",
				path: "/assets/react.svg",
			},
			{
				id: 2,
				name: "TailwindCSS",
				path: "assets/tailwindcss.png",
			},
			{
				id: 3,
				name: "TypeScript",
				path: "/assets/typescript.png",
			},
			{
				id: 4,
				name: "Framer Motion",
				path: "/assets/framer.png",
			},
		],
	},
	{
		title: "Horizon - Online Banking Platform",
		desc: "Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.",
		subdesc:
			"Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.",
		href: "https://www.youtube.com/watch?v=PuOVqP_cjkE",
		texture: "/textures/project/project4.mp4",
		logo: "/assets/project-logo4.png",
		logoStyle: {
			backgroundColor: "#0E1F38",
			border: "0.2px solid #0E2D58",
			boxShadow: "0px 0px 60px 0px #2F67B64D",
		},
		spotlight: "/assets/spotlight4.png",
		tags: [
			{
				id: 1,
				name: "React.js",
				path: "/assets/react.svg",
			},
			{
				id: 2,
				name: "TailwindCSS",
				path: "assets/tailwindcss.png",
			},
			{
				id: 3,
				name: "TypeScript",
				path: "/assets/typescript.png",
			},
			{
				id: 4,
				name: "Framer Motion",
				path: "/assets/framer.png",
			},
		],
	},
	{
		title: "Imaginify - AI Photo Manipulation App",
		desc: "Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.",
		subdesc:
			"Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.",
		href: "https://www.youtube.com/watch?v=Ahwoks_dawU",
		texture: "/textures/project/project5.mp4",
		logo: "/assets/project-logo5.png",
		logoStyle: {
			backgroundColor: "#1C1A43",
			border: "0.2px solid #252262",
			boxShadow: "0px 0px 60px 0px #635BFF4D",
		},
		spotlight: "/assets/spotlight5.png",
		tags: [
			{
				id: 1,
				name: "React.js",
				path: "/assets/react.svg",
			},
			{
				id: 2,
				name: "TailwindCSS",
				path: "assets/tailwindcss.png",
			},
			{
				id: 3,
				name: "TypeScript",
				path: "/assets/typescript.png",
			},
			{
				id: 4,
				name: "Framer Motion",
				path: "/assets/framer.png",
			},
		],
	},
];

export const myProjects = [
	{
		title: "SpringBoot Company Services & Inventory Manager",
		desc: "An App designed to administrate different services given by a company, it also tracks the inventory used and let users register, all powered in the backed by Springboot using Spring Security we ensure a Stateless PostgreSQL environment. It also uses JWT encryption to ensure maximum security end-to-end. Uses NextJs 15 on the front-end so it's able to handle higly interactive interfaces",
		subdesc: "Built on SpringBoot, Java 17, NextJs 15, Tailwind CSS",
		href: "https://www.github.com/juanrojasaguilar/companies-management-system",
		texture: "/textures/project/project1.mp4",
		logo: "/assets/springboot.svg",
		logoStyle: {
			backgroundColor: "#2A1816",
			border: "0.2px solid #36201D",
			boxShadow: "0px 0px 60px 0px #AA3C304D",
		},
		spotlight: "/assets/spotlight1.png",
		tags: [
			{
				id: 1,
				name: "React.js",
				path: "/assets/react.svg",
			},
			{
				id: 2,
				name: "TailwindCSS",
				path: "assets/tailwindcss.png",
			},
			{
				id: 3,
				name: "Framer Motion",
				path: "/assets/framer.png",
			},
			{
				id: 4,
				name: "Spring Boot",
				path: "/assets/springboot-green.svg",
			},
		],
	},
	{
		title: "BetPlay League - Python App",
		desc: "A python standalone desktop application designed to keep track of the matches, each team member, each team points and also asign points based on especific bussiness logic. This app uses JSON files in the disk if a backup is needed.",
		subdesc:
			"A Point system administrator designed for small or medium leagues, its a standalone app that uses Python3",
		href: "https://www.github.com/juanrojasaguilar/proyectoSuperExperto",
		texture: "/textures/project/project2.mp4",
		logo: "/assets/project-logo2.png",
		logoStyle: {
			backgroundColor: "#13202F",
			border: "0.2px solid #17293E",
			boxShadow: "0px 0px 60px 0px #2F6DB54D",
		},
		spotlight: "/assets/spotlight2.png",
		tags: [
			{
				id: 1,
				name: "React.js",
				path: "/assets/python.png",
			},
			{
				id: 2,
				name: "Bash",
				path: "/assets/bash.png"
			}
		],
	},
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
	return {
		deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
		deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
		cubePosition: isSmall
			? [4, -5, 0]
			: isMobile
			? [5, -5, 0]
			: isTablet
			? [5, -5, 0]
			: [9, -5.5, 0],
		reactLogoPosition: isSmall
			? [3, 4, 0]
			: isMobile
			? [5, 4, 0]
			: isTablet
			? [5, 4, 0]
			: [10, 2, 0],
		ringPosition: isSmall
			? [-5, 7, 0]
			: isMobile
			? [-10, 10, 0]
			: isTablet
			? [-12, 10, 0]
			: [-24, 5, 0],
		targetPosition: isSmall
			? [-5, -10, -10]
			: isMobile
			? [-9, -10, -10]
			: isTablet
			? [-11, -7, -10]
			: [-13, -13, -10],
	};
};

export const workExperiences = [
	{
		id: 1,
		name: "Shonny Stilos",
		pos: "Software Engineer",
		duration: "2024",
		title:
			"As a systems engineer I was tasked to lead the first steps of a local hair saloon into the digital world setting up Instagram pages and contact, a simple Web App that uses Angular and Firebase that allows to manage customers and their respective training in using the platform.",
		icon: "/assets/globe-info.svg",
		animation: "victory",
	},
	{
		id: 2,
		name: "Internaut",
		pos: "Web Developer",
		duration: "2022 - 2023",
		title: "As part of a B2B bussiness that delivered a great tool to increase work environments I had the oportunity to develop and deploy the achivements system for team managers to deliver encouragement in a more especial way to their work team.",
		icon: "/assets/astronaut.svg",
		animation: "clapping",
	},
];
