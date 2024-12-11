import React from "react";
import HomeHero from "../components/Hero";
import IntroImg from "../assets/intro.webp";
import Card, { RatingCard, PricingCard } from "../components/Card";
import CourseImg from "../assets/course.webp";
import { NavLink } from "react-router-dom";

const IntroSection = [
	{
		img: IntroImg,
		className: "",
		title: "You can learn online and sit in class",
		desc: "Speak Up is a quick and conveniet online test to help higher education institutions and employers check the English levels of individuals and groups of candidates.",
	},
	{
		img: IntroImg,
		className: "md:order-2",
		title: "Together we inspire learners to go further",
		desc: "Try our quick, free online tests to find out what your level of English is, and which Cambridge English Qualification might be best for you. At the end you will get recommendations on how to improve your English.",
	},
];

const CourseCard = [
	{
		image: CourseImg,
		title: "Learning historical words and sentences",
		lesson: "6",
		student: "198",
		level: "Advanced",
		link: "/courses",
	},
	{
		image: IntroImg,
		title: "Learning historical words and sentences",
		lesson: "6",
		student: "198",
		level: "Advanced",
		link: "/courses",
	},
	{
		image: CourseImg,
		title: "Learning historical words and sentences",
		lesson: "6",
		student: "198",
		level: "Advanced",
		link: "/courses",
	},
	{
		image: IntroImg,
		title: "Learning historical words and sentences",
		lesson: "6",
		student: "198",
		level: "Advanced",
		link: "/courses",
	},
];

const Rating = [
	{
		rating: 5,
		comment:
			"I just had an honest to good conversation in French with a friend in Quebec! I stumbled a bit, but we only used a translator very rarely, and it's because of Speak Up!",
		user: "Jack Watson",
		date: "14 days",
	},
	{
		rating: 4,
		comment:
			"I just had an honest to good conversation in French with a friend in Quebec! I stumbled a bit, but we only used a translator very rarely, and it's because of Speak Up!",
		user: "Jack Watson",
		date: "14 days",
	},
	{
		rating: 5,
		comment:
			"I just had an honest to good conversation in French with a friend in Quebec! I stumbled a bit, but we only used a translator very rarely, and it's because of Speak Up!",
		user: "Jack Watson",
		date: "14 days",
	},
];

const Pricing = [
	{
		title: "Free",
		desc: "Limited access",
		price: "Free",
		access: [
			"Every first chapter free ",
			"Selection of free courses (4)",
			"Free professional profile and job board access",
			"Upgrade to earn certificates",
		],
		link: "/",
	},
	{
		title: "Premium",
		desc: "For individuals",
		price: "$80.99/month",
		access: [
			"Access our full content library",
			"Shareable certificate upon completion",
			"Access to course materials",
			"Go from zero to job ready",
			"Graded assignments and exams",
			"Course support",
			"More ways to learn to code",
		],
		link: "/",
	},
	{
		title: "Teams",
		desc: "For teams of 2 and up",
		price: "$139/month",
		access: [
			"Everything in premium plus",
			"Access to course materials",
			"Manage your group",
			"View learning activity and track progress",
		],
		link: "/",
	},
];

