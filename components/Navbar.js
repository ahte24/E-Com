import Link from "next/link";
import React from "react";

const Navbar = () => {
	return (
		<div className=" bg-gray-100 z-20">
			<header className="text-gray-600 body-font">
				<div className="container mx-auto flex p-5 flex-row  items-center justify-between">
					<Link
						href={"/"}
						className="flex title-font items-center text-[#4f46e5] font-bold md:text-2xl text-xl"
					>
						SuperUniform
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
