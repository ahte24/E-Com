import React from "react";
import Link from "next/link";

const Footer = () => {
	return (
		<div>
			<footer className="text-gray-600 body-font bg-gray-100">
				<div className="bg-gray-200">
					<div className="container mx-auto items-center py-4 px-5 flex flex-wrap flex-col sm:flex-row">
						<p className="text-gray-500 text-sm text-center sm:text-left">
							© 2024 Superuniform —
							<span className="text-gray-600 ml-1">All Rights Reserved</span>
						</p>
						<span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
							<Link
								href={"/"}
								className="flex title-font items-center text-[#4f46e5] font-bold md:text-2xl text-xl"
							>
								SuperUniform
							</Link>
						</span>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
