import React from "react";
import { Hero } from "../components/Hero";
import { ContactForm } from "../components/Form";
import { ContactCard } from "../components/Card";
import { CiMail } from "react-icons/ci";
import { FaLocationDot, FaPhone } from "react-icons/fa6";

const ContactInfo = [
	{
		image: <FaPhone className="w-7 h-7 text-blue-500" />,
		title: "Give us a call",
		info: ["+12 4650 123", "+14 0691 463"],
	},
	{
		image: <FaLocationDot className="w-7 h-7 text-blue-500" />,
		title: "Our main office",
		info: ["Agiou Markou 15,", "Athina 105 60, UK"],
	},
	{
		image: <CiMail className="w-7 h-7 text-blue-500" />,
		title: "Send us email",
		info: "mail@speakup.com",
	},
];

const Contact = () => {
	return (
		<div className="flex flex-col gap-4 md:gap-10 pt-14">
			<Hero
				title="Get in Touch"
				desc="Feel free to contact us anytime, we will get back to you as soon as possible"
			/>
			<div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
				{ContactInfo.map((contact, index) => (
					<ContactCard
						key={index}
						image={contact.image}
						title={contact.title}
						info={contact.info}
					/>
				))}
			</div>
			<ContactForm />
			<div>
				<iframe
					title="Main office"
					className="w-full h-72"
					src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
				></iframe>
			</div>
		</div>
	);
};

export default Contact;
