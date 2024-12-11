import React from "react";
import { NavLink } from "react-router-dom";
import {
	FaFacebook,
	FaTwitter,
	FaPinterest,
	FaPhone,
	FaMapMarkerAlt,
} from "react-icons/fa";
import { SiFreelancer } from "react-icons/si";
import { IoMail } from "react-icons/io5";

const SocialMedia = [
	{
		img: <FaFacebook className="w-6 h-6" />,
		link: "https://facebook.com",
	},
	{
		img: <FaTwitter className="w-6 h-6" />,
		link: "https://twitter.com",
	},
	{
		img: <FaPinterest className="w-6 h-6" />,
		link: "https://pinterest.com",
	},
	{
		img: <SiFreelancer className="w-6 h-6" />,
		link: "https://freelancer.com",
	},
];

// const CourseLang = [
// 	{
// 		name: "",
// 		link: "",
// 	},
// 	{
// 		name: "",
// 		link: "",
// 	},
// 	{
// 		name: "",
// 		link: "",
// 	},
// ];

const NavItem = [
	{
		name: "Home",
		link: "/",
	},
	{
		name: "Courses",
		link: "/courses",
	},
	{
		name: "About Us",
		link: "/about",
	},
	{
		name: "Contact Us",
		link: "/contact",
	},
];

const Footer = () => {
	return (
		<div className="flex flex-col gap-4 pt-5 pb-2 px-10 text-white bg-blue-500">
			<div className="flex flex-col md:flex-row gap-5 justify-between">
				<div className="flex flex-col gap-2 md:w-1/4">
					<div className="text-sm text-justify">
						Fluency is nothing more than mastering the 100 most important
						real-life conversations
					</div>
					<div className="flex gap-4">
						{SocialMedia.map((data) => (
							<a href={data.link}>{data.img}</a>
						))}
					</div>
				</div>
				<div>
					<div className="font-bold text-lg">Speak up Courses</div>
					<div></div>
				</div>
				<div>
					<div className="font-bold text-lg">Pages</div>
					<div className="flex flex-col text-sm gap-1">
						{NavItem.map((data) => (
							<NavLink to={data.link}>{data.name}</NavLink>
						))}
					</div>
				</div>
				<div>
					<div className="font-bold text-lg">Contact Information</div>
					<div className="flex flex-col gap-2 text-sm">
						<div className="flex gap-2 items-center">
							<FaPhone />
							<p>+34933478486</p>
						</div>
						<div className="flex gap-2 items-center">
							<IoMail />
							<p>info@speakup.we</p>
						</div>
						<div className="flex gap-2 items-center">
							<FaMapMarkerAlt />
							<p>barcelona, C/ de sardenya</p>
						</div>
					</div>
				</div>
			</div>

			<span className="border-b"></span>
			<div className="flex flex-col md:flex-row justify-between text-xs">
				<div className="font-bold">2023 Speakup. All Rights Reserved.</div>
				<div className="flex justify-between gap-4">
					<NavLink to="/terms">Terms & Conditions</NavLink>
					<NavLink to="/policy">Privacy Policy</NavLink>
				</div>
			</div>
		</div>
	);
};

export default Footer;
