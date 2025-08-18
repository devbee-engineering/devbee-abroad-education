import { useState } from "react";
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
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<nav
			className="navbar"
			style={{
				background: "#0b2c33", // new dark teal theme
				borderBottom: "1px solid #18444b",
				minHeight: "64px",
				width: "100vw",
			}}
		>
			<div className="navbar-container" style={{ position: "relative", background: "#0b2c33" }}>
				<div className="navbar-logo">
					<span className="logo-icon" style={{ color: "#fff" }}>✻</span>
					<span className="logo-text" style={{ color: "#fff" }}>Devbee</span>
				</div>
				{/* Hamburger/Close icon for mobile */}
				<div
					className="navbar-hamburger"
					style={{
						display: "none",
						cursor: "pointer",
						position: "absolute",
						right: "1.5rem",
						top: "50%",
						transform: "translateY(-50%)",
						zIndex: 100,
					}}
					onClick={() => setMobileMenuOpen((v) => !v)}
				>
					{!mobileMenuOpen ? (
						<>
							<span
								style={{
									display: "block",
									width: "28px",
									height: "4px",
									background: "#07172b",
									margin: "6px 0",
									borderRadius: "2px",
								}}
							/>
							<span
								style={{
									display: "block",
									width: "28px",
									height: "4px",
									background: "#07172b",
									margin: "6px 0",
									borderRadius: "2px",
								}}
							/>
							<span
								style={{
									display: "block",
									width: "28px",
									height: "4px",
									background: "#07172b",
									margin: "6px 0",
									borderRadius: "2px",
								}}
							/>
						</>
					) : (
						<span
							style={{
								fontSize: "2.2rem",
								fontWeight: "bold",
								color: "#07172b",
								lineHeight: "1",
							}}
						>
							×
						</span>
					)}
				</div>
				{/* Desktop menu */}
				<ul
					className="navbar-menu"
					style={{
						display: mobileMenuOpen ? "none" : undefined,
						background: "#0b2c33",
					}}
				>
					<li
						className="navbar-item dropdown"
						onMouseEnter={() => !mobileMenuOpen && setOpenDropdown("Destinations")}
						onMouseLeave={() => !mobileMenuOpen && setOpenDropdown(null)}
						style={{
							color: "#fff",
							cursor: "pointer",
						}}
						onMouseOver={e => (e.currentTarget.style.background = "#18444b")}
						onMouseOut={e => (e.currentTarget.style.background = "transparent")}
					>
						<span
							className="dropdown-toggle"
							onClick={() =>
								mobileMenuOpen &&
								setOpenDropdown(
									openDropdown === "Destinations" ? null : "Destinations"
								)
							}
							style={{
								cursor: mobileMenuOpen ? "pointer" : "default",
								color: "#fff",
							}}
						>
							Destinations <span className="arrow" style={{ color: "#fff" }}>▼</span>
						</span>
						{openDropdown === "Destinations" && (
							<ul
								className="dropdown-menu"
								style={{
									position: mobileMenuOpen ? "static" : undefined,
									boxShadow: mobileMenuOpen ? "none" : undefined,
									background: "#0b2c33",
									color: "#fff",
								}}
							>
								{dropdowns.Destinations.map((item) => (
									<li key={item} className="dropdown-item" style={{
										color: "#fff",
										background: "transparent",
										cursor: "pointer",
									}}
									onMouseEnter={e => (e.currentTarget.style.background = "#18444b")}
									onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
									>
										{item}
									</li>
								))}
							</ul>
						)}
					</li>
					<li className="navbar-item" style={{
						color: "#fff",
						cursor: "pointer",
					}}
					onMouseEnter={e => (e.currentTarget.style.background = "#18444b")}
					onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
					>Course finder</li>
					<li className="navbar-item" style={{
						color: "#fff",
						cursor: "pointer",
					}}
					onMouseEnter={e => (e.currentTarget.style.background = "#18444b")}
					onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
					>Services</li>
					<li className="navbar-item" style={{
						color: "#fff",
						cursor: "pointer",
					}}
					onMouseEnter={e => (e.currentTarget.style.background = "#18444b")}
					onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
					>Language prep</li>
					<li
						className="navbar-item dropdown"
						onMouseEnter={() => !mobileMenuOpen && setOpenDropdown("Resources")}
						onMouseLeave={() => !mobileMenuOpen && setOpenDropdown(null)}
						style={{
							color: "#fff",
							cursor: "pointer",
						}}
						onMouseOver={e => (e.currentTarget.style.background = "#18444b")}
						onMouseOut={e => (e.currentTarget.style.background = "transparent")}
					>
						<span
							className="dropdown-toggle"
							onClick={() =>
								mobileMenuOpen &&
								setOpenDropdown(
									openDropdown === "Resources" ? null : "Resources"
								)
							}
							style={{
								cursor: mobileMenuOpen ? "pointer" : "default",
								color: "#fff",
							}}
						>
							Resources <span className="arrow" style={{ color: "#fff" }}>▼</span>
						</span>
						{openDropdown === "Resources" && (
							<ul
								className="dropdown-menu"
								style={{
									position: mobileMenuOpen ? "static" : undefined,
									boxShadow: mobileMenuOpen ? "none" : undefined,
									background: "#0b2c33",
									color: "#fff",
								}}
							>
								{dropdowns.Resources.map((item) => (
									<li key={item} className="dropdown-item" style={{
										color: "#fff",
										background: "transparent",
										cursor: "pointer",
									}}
									onMouseEnter={e => (e.currentTarget.style.background = "#18444b")}
									onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
									>
										{item}
									</li>
								))}
							</ul>
						)}
					</li>
					<li className="navbar-item" style={{
						color: "#fff",
						cursor: "pointer",
					}}
					onMouseEnter={e => (e.currentTarget.style.background = "#18444b")}
					onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
					>Events</li>
					<li
						className="navbar-item dropdown"
						onMouseEnter={() => !mobileMenuOpen && setOpenDropdown("Company")}
						onMouseLeave={() => !mobileMenuOpen && setOpenDropdown(null)}
						style={{
							color: "#fff",
							cursor: "pointer",
						}}
						onMouseOver={e => (e.currentTarget.style.background = "#18444b")}
						onMouseOut={e => (e.currentTarget.style.background = "transparent")}
					>
						<span
							className="dropdown-toggle"
							onClick={() =>
								mobileMenuOpen &&
								setOpenDropdown(
									openDropdown === "Company" ? null : "Company"
								)
							}
							style={{
								cursor: mobileMenuOpen ? "pointer" : "default",
								color: "#fff",
							}}
						>
							Company <span className="arrow" style={{ color: "#fff" }}>▼</span>
						</span>
						{openDropdown === "Company" && (
							<ul
								className="dropdown-menu"
								style={{
									position: mobileMenuOpen ? "static" : undefined,
									boxShadow: mobileMenuOpen ? "none" : undefined,
									background: "#0b2c33",
									color: "#fff",
								}}
							>
								{dropdowns.Company.map((item) => (
									<li key={item} className="dropdown-item" style={{
										color: "#fff",
										background: "transparent",
										cursor: "pointer",
									}}
									onMouseEnter={e => (e.currentTarget.style.background = "#18444b")}
									onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
									>
										{item}
									</li>
								))}
							</ul>
						)}
					</li>
				</ul>
				<button
					className="navbar-btn"
					style={{
						display: mobileMenuOpen ? "none" : undefined,
						background: "#ff6a6a",
						color: "#fff",
						border: "none",
						borderRadius: "14px",
						fontWeight: "bold",
						fontSize: "1.13rem",
						padding: "0.7rem 2rem",
						boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
						cursor: "pointer",
					}}
				>
					Book free counselling <span className="btn-arrow">➔</span>
				</button>
				{/* Mobile menu overlay */}
				{mobileMenuOpen && (
					<div
						style={{
							position: "fixed",
							top: 0,
							left: 0,
							width: "100vw",
							height: "100vh",
							background: "#0b2c33", // new theme for mobile menu
							zIndex: 999,
							display: "flex",
							flexDirection: "column",
							padding: "2rem 1.5rem 0 1.5rem",
							overflowY: "auto",
						}}
					>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								marginBottom: "2.2rem",
								position: "relative",
							}}
						>
							<span
								className="logo-icon"
								style={{
									fontSize: "2rem",
									color: "#ff0a4b",
									fontWeight: 700,
									marginRight: "0.7rem",
								}}
							>
								✻
							</span>
							<span
								className="logo-text"
								style={{
									fontSize: "1.7rem",
									fontWeight: 700,
									fontFamily: "serif",
									color: "#06153a",
								}}
							>
								Devbee
							</span>
							{/* X button styled like screenshot */}
							<button
								onClick={() => setMobileMenuOpen(false)}
								style={{
									position: "absolute",
									right: 0,
									top: 0,
									background: "none",
									border: "none",
									fontSize: "2rem",
									fontWeight: 400,
									color: "#06153a",
									cursor: "pointer",
									lineHeight: "1",
									padding: 0,
									width: "40px",
									height: "40px",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
								}}
								aria-label="Close menu"
							>
								<span
									style={{
										fontFamily: "inherit",
										fontWeight: 400,
										fontSize: "2.2rem",
										lineHeight: "1",
										marginTop: "-10px",
										marginRight: "70px"
									}}
								>
									×
								</span>
							</button>
						</div>
						<div
							style={{
								fontSize: "1.15rem",
								color: "#fff",
								marginBottom: "1.5rem",
							}}
						>
							Select country
						</div>
						<div
							style={{
								width: "100%",
								height: "2px",
								background: "#18444b",
								marginBottom: "2rem",
							}}
						/>
						<ul
							style={{
								listStyle: "none",
								padding: 0,
								margin: 0,
								fontSize: "1.18rem",
								color: "#fff",
								flex: 1,
							}}
						>
							<li style={{ marginBottom: "1.2rem" }}>
								<div
									style={{
										display: "flex",
										alignItems: "center",
										cursor: "pointer",
									}}
									onClick={() =>
										setOpenDropdown(
											openDropdown === "Destinations"
												? null
												: "Destinations"
										)
									}
								>
									Destinations
									<span
										style={{
											marginLeft: "auto",
											fontSize: "1.2rem",
										}}
									>
										{openDropdown === "Destinations" ? "▴" : "▾"}
									</span>
								</div>
								{openDropdown === "Destinations" && (
									<ul
										style={{
											listStyle: "none",
											paddingLeft: "1.2rem",
											marginTop: "0.7rem",
										}}
									>
										{dropdowns.Destinations.map((item) => (
											<li
												key={item}
												style={{
													marginBottom: "0.7rem",
													color: "#07172b",
												}}
											>
												{item}
											</li>
										))}
									</ul>
								)}
							</li>
							<li style={{ marginBottom: "1.2rem" }}>Course finder</li>
							<li style={{ marginBottom: "1.2rem" }}>Services</li>
							<li style={{ marginBottom: "1.2rem" }}>Language prep</li>
							<li style={{ marginBottom: "1.2rem" }}>
								<div
									style={{
										display: "flex",
										alignItems: "center",
										cursor: "pointer",
									}}
									onClick={() =>
										setOpenDropdown(
											openDropdown === "Resources"
												? null
												: "Resources"
										)
									}
								>
									Resources
									<span
										style={{
											marginLeft: "auto",
											fontSize: "1.2rem",
										}}
									>
										{openDropdown === "Resources" ? "▴" : "▾"}
									</span>
								</div>
								{openDropdown === "Resources" && (
									<ul
										style={{
											listStyle: "none",
											paddingLeft: "1.2rem",
											marginTop: "0.7rem",
										}}
									>
										{dropdowns.Resources.map((item) => (
											<li
												key={item}
												style={{
													marginBottom: "0.7rem",
													color: "#07172b",
												}}
											>
												{item}
											</li>
										))}
									</ul>
								)}
							</li>
							<li style={{ marginBottom: "1.2rem" }}>Events</li>
							<li style={{ marginBottom: "1.2rem" }}>
								<div
									style={{
										display: "flex",
										alignItems: "center",
										cursor: "pointer",
									}}
									onClick={() =>
										setOpenDropdown(
											openDropdown === "Company" ? null : "Company"
										)
									}
								>
									Company
									<span
										style={{
											marginLeft: "auto",
											fontSize: "1.2rem",
										}}
									>
										{openDropdown === "Company" ? "▴" : "▾"}
									</span>
								</div>
								{openDropdown === "Company" && (
									<ul
										style={{
											listStyle: "none",
											paddingLeft: "1.2rem",
											marginTop: "0.7rem",
										}}
									>
										{dropdowns.Company.map((item) => (
											<li
												key={item}
												style={{
													marginBottom: "0.7rem",
													color: "#07172b",
												}}
											>
												{item}
											</li>
										))}
									</ul>
								)}
							</li>
						</ul>
						{/* Book free counselling button fixed at bottom */}
						<div
							style={{
								width: "100vw",
								position: "fixed",
								bottom: 0,
								left: 0,
								background: "transparent",
								display: "flex",
								justifyContent: "center",
								paddingBottom: "1.5rem",
								zIndex: 1000,
							}}
						>
							<button
								style={{
									width: "80vw",
									maxWidth: "340px",
									background: "#ff6a6a",
									color: "#fff",
									border: "none",
									borderRadius: "14px",
									fontWeight: "bold",
									fontSize: "1.18rem",
									padding: "1.1rem 0",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									gap: "0.7rem",
									boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
								}}
							>
								Book free counselling
								<span
									style={{
										fontSize: "1.3rem",
										fontWeight: "bold",
										marginLeft: "0.7rem",
										display: "flex",
										alignItems: "center",
									}}
								>
									{/* Circle arrow icon */}
									<svg width="22" height="22" viewBox="0 0 22 22" fill="none">
										<circle cx="11" cy="11" r="11" fill="white" />
										<path d="M8 11h6m0 0l-2-2m2 2l-2 2" stroke="#ff6a6a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
									</svg>
								</span>
							</button>
						</div>
					</div>
				)}
			</div>
			{/* Responsive CSS */}
			<style>
				{`
				@media (max-width: 900px) {
					.navbar-menu {
						display: none !important;
					}
					.navbar-hamburger {
						display: block !important;
					}
					.navbar-btn {
						display: none !important;
					}
				}
				`}
			</style>
		</nav>
	);
};

export default Navbar;