const Home = () => {
	return (
		<div className="flex flex-col gap-10 bg-gray-50 py-14">
			<div>
				<div className="flex items-center justify-center text-center text-yellow-300 bg-blue-950 ">
					Get 50% off Speakup Premium & unlock new language superpowers!
				</div>

				<HomeHero />
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-4 px-10">
				<div className="flex flex-col items-center justify-center shadow bg-white rounded-lg shadow-black p-5 md:p-10">
					<div className="text-3xl text-center text-blue-500 font-bold">
						You can learn online and sit in Your Home
					</div>
					<div className="text-justify text-sm md:text-base">
						Speak Up is a quick and convenient online test to help higher
						education institutions and employers check the English levels of
						individuals and groups of candidates.
					</div>
				</div>
				<div className="w-full md:w-4/5">
					<img src={IntroImg} alt="" className="" />
					<div className="flex flex-col gap-2">
						<div className="text-3xl font-bold">
							You Speak Up To 6 Month Faster Than Now
						</div>
						<div className="text-justify text-sm md:text-base">
							Our range of free teaching resources, lesson plans and activities
							is designed to help you prepare your students for our exams and
							tests. We also have a range of teaching qualifications, courses
							and support to help you as a teacher.
						</div>
						<div className="bg-white border border-black rounded-md p-2">
							<div className="text-sm">Fun fact:</div>
							<div className="text-xs">
								Did you know remember 95% of a message when it's watched vs only
								10% of what you read try it.
							</div>
						</div>
					</div>
				</div>
			</div>

			{IntroSection.map((data) => (
				<div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 px-10">
					<img src={data.img} alt="" className={data.className} />
					<div>
						<div className="text-3xl font-bold">{data.title}</div>
						<div className="text-justify text-sm md:text-base">{data.desc}</div>
					</div>
				</div>
			))}

			<div className="flex flex-col gap-4 px-10">
				<div className="text-3xl font-bold">Popular Course</div>
				<div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">
					{CourseCard.map((data) => (
						<Card
							image={data.image}
							title={data.title}
							lesson={data.lesson}
							student={data.student}
							level={data.level}
							link={data.link}
						/>
					))}
				</div>
				<div className="flex justify-center items-center">
					<NavLink
						to="/courses"
						className="text-center font-bold border-2 border-blue-500 w-64 p-2 rounded hover:bg-blue-500 hover:text-white"
					>
						See All Courses
					</NavLink>
				</div>
			</div>

			<div className="flex flex-col md:flex-row gap-2 md:gap-8 lg:gap-32 p-10 items-center bg-blue-100 justify-center">
				<div className="md:w-96 lg:w-[500px]">
					<div className="hidden md:flex text-2xl font-bold">
						Test Your English
					</div>
					<div className="font-semibold text-sm md:text-base text-justify">
						Try our quick, free online tests to find out what your level of
						English is, and which SpeakUp English Qualification might be best
						for you. There are tests suited for every level.
					</div>
				</div>
				<NavLink
					to="/"
					className="bg-blue-500 rounded py-2 px-10 md:px-16 text-white "
				>
					Test Your English
				</NavLink>
			</div>

			<div className="flex flex-col md:flex-row gap-2 md:gap-10 px-10">
				<img src={IntroImg} alt="" className="md:w-1/2 order-2 md:order-1" />
				<div className="flex flex-col gap-1 md:gap-3 order-1 md:order-2">
					<div className="text-3xl font-bold">About Us</div>
					<div className="text-lg font-semibold">Online Group Courses</div>
					<div className="text-justify">
						The learning experiences we create could only come from Cambridge.
						Our solutions for teaching and assessment are enpowering millions of
						learners everywhre and are built on unique insights from our
						research, expertise and Speak Up is a quick and convenient online
						test to help higher education institutions and employers and group
						of candidates.
					</div>
				</div>
			</div>

			<div className="flex flex-col justify-center items-center gap-4 px-10 text-center">
				<div>
					<div className="text-3xl font-bold">
						Here's what others love about Speak Up
					</div>
					<div>
						Our strong community are all learning together. Here's what some of
						them say.....
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{Rating.map((data, index) => (
						<div
							className={`${index > 1 ? "hidden lg:block" : ""}`}
							key={index}
						>
							<RatingCard
								rating={data.rating}
								comment={data.comment}
								user={data.user}
								date={data.date}
							/>
						</div>
					))}
				</div>
			</div>

			<div className="flex flex-col items-center justify-center px-10">
				<div className="text-3xl font-bold">Pricing Plan</div>
				<div className="mb-4 text-center">
					Choose the right pricing for you and get started
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-10">
					{Pricing.map((data) => (
						<PricingCard
							title={data.title}
							desc={data.desc}
							price={data.price}
							access={data.access}
							link={data.link}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Home;
