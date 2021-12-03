import React from "react";
import "../../styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="app-navbar">
			<Link className="nav-link" to="/">
				<span>Contact List</span>
			</Link>
			<Link className="nav-link" to="/add-contact">
				<span>Add a New Contact</span>
			</Link>
		</nav>
	);
};

export default Navbar;
