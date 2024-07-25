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
			<body className={inter.className}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
