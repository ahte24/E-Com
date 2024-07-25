import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Superuniform - Quality Uniforms for Security, Schools, and More",
	description:
		"Superuniform offers high-quality uniforms for security personnel, schools, and various other sectors. Experience comfort and durability with our expertly crafted uniforms.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="title" content="Superuniform - Quality Uniforms for Security, Schools, and More" />
				<meta name="description" content="Superuniform offers high-quality uniforms for security personnel, schools, and various other sectors. Experience comfort and durability with our expertly crafted uniforms." />
				<meta
					name="keywords"
					content="superuniform, superuniform.com, superuniform.in, uniforms, security uniforms, school uniforms, housekeeping uniforms, quality uniforms, comfortable uniforms, durable uniforms, professional uniforms, corporate uniforms, healthcare uniforms, chef uniforms, custom uniforms, personalized uniforms, industrial uniforms, workwear, sports uniforms, military uniforms, police uniforms, fire department uniforms, hospitality uniforms"
				/>
				<meta name="author" content="Superuniform" />
				<meta name="robots" content="index, follow" />
				<meta property="og:title" content="Superuniform - Quality Uniforms for Security, Schools, and More" />
				<meta property="og:description" content="Superuniform offers high-quality uniforms for security personnel, schools, and various other sectors. Experience comfort and durability with our expertly crafted uniforms." />
				<meta property="og:image" content="URL_to_image" />
				<meta property="og:url" content="https://superuniform.in" />
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="Superuniform" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Superuniform - Quality Uniforms for Security, Schools, and More" />
				<meta name="twitter:description" content="Superuniform offers high-quality uniforms for security personnel, schools, and various other sectors. Experience comfort and durability with our expertly crafted uniforms." />
				<meta name="twitter:image" content="URL_to_image" />
				<meta name="twitter:site" content="@Superuniform" />
				<meta name="twitter:creator" content="@Superuniform" />
				<link rel="canonical" href="https://superuniform.in" />
				<link rel="icon" href="URL_to_favicon" type="image/x-icon" />
				<title>Superuniform - Quality Uniforms for Security, Schools, and More</title>
			</head>
			<body className={inter.className}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
