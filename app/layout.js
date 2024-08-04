import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Superuniform - Quality Uniforms for Security, Schools, and More",
	description:
		"Superuniform offers high-quality uniforms for security personnel, schools, and various other sectors. Experience comfort and durability with our expertly crafted uniforms.",
	charset: "UTF-8",
	viewport: "width=device-width, initial-scale=1.0",
	keywords:
		"superuniform, superuniform.com, superuniform.in, uniforms, security uniforms, school uniforms, housekeeping uniforms, quality uniforms, comfortable uniforms, durable uniforms, professional uniforms, corporate uniforms, healthcare uniforms, chef uniforms, custom uniforms, personalized uniforms, industrial uniforms, workwear, sports uniforms, military uniforms, police uniforms, fire department uniforms, hospitality uniforms",
	author: "Superuniform",
	robots: "index, follow",
	og: {
		title: "Superuniform - Quality Uniforms for Security, Schools, and More",
		description:
			"Superuniform offers high-quality uniforms for security personnel, schools, and various other sectors. Experience comfort and durability with our expertly crafted uniforms.",
		image: "URL_to_image",
		url: "https://superuniform.in",
		type: "website",
		site_name: "Superuniform",
	},
	twitter: {
		card: "summary_large_image",
		title: "Superuniform - Quality Uniforms for Security, Schools, and More",
		description:
			"Superuniform offers high-quality uniforms for security personnel, schools, and various other sectors. Experience comfort and durability with our expertly crafted uniforms.",
		image: "URL_to_image",
		site: "@Superuniform",
		creator: "@Superuniform",
	},
	canonical: "https://superuniform.in",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
