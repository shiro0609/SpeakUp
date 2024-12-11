import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";
import Terms from "./pages/Terms";
import Policy from "./pages/Policy";

function App() {
	return (
		<Router basename="/SpeakUp">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/courses" element={<Courses />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/auth" element={<Auth />} />
				<Route path="/terms" element={<Terms />} />
				<Route path="/policy" element={<Policy />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
