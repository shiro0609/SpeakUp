import React, { useState } from "react";
import AuthImg from "../assets/login.webp";
import Login, { Signup } from "../components/Form";

const Auth = () => {
	const [isLogin, setIsLogin] = useState(true);

	const toggleForm = () => {
		setIsLogin(!isLogin);
	};

	return (
		<div className="flex flex-col md:flex-row items-center justify-center md:min-h-screen px-10 py-16">
			<img
				src={AuthImg}
				alt=""
				className="w-full md:w-96 h-48 md:h-[450px] object-top object-cover rounded-t-2xl md:rounded-none md:rounded-s-2xl"
			/>
			<div className="w-full md:w-96 bg-blue-100 md:h-[450px] flex flex-col justify-center items-center rounded-e-2xl p-5">
				{isLogin ? <Login /> : <Signup />}
				<button
					onClick={toggleForm}
					className="mt-4 text-center text-blue-600 hover:underline"
				>
					{isLogin
						? "Don't have an account? Sign Up"
						: "Already have an account? Log In"}
				</button>
			</div>
		</div>
	);
};

export default Auth;
