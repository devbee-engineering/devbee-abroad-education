import  { useState } from "react";
import "../App.css";

const dropdowns = {
	Destinations: [
		"United Kingdom",
		"Australia",
		"Ireland",
		"Canada",
		"New Zealand",
		"United States",
		"Dubai",
	],
	Resources: [
		"Institutes",
		"Study Guides",
		"Scholarships",
		"Popular Courses",
		"Study Options",
		"Study Info",
	],
	Company: ["Global Offices"],
};

const Navbar = () => {
	const [openDropdown, setOpenDropdown] = useState<string | null>(null);

	return (
		<nav className="navbar">
			<div className="navbar-container">
				<div className="navbar-logo">
					<span className="logo-icon">✻</span>
					<span className="logo-text">Devbee</span>
				</div>
				<ul className="navbar-menu">
					<li
						className="navbar-item dropdown"
						onMouseEnter={() => setOpenDropdown("Destinations")}
						onMouseLeave={() => setOpenDropdown(null)}
					>
						<span className="dropdown-toggle">
							Destinations <span className="arrow">▼</span>
						</span>
						{openDropdown === "Destinations" && (
							<ul className="dropdown-menu">
								{dropdowns.Destinations.map((item) => (
									<li key={item} className="dropdown-item">{item}</li>
								))}
							</ul>
						)}
					</li>
					<li className="navbar-item">Course finder</li>
					<li className="navbar-item">Services</li>
					<li className="navbar-item">Language prep</li>
					<li
						className="navbar-item dropdown"
						onMouseEnter={() => setOpenDropdown("Resources")}
						onMouseLeave={() => setOpenDropdown(null)}
					>
						<span className="dropdown-toggle">
							Resources <span className="arrow">▼</span>
						</span>
						{openDropdown === "Resources" && (
							<ul className="dropdown-menu">
								{dropdowns.Resources.map((item) => (
									<li key={item} className="dropdown-item">{item}</li>
								))}
							</ul>
						)}
					</li>
					<li className="navbar-item">Events</li>
					<li
						className="navbar-item dropdown"
						onMouseEnter={() => setOpenDropdown("Company")}
						onMouseLeave={() => setOpenDropdown(null)}
					>
						<span className="dropdown-toggle">
							Company <span className="arrow">▼</span>
						</span>
						{openDropdown === "Company" && (
							<ul className="dropdown-menu">
								{dropdowns.Company.map((item) => (
									<li key={item} className="dropdown-item">{item}</li>
								))}
							</ul>
						)}
					</li>
				</ul>
				<button className="navbar-btn">Book free counselling <span className="btn-arrow">➔</span></button>
			</div>
		</nav>
	);
};

export default Navbar;
