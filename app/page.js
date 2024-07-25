"use client";
import endpoint from "@/utills/endpoint";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";

const getProducts = async () => {
	const headers = {
		"Content-Type": "application/json",
	};

	try {
		const response = await axios.get(`${endpoint}/api/products`, { headers });
		return response.data;
	} catch (error) {
		console.error("Failed to fetch products:", error);
		return [];
	}
};

const trim = (desc) => {
	return desc.substring(0, 50) + "...";
};

export default function Home() {
	const [allProducts, setAllProducts] = useState([]);

	useEffect(() => {
		async function fetchAndSetProducts() {
			const productsData = await getProducts();
			setAllProducts(productsData);
		}
		fetchAndSetProducts();
	}, []);
	return (
		<>
			<div className="min-h-[80vh]">
				<section
					id="Projects"
					className="w-fit mx-auto grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5 py-10"
				>
					{allProducts.length === 0 ? (
						<p className="text-center text-gray-500">
							No products available at the moment.
						</p>
					) : (
						allProducts.map((product) => (
							<div
								key={product.id}
								className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
							>
								<Link href={`/${product.id}`}>
									<img
										src={`${endpoint}/${product.image}`}
										alt={product.name}
										className="h-80 w-72 object-cover rounded-t-xl"
									/>
									<div className="px-4 py-1 w-72">
										<span className="text-gray-400 mr-3 uppercase text-xs">
											{product.brand}
										</span>
										<p className="text-lg font-bold text-black truncate block capitalize">
											{product.name}
										</p>
										<p className="text-sm">{trim(product.description)}</p>
										<div className="flex items-center">
											<p className="text-lg font-semibold text-black cursor-auto my-3">
												₹ {product.price}
											</p>
										</div>
									</div>
								</Link>
							</div>
						))
					)}
				</section>
			</div>
		</>
	);
}
