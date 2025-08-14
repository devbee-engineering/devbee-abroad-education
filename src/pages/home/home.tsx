import { useState, useRef, useEffect } from "react";
import { Button, Typography } from "antd";
import Navbar from "../../components/navbar";
import "../../App.css";

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
		<div style={{ width: "100vw", minHeight: "100vh", overflow: "hidden" }}>
			<div style={{ background: "#ccfbad", width: "100vw" }}>
				<Navbar />
			</div>
			<div
				style={{
					position: "relative",
					width: "100vw",
					height: "calc(100vh - 70px)", // subtract navbar height if needed
					overflow: "hidden",
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
					}}
				/>
				<div
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						width: "100vw",
						height: "100%",
						background: "rgba(7, 23, 43, 0.45)",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						padding: "0 2rem",
						zIndex: 2,
					}}
				>
					<Title
						style={{
							color: "#fff",
							fontSize: "3.5rem",
							fontWeight: 700,
							textAlign: "center",
							marginBottom: "1.5rem",
							fontFamily: "serif",
							width: "100%",
							maxWidth: "900px",
						}}
					>
						Unlock a world-class<br />education in the UK<br />with expert guidance
					</Title>
					<Paragraph
						style={{
							color: "#fff",
							fontSize: "1.2rem",
							maxWidth: "600px",
							textAlign: "center",
							marginBottom: "2.5rem",
						}}
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
							fontSize: "1.1rem",
							padding: "0.7rem 2rem",
							display: "flex",
							alignItems: "center",
							gap: "0.5rem",
						}}
					>
						Book free counselling <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>➔</span>
					</Button>
				</div>
			</div>
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
				<div style={{ width: "100%", margin: "4rem 0 0 0", display: "flex", flexDirection: "column", alignItems: "center" }}>
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
					<div style={{
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
						gap: "2.5rem",
						width: "100%",
						maxWidth: "1200px",
						marginBottom: "2.5rem"
					}}>
						{/* University cards */}
						{[
							{
								logo: "/src/assets/images/st-andrews-logo.jpg",
								name: "University of St Andrews",
								location: "Scotland",
								ranking: 2,
								intake: "Sep 2025",
								score: "IELTS 6.5"
							},
							{
								logo: "/src/assets/images/durham-uni-logo.jpg",
								name: "Durham University",
								location: "North England",
								ranking: 5,
								intake: "Sep 2025",
								score: "IELTS 6.5"
							},
							{
								logo: "/src/assets/images/uob-logo-230.jpg",
								name: "University of Bath",
								location: "South England",
								ranking: 8,
								intake: "Sep 2025",
								score: "IELTS 6.5"
							},
							{
								logo: "/src/assets/images/university-of-warwick-logo-230x90.jpg",
								name: "University of Warwick",
								location: "Central England",
								ranking: 9,
								intake: "Sep 2025",
								score: "IELTS 6.5"
							},
							{
								logo: "/src/assets/images/loughborough-logo.jpg",
								name: "Loughborough University",
								location: "Central England",
								ranking: 10,
								intake: "Sep 2025",
								score: "IELTS 6.5"
							},
							{
								logo: "/src/assets/images/university-of-bristol-230x90.webp",
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
				</div>
			</div>
		</div>
	);
};

export default Home;
