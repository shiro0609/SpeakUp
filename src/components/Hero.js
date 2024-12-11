import React from "react";
import { NavLink } from "react-router-dom";
import HeroImg from "../assets/hero.webp";

const HomeHero = () => {
	return (
		<div className="flex flex-col md:flex-row items-center justify-center gap-2 p-10 bg-gradient-to-r from-blue-700 to-blue-500 ">
			<div className="flex flex-col items-center md:items-start text-center md:text-start text-white gap-2">
				<div className="text-4xl font-extrabold">
					Studying Online is now much easier
				</div>
				<div className="">
					Speak Up is an interesting platform that will teach you in more an
					interactive way
				</div>
				<NavLink
					to="/courses"
					className="bg-yellow-500 p-2 w-32 text-center rounded-md"
				>
					Let's start
				</NavLink>
			</div>
			<img src={HeroImg} alt="" className="md:w-1/2" />
		</div>
	);
};

export default HomeHero;

const Hero = ({ title, desc }) => {
	return (
		<div className="flex flex-col h-64 justify-center px-10 bg-blue-500 text-white">
			<div className="text-3xl font-bold">{title}</div>
			<div className=" text-justify max-w-[600px]">{desc}</div>
		</div>
	);
};

export { Hero };
