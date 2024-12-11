import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.webp";
import { FaBars, FaUser } from "react-icons/fa";

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

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuRef = useRef(null);

	const toggleMenu = () => {
		setIsMenuOpen((prevState) => !prevState);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	useEffect(() => {
		const handleClickOutside = (event) => {
			// Close menu if clicking outside of it or on the FaBars icon
			if (menuRef.current && !menuRef.current.contains(event.target)) {
				closeMenu();
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div className="fixed w-full h-14 top-0 flex items-center justify-between px-10 bg-gray-50">
			{/* mobile view */}
			<div className="md:hidden">
				<FaBars className="" onClick={toggleMenu} />
				{isMenuOpen && (
					<div
						ref={menuRef}
						className="absolute top-14 left-0 w-full bg-gray-50 flex flex-col items-start gap-2 px-10 p-4"
					>
						{NavItem.map((data) => (
							<NavLink
								key={data.link}
								to={data.link}
								className={({ isActive }) =>
									isActive
										? "font-semibold text-lg text-blue-500 underline underline-offset-4"
										: "font-semibold text-lg hover:text-blue-500"
								}
								onClick={closeMenu} // Close menu on link click
							>
								{data.name}
							</NavLink>
						))}
					</div>
				)}
			</div>

			<NavLink to="/">
				<img src={Logo} alt="Logo" className="h-10" />
			</NavLink>

			<div className="hidden md:flex gap-10 font-bold text-lg">
				{NavItem.map((data) => (
					<NavLink
						key={data.link}
						to={data.link}
						className={
							({ isActive }) =>
								isActive
									? "text-blue-500 underline underline-offset-8" // Active styles
									: "hover:text-blue-500" // Default styles
						}
					>
						{data.name}
					</NavLink>
				))}
			</div>

			<NavLink to="/auth">
				<FaUser className="hover:text-blue-500" />
			</NavLink>
		</div>
	);
};

export default Navbar;
