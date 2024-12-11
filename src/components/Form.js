//Login, SignUp (Auth)
//ContactForm (Contact)
import React from "react";

const Login = () => {
	return (
		<div className="flex flex-col gap-2">
			<div className="text-3xl font-bold">Login</div>
			<form className="flex flex-col gap-2 md:gap-4">
				<div className="flex flex-col">
					<label>Email or Username</label>
					<input
						type="text"
						placeholder="Enter Your Email or Username"
						className="rounded border border-gray-300 w-64 md:w-72 p-2"
					/>
				</div>
				<div className="flex flex-col">
					<label>Password</label>
					<input
						type="password"
						placeholder="Enter your Password"
						className="rounded border border-gray-300 w-64 md:w-72 p-2"
					/>
				</div>
				<button
					type="submit"
					className="bg-blue-500 p-2 rounded text-white font-semibold mt-4"
				>
					Login
				</button>
			</form>
		</div>
	);
};

export default Login;

const Signup = () => {
	return (
		<div className="flex flex-col gap-2">
			<div className="text-3xl font-bold">Sign Up</div>
			<form className="flex flex-col gap-2 md:gap-4">
				<div className="flex flex-col">
					<label>Email</label>
					<input
						type="text"
						placeholder="Enter Your Email"
						className="rounded border border-gray-300 w-64 md:w-72 p-2"
					/>
				</div>
				<div className="flex flex-col">
					<label>Password</label>
					<input
						type="password"
						placeholder="Enter your Password"
						className="rounded border border-gray-300 w-64 md:w-72 p-2"
					/>
				</div>
				<div>
					<label htmlFor="confirm-password" className="block text-gray-600">
						Confirm Password
					</label>
					<input
						type="password"
						className="rounded border border-gray-300 w-64 md:w-72 p-2"
						placeholder="Confirm your password"
					/>
				</div>
				<button
					type="submit"
					className="bg-blue-500 p-2 rounded text-white font-semibold mt-4"
				>
					Sign Up
				</button>
			</form>
		</div>
	);
};

export { Signup };

const ContactForm = () => {
	return (
		<div className="flex flex-col items-center">
			<div className="flex flex-col gap-2 items-center shadow shadow-black rounded-lg py-8 px-4">
				<div className="text-lg font-bold">How We May Help You?</div>
				<form className="flex flex-col gap-2 items-center">
					<div className="flex flex-col md:flex-row gap-2 w-72 md:w-full">
						<input
							type="text"
							placeholder="Name"
							className="border border-blue-500 p-2 md:w-[246px] rounded bg-gray-100"
						/>
						<input
							type="text"
							placeholder="Email"
							className="border border-blue-500 p-2 md:w-[246px] rounded bg-gray-100"
						/>
					</div>
					<input
						type="text"
						placeholder="Subject"
						className="border border-blue-500 p-2 w-72 md:w-[500px] rounded bg-gray-100"
					/>
					<textarea
						rows="10"
						placeholder="Write your problems"
						className="border border-blue-500 p-2 w-72 md:w-[500px] rounded bg-gray-100"
					></textarea>
					<button
						type="submit"
						className="bg-blue-500 text-white w-72 rounded p-2"
					>
						Send Message
					</button>
				</form>
			</div>
		</div>
	);
};

export { ContactForm };
