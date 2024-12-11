// Card, RatingCard, PricingCard (Home)
// ContactCard (Contact)
// TeamCard (About)
import React from "react";
import { NavLink } from "react-router-dom";
import { FaBook, FaUser, FaTrophy, FaStar } from "react-icons/fa";
import { VscPassFilled } from "react-icons/vsc";
import { FaFacebook, FaLinkedin, FaTwitter, FaPinterest } from "react-icons/fa";

const Card = ({ image, title, lesson, student, level, link }) => {
	return (
		<div className="flex flex-col gap-1 w-72 border border-gray-400 p-2 rounded">
			<img src={image} alt="" />
			<div className="font-bold">{title}</div>
			<div className="flex justify-between text-gray-500 pb-4 text-sm">
				<div className="flex items-center  gap-1">
					<FaBook />
					<div>Lesson: {lesson}</div>
				</div>
				<div className="flex items-center  gap-1">
					<FaUser />
					<div>Student: {student}</div>
				</div>
				<div className="flex items-center  gap-1">
					<FaTrophy />
					<div>{level}</div>
				</div>
			</div>
			<NavLink
				to={link}
				className="bg-blue-500 text-white p-2 rounded w-32 font-bold text-center
      "
			>
				Start Course &gt;
			</NavLink>
		</div>
	);
};

export default Card;

const RatingCard = ({ rating, comment, user, date }) => {
	return (
		<div className="flex flex-col justify-center items-center shadow shadow-black w-72 p-2 text-center rounded">
			<div className="flex text-yellow-400">
				{Array.from({ length: 5 }, (_, index) => (
					<FaStar
						key={index}
						className={index < rating ? "" : "text-gray-300"}
					/>
				))}
			</div>
			<div>{comment}</div>
			<div className="flex gap-2 text-sm">
				<div className="font-bold">{user}</div>
				<div>{date}</div>
			</div>
		</div>
	);
};

export { RatingCard };

const PricingCard = ({ title, desc, price, access, link }) => {
	return (
		<div className="flex flex-col border rounded border-black py-4 px-4 w-72 gap-2">
			<div className="text-3xl font-bold">{title}</div>
			<div>{desc}</div>
			<div className="bg-blue-200 p-2 rounded font-bold text-xl">{price}</div>
			{access.map((item) => (
				<div className="flex items-center gap-2">
					<VscPassFilled className="text-blue-500" />
					<div className="text-sm">{item}</div>
				</div>
			))}
			<NavLink
				to={link}
				className="text-center text-white font-bold rounded-lg bg-blue-500 p-2 mt-4"
			>
				Get Started
			</NavLink>
		</div>
	);
};

export { PricingCard };

const ContactCard = ({ image, title, info }) => {
	return (
		<div className="flex flex-col items-center py-5 border border-blue-500 rounded-lg w-36 h-36">
			<div className="pb-2">{image}</div>
			<div className="font-bold">{title}</div>
			{Array.isArray(info) ? (
				info.map((line, index) => <div key={index}>{line}</div>)
			) : (
				<div>{info}</div>
			)}
		</div>
	);
};

export { ContactCard };

const TeamCard = ({
	img,
	name,
	title,
	email,
	facebook,
	linkedin,
	twitter,
	pinterest,
}) => {
	return (
		<div className="flex flex-col justify-center border border-black p-4 w-52 rounded-lg">
			<img src={img} alt="" className="w-48" />
			<div>{name}</div>
			<div>{title}</div>
			<div>{email}</div>
			<div className="flex items-center justify-center gap-2">
				<a href={facebook}>
					<FaFacebook className="text-blue-500 w-6 h-6" />
				</a>
				<a href={linkedin}>
					<FaLinkedin className="text-blue-800 w-6 h-6" />
				</a>
				<a href={twitter}>
					<FaTwitter className="text-blue-500 w-6 h-6" />
				</a>
				<a href={pinterest}>
					<FaPinterest className="text-red-500 w-6 h-6" />
				</a>
			</div>
		</div>
	);
};

export { TeamCard };
