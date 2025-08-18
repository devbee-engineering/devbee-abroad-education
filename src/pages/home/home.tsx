import { useState, useRef, useEffect } from "react";
import { Button, Typography, Row, Col } from "antd";
import Navbar from "../../components/navbar";
import "../../App.css";
import stAndrewLogo from "../../assets/images/st-andrews-logo.jpg"
import durham from "../../assets/images/durham-uni-logo.jpg"
import bath from "../../assets/images/uob-logo-230.jpg"
import warwick from "../../assets/images/university-of-warwick-logo-230x90.jpg"
import lought from "../../assets/images/loughborough-logo.jpg"
import bristol from "../../assets/images/university-of-bristol-230x90.webp"

const { Title, Paragraph } = Typography;

const subjectOptions = [
	"Accounting and Finance",
	"Aerospace and Manufacturing Engineering",
	"Business Management",
	"Computer Science",
	"Law",
	"Medicine",
];

const courseTypeOptions = [
	"A-Level",
	"English Language",
	"Foundation",
	"Undergraduate",
	"Postgraduate",
];

const Home = () => {
	const [subjectDropdownOpen, setSubjectDropdownOpen] = useState(false);
	const [courseTypeDropdownOpen, setCourseTypeDropdownOpen] = useState(false);
	const [subject, setSubject] = useState("");
	const [courseType, setCourseType] = useState("");
	const [activeToggle, setActiveToggle] = useState<"COURSES" | "UNIVERSITIES">("COURSES");
	const subjectRef = useRef<HTMLDivElement>(null);
	const courseTypeRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				subjectRef.current &&
				!subjectRef.current.contains(event.target as Node)
			) {
				setSubjectDropdownOpen(false);
			}
			if (
				courseTypeRef.current &&
				!courseTypeRef.current.contains(event.target as Node)
			) {
				setCourseTypeDropdownOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div style={{ width: "100vw", minHeight: "100vh", overflowX: "hidden", overflowY: "auto" }}>
			<div style={{ background: "#ccfbad", width: "100vw" }}>
				<Navbar />
			</div>
			{/* Hero section using antd grid */}
			<div
				style={{
					position: "relative",
					width: "100vw",
					minHeight: "calc(100vh - 70px)",
					overflow: "hidden",
					display: "flex",
					flexDirection: "column",
				}}
			>
				<div
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						width: "100vw",
						height: "100%",
						background: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80') center/cover no-repeat",
						zIndex: 1,
						overflow: "hidden",
					}}
				/>
				<Row
					justify="center"
					align="middle"
					style={{
						position: "relative",
						width: "100vw",
						minHeight: "100vh",
						background: "rgba(7, 23, 43, 0.45)",
						zIndex: 2,
						overflow: "hidden",
						margin: 0,
					}}
				>
					<Col xs={24} sm={22} md={16} lg={10} xl={8} style={{ textAlign: "center", padding: "0 1rem" }}>
						<Title
							style={{
								color: "#fff",
								fontSize: "2.7rem",
								fontWeight: 700,
								marginBottom: "1.2rem",
								fontFamily: "serif",
								width: "100%",
								lineHeight: "1.13",
								letterSpacing: "-1px",
								maxWidth: "100%",
							}}
							className="hero-title"
						>
							Unlock a world-class<br />education in the UK<br />with expert guidance
						</Title>
						<Paragraph
							style={{
								color: "#fff",
								fontSize: "1.08rem",
								marginBottom: "2rem",
								lineHeight: "1.7",
								maxWidth: "100%",
							}}
							className="hero-desc"
						>
							The UK is home to world-class universities, strong career prospects, and a welcoming community. At Devbee, we’ll guide you every step of the way to studying in the UK—from choosing the right course to building a standout application. You’re in good hands.
						</Paragraph>
						<Button
							type="primary"
							size="large"
							style={{
								background: "#ff0a4b",
								borderRadius: "14px",
								fontWeight: "bold",
								fontSize: "1.08rem",
								padding: "0.9rem 1.5rem",
								display: "flex",
								alignItems: "center",
								gap: "0.7rem",
								marginBottom: "2rem",
								width: "100%",
								maxWidth: "280px",
								boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
								justifyContent: "center",
								marginLeft: "auto",
								marginRight: "auto",
							}}
							className="hero-btn"
						>
							Book free counselling <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>➔</span>
						</Button>
					</Col>
				</Row>
			</div>
			{/* Responsive CSS for mobile hero section */}
			<style>
				{`
				html, body, #root {
					overflow-x: hidden !important;
				}
				@media (max-width: 600px) {
					.hero-title {
						font-size: 2.1rem !important;
						max-width: 98vw !important;
						margin-bottom: 1.2rem !important;
					}
					.hero-desc {
						font-size: 1.05rem !important;
						max-width: 95vw !important;
						margin-bottom: 1.7rem !important;
					}
					.hero-btn {
						width: 100% !important;
						max-width: 100vw !important;
						font-size: 1.08rem !important;
						padding: 1rem 0 !important;
						border-radius: 12px !important;
						margin-bottom: 2rem !important;
					}
				}
				`}
			</style>
			{/* Search section above "Why choose the UK" */}
			<div
				style={{
					width: "100vw",
					background: "#07172b",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					padding: "3rem 0 2rem 0",
					position: "relative",
				}}
			>
				<div style={{ display: "flex", gap: "1rem", marginBottom: "2.5rem" }}>
					<button
						style={{
							background: activeToggle === "COURSES" ? "#fff" : "transparent",
							color: activeToggle === "COURSES" ? "#07172b" : "#fff",
							border: activeToggle === "COURSES" ? "1.5px solid #fff" : "1.5px solid #fff",
							borderRadius: "12px",
							padding: "0.7rem 2.5rem",
							fontWeight: "bold",
							fontSize: "1.1rem",
							boxShadow: activeToggle === "COURSES" ? "0 2px 8px rgba(0,0,0,0.03)" : "none",
							cursor: "pointer",
						}}
						onClick={() => setActiveToggle("COURSES")}
					>
						COURSES
					</button>
					<button
						style={{
							background: activeToggle === "UNIVERSITIES" ? "#fff" : "transparent",
							color: activeToggle === "UNIVERSITIES" ? "#07172b" : "#fff",
							border: activeToggle === "UNIVERSITIES" ? "1.5px solid #fff" : "1.5px solid #fff",
							borderRadius: "12px",
							padding: "0.7rem 2.5rem",
							fontWeight: "bold",
							fontSize: "1.1rem",
							boxShadow: activeToggle === "UNIVERSITIES" ? "0 2px 8px rgba(0,0,0,0.03)" : "none",
							cursor: "pointer",
						}}
						onClick={() => setActiveToggle("UNIVERSITIES")}
					>
						UNIVERSITIES
					</button>
				</div>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						background: "#07172b",
						border: "1.5px solid #ff0a4b",
						borderRadius: "14px",
						padding: "0.5rem 0.5rem 0.5rem 0",
						width: "700px",
						maxWidth: "95vw",
						boxSizing: "border-box",
						position: "relative",
					}}
				>
					{/* First dropdown */}
					<div
						ref={subjectRef}
						style={{
							flex: 1,
							padding: "1rem 1.5rem",
							display: "flex",
							flexDirection: "column",
							borderRight: "1px solid #2a2afc",
							position: "relative",
						}}
					>
						<span style={{ color: "#fff", fontWeight: 500, fontSize: "1rem", marginBottom: "0.3rem" }}>
							I'm looking for:
						</span>
						<div style={{ display: "flex", alignItems: "center", position: "relative" }}>
							<input
								type="text"
								placeholder={activeToggle === "COURSES" ? "Enter subject or course:" : "Enter university name"}
								value={subject}
								onChange={e => setSubject(e.target.value)}
								onFocus={() => setSubjectDropdownOpen(true)}
								style={{
									background: "transparent",
									border: "none",
									color: "#bfc8e6",
									fontSize: "1.05rem",
									outline: "none",
									width: "100%",
								}}
							/>
							<span
								style={{ color: "#bfc8e6", fontSize: "1.2rem", marginLeft: "0.5rem", cursor: "pointer" }}
								onClick={() => setSubjectDropdownOpen(v => !v)}
							>▼</span>
							{subjectDropdownOpen && (
								<div
									style={{
										position: "absolute",
										top: "2.5rem",
										left: 0,
										width: "100%",
										background: "#fff",
										borderRadius: "6px",
										boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
										zIndex: 10,
										border: "1px solid #e0e0e0",
									}}
								>
									<div
										style={{
											padding: "0.7rem 1rem",
											color: "#bfc8e6",
											fontWeight: 500,
											fontSize: "1rem",
											cursor: "default",
										}}
									>
										{activeToggle === "COURSES" ? "Enter subject or course:" : "Enter university name"}
									</div>
									{(activeToggle === "COURSES" ? subjectOptions : ["Oxford", "Cambridge", "Imperial College London", "UCL", "Edinburgh"])
										.filter(opt => !subject || opt.toLowerCase().includes(subject.toLowerCase()))
										.map(opt => (
											<div
												key={opt}
												style={{
													padding: "0.7rem 1rem",
													color: "#07172b",
													fontSize: "1rem",
													cursor: "pointer",
												}}
												onClick={() => {
													setSubject(opt);
													setSubjectDropdownOpen(false);
												}}
											>
												{opt}
											</div>
										))}
								</div>
							)}
						</div>
					</div>
					{/* Second dropdown */}
					<div
						ref={courseTypeRef}
						style={{
							flex: 1,
							padding: "1rem 1.5rem",
							display: "flex",
							flexDirection: "column",
							borderRight: "1px solid #2a2afc",
							position: "relative",
						}}
					>
						<span style={{ color: "#fff", fontWeight: 500, fontSize: "1rem", marginBottom: "0.3rem" }}>
							I'm planning to study:
						</span>
						<div style={{ display: "flex", alignItems: "center", position: "relative" }}>
							<input
								type="text"
								placeholder="Select course type"
								value={courseType}
								onChange={e => setCourseType(e.target.value)}
								onFocus={() => setCourseTypeDropdownOpen(true)}
								style={{
									background: "transparent",
									border: "none",
									color: "#bfc8e6",
									fontSize: "1.05rem",
									outline: "none",
									width: "100%",
								}}
							/>
							<span
								style={{ color: "#bfc8e6", fontSize: "1.2rem", marginLeft: "0.5rem", cursor: "pointer" }}
								onClick={() => setCourseTypeDropdownOpen(v => !v)}
							>▼</span>
							{courseTypeDropdownOpen && (
								<div
									style={{
										position: "absolute",
										top: "2.5rem",
										left: 0,
										width: "100%",
										background: "#fff",
										borderRadius: "6px",
										boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
										zIndex: 10,
										border: "1px solid #e0e0e0",
									}}
								>
									<div
										style={{
											padding: "0.7rem 1rem",
											color: "#bfc8e6",
											fontWeight: 500,
											fontSize: "1rem",
											cursor: "default",
										}}
									>
										Select course type
									</div>
									{courseTypeOptions
										.filter(opt => !courseType || opt.toLowerCase().includes(courseType.toLowerCase()))
										.map(opt => (
											<div
												key={opt}
												style={{
													padding: "0.7rem 1rem",
													color: "#07172b",
													fontSize: "1rem",
													cursor: "pointer",
												}}
												onClick={() => {
													setCourseType(opt);
													setCourseTypeDropdownOpen(false);
												}}
											>
												{opt}
											</div>
										))}
								</div>
							)}
						</div>
					</div>
					{/* Search button */}
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							padding: "0 1.2rem",
							height: "100%",
						}}
					>
						<button
							style={{
								background: "#ff0a4b",
								border: "none",
								borderRadius: "10px",
								width: "54px",
								height: "54px",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								cursor: "pointer",
							}}
						>
							<span style={{ color: "#fff", fontSize: "2rem" }}>🔍</span>
						</button>
					</div>
				</div>
			</div>
			{/* New section below hero */}
			<div
				style={{
					background: "#f8f8fa",
					width: "100vw",
					padding: "4rem 0 3rem 0",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					position: "relative",
				}}
			>
				<h1
					style={{
						color: "#0a1433",
						fontSize: "2.8rem",
						fontWeight: 700,
						textAlign: "center",
						marginBottom: "2.5rem",
						fontFamily: "serif",
					}}
				>
					Why choose the UK<br />for your studies?
				</h1>
				<div style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
					<button
						style={{
							background: "#2a2afc",
							color: "#fff",
							border: "none",
							borderRadius: "8px",
							padding: "0.7rem 1.6rem",
							fontWeight: "bold",
							fontSize: "1rem",
							cursor: "pointer",
						}}
					>
						Top universities
					</button>
					<button
						style={{
							background: "#fff",
							color: "#2a2afc",
							border: "2px solid #2a2afc",
							borderRadius: "8px",
							padding: "0.7rem 1.6rem",
							fontWeight: "bold",
							fontSize: "1rem",
							cursor: "pointer",
						}}
					>
						Campus and community
					</button>
					<button
						style={{
							background: "#fff",
							color: "#2a2afc",
							border: "2px solid #2a2afc",
							borderRadius: "8px",
							padding: "0.7rem 1.6rem",
							fontWeight: "bold",
							fontSize: "1rem",
							cursor: "pointer",
						}}
					>
						Life in the UK
					</button>
				</div>
				{/* New card section */}
				<div
					style={{
						display: "flex",
						alignItems: "center",
						background: "#fff",
						border: "2px solid #d1d5e7",
						borderRadius: "18px",
						boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
						padding: "2.5rem 2.5rem",
						maxWidth: "1100px",
						width: "100%",
						margin: "0 auto",
						gap: "2.5rem",
						marginBottom: "2.5rem",
					}}
				>
					<img
						src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=600&q=80"
						alt="Students in UK university"
						style={{
							width: "340px",
							height: "260px",
							objectFit: "cover",
							borderRadius: "14px",
							boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
							flexShrink: 0,
						}}
					/>
					<div style={{ flex: 1 }}>
						<h2
							style={{
								color: "#0a1433",
								fontSize: "2.2rem",
								fontWeight: 700,
								fontFamily: "serif",
								marginBottom: "1.2rem",
							}}
						>
							Top universities
						</h2>
						<p style={{ color: "#1a2442", fontSize: "1.15rem", marginBottom: "1.1rem", lineHeight: "1.7" }}>
							The UK is home to some of the world’s most prestigious and historic universities, with over 160 higher education institutions offering a wealth of academic opportunities. Many are consistently ranked among the best globally, recognised for their research, teaching excellence, and strong industry connections.
						</p>
						<p style={{ color: "#1a2442", fontSize: "1.15rem", lineHeight: "1.7" }}>
							Studying in the UK means joining a tradition of academic distinction that has produced generations of influential thinkers, leaders, and Nobel laureates. With a vast range of disciplines to explore, students benefit from rigorous academic standards and a truly international learning environment.
						</p>
					</div>
				</div>
				{/* World-class universities section */}
				<div
					style={{
						width: "100%",
						margin: "4rem 0 0 0",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
					className="world-class-universities-section"
				>
					<h1 style={{
						color: "#0a1433",
						fontSize: "2.7rem",
						fontWeight: 700,
						textAlign: "center",
						fontFamily: "serif",
						marginBottom: "1.2rem"
					}}>
						World-class universities
					</h1>
					<p style={{
						color: "#1a2442",
						fontSize: "1.18rem",
						textAlign: "center",
						maxWidth: "700px",
						marginBottom: "2.8rem"
					}}>
						Explore UK universities popular among international students for their course options, student experience, and career prospects after graduation.
					</p>
					<div
						style={{
							display: "grid",
							gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
							gap: "2.5rem",
							width: "100%",
							maxWidth: "1200px",
							marginBottom: "2.5rem",
							paddingLeft: "2rem",
							paddingRight: "2rem",
						}}
						className="universities-grid"
					>
						{/* University cards */}
						{[
							{
								logo: stAndrewLogo,
								name: "University of St Andrews",
								location: "Scotland",
								ranking: 2,
								intake: "Sep 2025",
								score: "IELTS 6.5"
							},
							{
								logo: durham,
								name: "Durham University",
								location: "North England",
								ranking: 5,
								intake: "Sep 2025",
								score: "IELTS 6.5"
							},
							{
								logo: bath,
								name: "University of Bath",
								location: "South England",
								ranking: 8,
								intake: "Sep 2025",
								score: "IELTS 6.5"
							},
							{
								logo: warwick,
								name: "University of Warwick",
								location: "Central England",
								ranking: 9,
								intake: "Sep 2025",
								score: "IELTS 6.5"
							},
							{
								logo: lought,
								name: "Loughborough University",
								location: "Central England",
								ranking: 10,
								intake: "Sep 2025",
								score: "IELTS 6.5"
							},
							{
								logo: bristol,
								name: "University of Bristol",
								location: "South England",
								ranking: 11,
								intake: "Sep 2025",
								score: "IELTS 6.5"
							}
						].map(u => (
							<div key={u.name} style={{
								background: "#fff",
								border: "1.5px solid #d1d5e7",
								borderRadius: "16px",
								padding: "2.2rem 2rem 2rem 2rem",
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
								minHeight: "420px"
							}}>
								<div style={{
									width: "120px",
									height: "70px",
									marginBottom: "1.2rem",
									display: "flex",
									alignItems: "center",
									justifyContent: "center"
								}}>
									<img src={u.logo} alt={u.name} style={{ maxWidth: "100%", maxHeight: "100%" }} />
								</div>
								<h2 style={{
									color: "#0a1433",
									fontSize: "1.45rem",
									fontWeight: 700,
									fontFamily: "serif",
									textAlign: "center",
									marginBottom: "0.7rem"
								}}>
									{u.name}
								</h2>
								<div style={{
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									gap: "0.5rem",
									color: "#2a2afc",
									fontWeight: 500,
									fontSize: "1.07rem",
									marginBottom: "1.1rem"
								}}>
									<span style={{ fontSize: "1.1rem" }}>📍</span>
									<span>{u.location}</span>
								</div>
								<div style={{ width: "100%", marginBottom: "1.1rem" }}>
									<div style={{ color: "#0a1433", fontWeight: 600, fontSize: "1.07rem", marginBottom: "0.3rem" }}>
										Ranking: <span style={{ fontWeight: 400 }}>{u.ranking}</span>
									</div>
									<div style={{ color: "#0a1433", fontWeight: 600, fontSize: "1.07rem", marginBottom: "0.3rem" }}>
										Next intake: <span style={{ fontWeight: 400 }}>{u.intake}</span>
									</div>
									<div style={{ color: "#0a1433", fontWeight: 600, fontSize: "1.07rem" }}>
										Entry score: <span style={{ fontWeight: 400 }}>{u.score}</span>
									</div>
								</div>
								<button style={{
									background: "#2a2afc",
									color: "#fff",
									border: "none",
									borderRadius: "10px",
									padding: "0.9rem 2.2rem",
									fontWeight: "bold",
									fontSize: "1.07rem",
									cursor: "pointer",
									marginTop: "auto"
								}}>
									View university
								</button>
							</div>
						))}
					</div>
					<button style={{
						background: "#2a2afc",
						color: "#fff",
						border: "none",
						borderRadius: "10px",
						padding: "1rem 2.7rem",
						fontWeight: "bold",
						fontSize: "1.15rem",
						cursor: "pointer",
						margin: "0 auto 2.5rem auto",
						display: "flex",
						alignItems: "center",
						gap: "0.7rem"
					}}>
						View all universities <span style={{ fontSize: "1.3rem", fontWeight: "bold" }}>➔</span>
					</button>
					<style>
						{`
						@media (max-width: 600px) {
							.world-class-universities-section .universities-grid {
								width: 90% !important;
								padding-left: 0.5rem !important;
								padding-right: 0.5rem !important;
								gap: 1.2rem !important;
							}
						}
						`}
					</style>
				</div>
				{/* Blog/news card section */}
				<div
					style={{
						width: "100%",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						background: "#f8f8fa",
						padding: "0 0 5rem 0",
					}}
					className="blog-featured-section"
				>
					<style>
						{`
							@media (max-width: 600px) {
								.blog-featured-section {
									width: 90% !important;
								}
							}
						`}
					</style>
					<div
						style={{
							position: "relative",
							background: "#06153a",
							borderRadius: "22px",
							padding: "3.2rem 3.5rem 2.7rem 3.5rem",
							maxWidth: "1100px",
							width: "100%",
							boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
							overflow: "hidden",
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-start",
						}}
					>
						<span style={{
							color: "#bfc8e6",
							fontSize: "1.15rem",
							fontWeight: 500,
							marginBottom: "1.1rem",
							display: "block"
						}}>
							04 Aug 2025
						</span>
						<h2 style={{
							color: "#fff",
							fontSize: "2.4rem",
							fontWeight: 700,
							fontFamily: "serif",
							marginBottom: "2.2rem",
							lineHeight: "1.15"
						}}>
							2026 Entry at Cambridge and Oxford University
						</h2>
						<button
							style={{
								background: "#ccfbad",
								color: "#06153a",
								border: "none",
								borderRadius: "16px",
								padding: "1rem 2.7rem",
								fontWeight: "bold",
								fontSize: "1.15rem",
								cursor: "pointer",
								marginTop: "0.5rem"
							}}
						>
							Read more
						</button>
						{/* Decorative SVG line */}
						<svg
							width="480"
							height="320"
							viewBox="0 0 480 320"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							style={{
								position: "absolute",
								right: "0",
								top: "0",
								zIndex: 0,
								opacity: 0.7,
							}}
						>
							<path
								d="M120 160 Q240 40 360 160 Q480 280 360 160 Q240 40 120 160"
								stroke="#b6ff6a"
								strokeWidth="2.5"
								fill="none"
							/>
							<circle cx="400" cy="80" r="70" stroke="#b6ff6a" strokeWidth="2" fill="none" />
						</svg>
					</div>
				</div>
				{/* Blog/news grid section */}
				<div
					style={{
						width: "100%",
						display: "flex",
						justifyContent: "center",
						background: "#fff",
						paddingBottom: "4rem",
					}}
					className="study-guides-btn-section"
				>
					<style>
						{`
							@media (max-width: 600px) {
								.study-guides-btn-section {
									width: 90% !important;
								}
							}
						`}
					</style>
					<div
						style={{
							display: "grid",
							gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
							gap: "2.5rem",
							maxWidth: "1200px",
							width: "100%",
						}}
					>
						{[
							{
								date: "31 Jul 2025",
								title: "Top 10 Law Schools in Canada",
								desc: "Make a head start on your legal career by studying at a Canadian Law School.",
							},
							{
								date: "30 Jul 2025",
								title: "Working Part-Time in Australia as an International Student",
								desc: "The Australian international student visa (subclass 500) allows you to work while you study – learn more about your rights, wage and popular jobs.",
							},
							{
								date: "29 Jul 2025",
								title: "Top 10 UK Universities for MSc Marketing",
								desc: "Whilst studying master's in marketing, students will learn the latest marketing techniques and technologies, including digital marketing, strategic marketing and data analytics.",
							},
						].map((blog) => (
							<div
								key={blog.title}
								style={{
									background: "#06153a",
									borderRadius: "18px",
									padding: "2.5rem 2.2rem 2.2rem 2.2rem",
									boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
									display: "flex",
									flexDirection: "column",
									alignItems: "flex-start",
									position: "relative",
									minHeight: "340px",
								}}
							>
								<span style={{
									color: "#bfc8e6",
									fontSize: "1.13rem",
									fontWeight: 500,
									marginBottom: "1.1rem",
									display: "block"
								}}>
									{blog.date}
								</span>
								<h2 style={{
									color: "#fff",
									fontSize: "2rem",
									fontWeight: 700,
									fontFamily: "serif",
									marginBottom: "1.2rem",
									lineHeight: "1.15"
								}}>
									{blog.title}
								</h2>
								<p style={{
									color: "#bfc8e6",
									fontSize: "1.13rem",
									marginBottom: "2.2rem",
									lineHeight: "1.5"
								}}>
									{blog.desc}
								</p>
								<button
									style={{
										background: "#ccfbad",
										color: "#06153a",
										border: "none",
										borderRadius: "16px",
										padding: "1rem 2.7rem",
										fontWeight: "bold",
										fontSize: "1.15rem",
										cursor: "pointer",
										marginTop: "auto"
									}}
								>
									Read more
								</button>
								{/* Decorative SVG line in card */}
								<svg
									width="180"
									height="120"
									viewBox="0 0 180 120"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									style={{
										position: "absolute",
										right: "0",
										bottom: "0",
										zIndex: 0,
										opacity: 0.7,
									}}
								>
									<path
										d="M30 60 Q90 10 150 60 Q180 110 150 60 Q90 10 30 60"
										stroke="#b6ff6a"
										strokeWidth="2"
										fill="none"
									/>
								</svg>
							</div>
						))}
					</div>
				</div>
				{/* View all study guides button */}
				<div style={{ width: "100%", display: "flex", justifyContent: "center", background: "#fff", paddingBottom: "5rem" }}>
					<button
						style={{
							background: "#2a2afc",
							color: "#fff",
							border: "none",
							borderRadius: "16px",
							padding: "1.1rem 2.7rem",
							fontWeight: "bold",
							fontSize: "1.25rem",
							cursor: "pointer",
							display: "flex",
							alignItems: "center",
							gap: "0.7rem"
						}}
					>
						View all study guides <span style={{ fontSize: "1.3rem", fontWeight: "bold" }}>➔</span>
					</button>
				</div>
				{/* Call-to-action section */}
				<div
					style={{
						width: "100%",
						background: "#07172b",
						padding: "5rem 0 5rem 0",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<h1 style={{
						color: "#fff",
						fontSize: "3rem",
						fontWeight: 700,
						fontFamily: "serif",
						textAlign: "center",
						marginBottom: "2rem",
						lineHeight: "1.15"
					}}>
						Get expert guidance for your UK study journey
					</h1>
					<p style={{
						color: "#bfc8e6",
						fontSize: "1.25rem",
						textAlign: "center",
						maxWidth: "700px",
						marginBottom: "2.7rem"
					}}>
						Our experienced advisors help you choose the right course, prepare your application, and secure your place at a top UK university. Book a free counselling session today!
					</p>
					<button
						style={{
							background: "#ff0a4b",
							color: "#fff",
							border: "none",
							borderRadius: "14px",
							padding: "1.1rem 2.7rem",
							fontWeight: "bold",
							fontSize: "1.25rem",
							cursor: "pointer",
							display: "flex",
							alignItems: "center",
							gap: "0.7rem"
						}}
					>
						Book free counselling <span style={{ fontSize: "1.3rem", fontWeight: "bold" }}>➔</span>
					</button>
				</div>
				{/* Footer section */}
				<div
					style={{
						width: "100vw",
						background: "#ccfbad",
						padding: "4.5rem 0 2.5rem 0",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
					className="footer-section"
				>
					<div
						style={{
							display: "grid",
							gridTemplateColumns: "minmax(320px, 1fr) repeat(3, minmax(180px, 1fr))",
							gap: "2.5rem",
							maxWidth: "1400px",
							width: "100%",
							margin: "0 auto 2.5rem auto",
							marginLeft: "2.5rem",
						}}
						className="footer-grid"
					>
						{/* Logo and description */}
						<div>
							<div style={{ display: "flex", alignItems: "center", marginBottom: "2.2rem" }}>
								<span style={{
									fontSize: "2.5rem",
									color: "#ff0a4b",
									fontWeight: 700,
									marginRight: "0.7rem"
								}}>✻</span>
								<span style={{
									fontSize: "2.2rem",
									fontWeight: 700,
									fontFamily: "serif",
									color: "#06153a"
								}}>Devbee</span>
							</div>
							<p style={{
								color: "#06153a",
								fontSize: "1.18rem",
								lineHeight: "1.7",
								marginBottom: "2.2rem"
							}}>
								Navigating the path to global higher education can be complex, but you don’t have to do it alone.<br />
								Whatever your ambition, we’re here to guide you every step of the way. Achieve your goals with the world’s most trusted higher education specialist.
							</p>
							<div style={{ display: "flex", gap: "1.5rem", marginBottom: "2.2rem" }}>
								<a href="#" style={{
									display: "inline-flex",
									alignItems: "center",
									justifyContent: "center",
									width: "56px",
									height: "56px",
									border: "2px solid #06153a",
									borderRadius: "14px",
									fontSize: "2rem",
									color: "#06153a",
									textDecoration: "none",
								}}><span>in</span></a>
								<a href="#" style={{
									display: "inline-flex",
									alignItems: "center",
									justifyContent: "center",
									width: "56px",
									height: "56px",
									border: "2px solid #06153a",
									borderRadius: "14px",
									fontSize: "2rem",
									color: "#06153a",
									textDecoration: "none",
								}}><span>f</span></a>
								<a href="#" style={{
									display: "inline-flex",
									alignItems: "center",
									justifyContent: "center",
									width: "56px",
									height: "56px",
									border: "2px solid #06153a",
									borderRadius: "14px",
									fontSize: "2rem",
									color: "#06153a",
									textDecoration: "none",
								}}><span>▶</span></a>
								<a href="#" style={{
									display: "inline-flex",
									alignItems: "center",
									justifyContent: "center",
									width: "56px",
									height: "56px",
									border: "2px solid #06153a",
									borderRadius: "14px",
									fontSize: "2rem",
									color: "#06153a",
									textDecoration: "none",
								}}><span>◎</span></a>
							</div>
						</div>
						{/* Destinations */}
						<div>
							<h3 style={{
								color: "#06153a",
								fontWeight: 700,
								fontSize: "1.25rem",
								marginBottom: "1.1rem"
							}}>Destinations</h3>
							<ul style={{ listStyle: "none", padding: 0, margin: 0, color: "#06153a", fontSize: "1.13rem" }}>
								<li>United Kingdom</li>
								<li>Australia</li>
								<li>Canada</li>
								<li>Dubai</li>
								<li>Ireland</li>
								<li>New Zealand</li>
								<li>United States</li>
							</ul>
						</div>
						{/* Quick links */}
						<div>
							<h3 style={{
								color: "#06153a",
								fontWeight: 700,
								fontSize: "1.25rem",
								marginBottom: "1.1rem"
							}}>Quick links</h3>
							<ul style={{ listStyle: "none", padding: 0, margin: 0, color: "#06153a", fontSize: "1.13rem" }}>
								<li>Course finder</li>
								<li>Services</li>
								<li>Language prep</li>
								<li>Scholarships</li>
								<li>Events</li>
							</ul>
						</div>
						{/* Company */}
						<div>
							<h3 style={{
								color: "#06153a",
								fontWeight: 700,
								fontSize: "1.25rem",
								marginBottom: "1.1rem"
							}}>Company</h3>
							<ul style={{ listStyle: "none", padding: 0, margin: 0, color: "#06153a", fontSize: "1.13rem" }}>
								<li>About</li>
								<li>Our team</li>
								<li>Global offices</li>
								<li>Anti bribery policy</li>
								<li>Code of conduct</li>
								<li>Whistle blower policy</li>
							</ul>
						</div>
					</div>
					{/* AQF Compliance */}
					<div style={{
						maxWidth: "1400px",
						width: "100%",
						margin: "0 auto",
						marginTop: "2.5rem",
						color: "#06153a",
						fontSize: "1.13rem"
					}}>
						<p style={{ fontWeight: 700, marginBottom: "1rem" }}>
							Agent Quality Framework (AQF) Compliance
						</p>
						<p>
							Devbee is committed to upholding the highest standards in international student recruitment. We adhere to the principles of the Agent Quality Framework (AQF), ensuring ethical practices, transparency, and professionalism in all our services. Our agents are trained and certified to provide accurate and reliable guidance to students.
						</p>
					</div>
					<style>
						{`
						@media (max-width: 700px) {
							.footer-section {
								padding: 2.5rem 0 1.5rem 0 !important;
							}
							.footer-grid {
								display: flex !important;
								flex-direction: column !important;
								gap: 1.7rem !important;
								max-width: 98vw !important;
								margin-left: 0 !important;
								width: 100vw !important;
								padding-left: 1rem !important;
								padding-right: 1rem !important;
							}
							.footer-grid > div {
								width: 100% !important;
								margin-bottom: 0.7rem !important;
							}
							.footer-grid ul {
								margin-bottom: 0.7rem !important;
							}
						}
						`}
					</style>
				</div>
			</div>
			<style>
				{`
				@media (max-width: 600px) {
					/* World-class universities grid padding for mobile */
					[style*="max-width:1200px"] {
						padding-left: 1rem !important;
						padding-right: 1rem !important;
						gap: 1.2rem !important;
					}
					/* University card padding for mobile */
					[style*="border-radius:16px"] {
						padding-left: 1rem !important;
						padding-right: 1rem !important;
						padding-top: 1.2rem !important;
						padding-bottom: 1.2rem !important;
						min-height: 320px !important;
					}
				}
				`}
			</style>
		</div>
	);
};



export default Home;
