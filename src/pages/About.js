import React from "react";
import { NavLink } from "react-router-dom";
import { Hero } from "../components/Hero";
import { TeamCard } from "../components/Card";
import AboutImg from "../assets/intro.webp";
import AboutImg2 from "../assets/course.webp";
import AboutImg3 from "../assets/about-course.webp";
import AboutImg4 from "../assets/quest-img.webp";
import FlagImg from "../assets/US.webp";
import AboutImg5 from "../assets/member.webp";

const LangType = [
	{
		img: FlagImg,
		title: "English",
	},
	{
		img: FlagImg,
		title: "France",
	},
	{
		img: FlagImg,
		title: "Germany",
	},
	{
		img: FlagImg,
		title: "Turkish",
	},
];

const AboutSection = [
	{
		img: AboutImg,
		className: "w-full md:order-2",
		title: "The accurate English test with fast results",
		desc: "SPEAK UP is a quick and convenient online test to help higher education institutions and employers check the English levels of individuals and groups of candidates. It combines the latest AI technology with the reliability and quality you expect from Speak Up.",
	},
	{
		img: AboutImg2,
		className: "w-full",
		title: "our path to learning English, step by step",
		desc: "effective and rewarding. Our unique approach encourages continuous progression with a clear path to improve language skills. We have qualifications for schools, general and higher education, and business.",
	},
	{
		img: AboutImg,
		className: "w-full md:order-2",
		title: "Together we inspire learners to go further",
		desc: "Our range of free teaching resources, lesson plans and activities is designed to help you prepare your students for our exams and tests. We also have a range of teaching qualifications, courses and support to help you develop as a teacher.",
	},
];

const TeamMembers = [
	{
		img: AboutImg5,
		name: "Asli Sora",
		title: "President & CEO",
		email: "soraasli@speakup.com",
		facebook: "https://facebook.com",
		linkedin: "https://linkedin.com",
		twitter: "https://twitter.com",
		pinterest: "https://pinterest.com",
	},
	{
		img: AboutImg5,
		name: "Asli Sora",
		title: "President & CEO",
		email: "soraasli@speakup.com",
		facebook: "https://facebook.com",
		linkedin: "https://linkedin.com",
		twitter: "https://twitter.com",
		pinterest: "https://pinterest.com",
	},
	{
		img: AboutImg5,
		name: "Asli Sora",
		title: "President & CEO",
		email: "soraasli@speakup.com",
		facebook: "https://facebook.com",
		linkedin: "https://linkedin.com",
		twitter: "https://twitter.com",
		pinterest: "https://pinterest.com",
	},
];

const About = () => {
	return (
		<div className="flex flex-col gap-10 py-14">
			<Hero
				title="About Speak Up"
				desc="SpeakUp is a ground-breaking app for learning English , Turkish , France words and improving vocabulary for all
        speakers of English, from native speakers to beginner learners.It makes language learning more accessible to
        everyone around the globe."
			/>

			<div className="flex flex-col gap-3 px-10">
				<div>
					Speak Up exists to empower people through languages. Whether you’re
					learning for a new job, new love or simply a new skill, your path to
					fluency starts here.
				</div>
				<div>
					<div className="font-bold">How Speak Up works:</div>
					<ul className="list-disc list-outside pl-5">
						<li className="text-blue-500 font-semibold">Self-paced study</li>
						<li>
							Complete your personalised Study Plan, and get friendly reminders
							when it’s time to learn using our expertly designed lessons.
							Benefit from the smart technology in our Review section, which
							highlights what to revise and when. Self-paced studying works
							because you’re in control.
						</li>
					</ul>
				</div>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-2 place-items-center">
					{LangType.map((data) => (
						<div className="flex flex-col items-center justify-center border border-gray-500 rounded-lg p-2 w-32">
							<img src={data.img} alt="" />
							<div>{data.title}</div>
						</div>
					))}
				</div>
			</div>

			{AboutSection.map((data) => (
				<div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 px-10">
					<img src={data.img} alt="" className={data.className} />
					<div className="flex flex-col items-center justify-center">
						<div className="text-3xl font-bold text-center">{data.title}</div>
						<div className="text-center text-sm md:text-base">{data.desc}</div>
					</div>
				</div>
			))}

			<div className="px-10">
				<div className="font-bold text-lg">Motivate others</div>
				<div>
					Interacting with members of the Speak Up Community enables you to
					learn together by sharing knowledge of your native language. Correct
					the work of others, and have your exercises reviewed in return. Make
					genuine connections through language.
				</div>
				<div className="flex flex-col justify-center items-center">
					<img src={AboutImg3} alt="" className="w-[500px]" />
					<NavLink
						to="/courses"
						className="bg-blue-500 p-2 rounded text-white w-56 text-center"
					>
						Start Learning
					</NavLink>
				</div>
			</div>

			<div className=" gap-4 bg-blue-200 py-10 text-black md:text-white">
				<div className="flex items-center justify-center px-10 gap-4 bg-transparent md:bg-blue-500 h-14 md:h-20 py-4 ">
					<img src={AboutImg4} alt="" className="hidden md:flex md:h-28" />
					<div>
						<div className="font-bold md:text-lg">
							So do you want to improve your English?
						</div>
						<div className="text-sm">
							Practice material and learning resources to help you improve your
							English
						</div>
					</div>
				</div>
			</div>

			<div className="flex flex-col gap-4 px-10 text-justify">
				<div>
					<div className="font-bold text-lg">
						Our products, platforms and websites:
					</div>
					<div>
						platform and website may vary, but our teams are working to enhance
						accessibility throughout. For more detailed information about the
						accessibility of specific products, please refer to the
						documentation linked from our Accessibility Directory below.
					</div>
				</div>
				<div>
					<div className="font-bold text-lg">Reading Experience:</div>
					<ul className="list-disc list-outside pl-5">
						<li>
							Listen to all of the website using a screen reader (e.g. the most
							recent versions of JAWS, NVDA and VoiceOver), including image
							descriptions for images that convey meaning, form elements and
							links with a descriptive label
						</li>
						<li>
							Understand the meaning of images and icons described by meaningful
							alternative text which explains its purpose within the context of
							the content. Some content may not have text alternatives available
							for figures and other graphics. If you encounter an image that
							does not have a text alternative, and you need one, you can
							request alternative text for specific images
						</li>
						<li>
							Understand the function of all form elements. All form fields have
							descriptive labels which explain their meaning and any that are
							mandatory to complete the form.
						</li>
					</ul>
				</div>
				<div>
					<div className="font-bold text-lg">Available formats:</div>
					<div>
						For optimal reading experience we recommend accessing content in
						HTML or EPUB format where available. These formats help to ensure
						text reflows correctly, images include alternative descriptions and
						that tables are appropriately. Where a work is unavailable in a
						suitable format (for example as an EPUB or fully typeset PDF), we
						recommend that disability officers first try obtaining the title
						through our partner.
					</div>
				</div>
			</div>

			<div className="flex flex-col justify-center items-center gap-4 px-10">
				<div className="text-3xl font-bold">Meet Our Team</div>
				<div className="max-w-[700px] text-center">
					Our expert team is made up of creatives with technical knowhow,
					strategists who think outside the box, and developers who push
					innovation
				</div>
				<div className="flex flex-col md:flex-row gap-4">
					{TeamMembers.map((data) => (
						<TeamCard
							img={data.img}
							name={data.name}
							title={data.title}
							email={data.email}
							facebook={data.facebook}
							linkedin={data.linkedin}
							twitter={data.twitter}
							pinterest={data.pinterest}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default About;
