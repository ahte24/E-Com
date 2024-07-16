import Link from "next/link";
import React from "react";

const Navbar = () => {
	return (
		<div className=" bg-gray-100 z-20">
			<header className="text-gray-600 body-font">
				<div className="container mx-auto flex p-5 flex-row  items-center justify-between">
					<Link
						href={"/"}
						className="flex title-font font-medium items-center text-gray-900 "
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
							viewBox="0 0 24 24"
						>
							<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
						</svg>
						<span className="ml-3 text-xl">LOGO</span>
					</Link>
					<Link
						href={"/about"}
						className="inline-flex items-center bg-gray-100 border-0 py-2 px-3 focus:outline-none hover:bg-gray-200 rounded-lg text-base "
					>
						About Us
						<svg
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							className="w-4 h-4 ml-1"
							viewBox="0 0 24 24"
						>
							<path d="M5 12h14M12 5l7 7-7 7"></path>
						</svg>
					</Link>
				</div>
			</header>
		</div>
	);
};

export default Navbar;
