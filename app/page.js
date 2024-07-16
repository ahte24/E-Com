"use client";
import endpoint from "@/utills/endpoint";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";

const getProducts = async () => {
	const headers = {
		"Content-Type": "application/json",
		// Add other headers as needed
		// 'Authorization': 'Bearer your_token_here',
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
			<div className="h-screen">
				<section
					id="Projects"
					className="w-fit mx-auto grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5 py-10"
				>
					{allProducts.map((product) => (
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
											${product.price}
										</p>
									</div>
								</div>
							</Link>
						</div>
					))}

					{/* <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
					<Link href="/product">
						<img
							src="https://images.unsplash.com/photo-1651950537598-373e4358d320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
							alt="Product"
							className="h-80 w-72 object-cover rounded-t-xl"
						/>
						<div className="px-4 py-3 w-72">
							<span className="text-gray-400 mr-3 uppercase text-xs">
								Brand
							</span>
							<p className="text-lg font-bold text-black truncate block capitalize">
								Product Name
							</p>
							<div className="flex items-center">
								<p className="text-lg font-semibold text-black cursor-auto my-3">
									$149
								</p>
								<del>
									<p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
								</del>
							</div>
						</div>
					</Link>
				</div>
				<div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
					<Link href="/product">
						<img
							src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
							alt="Product"
							className="h-80 w-72 object-cover rounded-t-xl"
						/>
						<div className="px-4 py-3 w-72">
							<span className="text-gray-400 mr-3 uppercase text-xs">
								Brand
							</span>
							<p className="text-lg font-bold text-black truncate block capitalize">
								Product Name
							</p>
							<div className="flex items-center">
								<p className="text-lg font-semibold text-black cursor-auto my-3">
									$149
								</p>
								<del>
									<p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
								</del>
							</div>
						</div>
					</Link>
				</div>
				<div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
					<Link href="/product">
						<img
							src="https://images.unsplash.com/photo-1651950537598-373e4358d320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
							alt="Product"
							className="h-80 w-72 object-cover rounded-t-xl"
						/>
						<div className="px-4 py-3 w-72">
							<span className="text-gray-400 mr-3 uppercase text-xs">
								Brand
							</span>
							<p className="text-lg font-bold text-black truncate block capitalize">
								Product Name
							</p>
							<div className="flex items-center">
								<p className="text-lg font-semibold text-black cursor-auto my-3">
									$149
								</p>
								<del>
									<p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
								</del>
							</div>
						</div>
					</Link>
				</div> */}
					{/* <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
					<Link href="/product">
						<img
							src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
							alt="Product"
							className="h-80 w-72 object-cover rounded-t-xl"
						/>
						<div className="px-4 py-3 w-72">
							<span className="text-gray-400 mr-3 uppercase text-xs">
								Brand
							</span>
							<p className="text-lg font-bold text-black truncate block capitalize">
								Product Name
							</p>
							<div className="flex items-center">
								<p className="text-lg font-semibold text-black cursor-auto my-3">
									$149
								</p>
								<del>
									<p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
								</del>
							</div>
						</div>
					</Link>
				</div>

				<div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
					<Link href="/product">
						<img
							src="https://images.unsplash.com/photo-1651950537598-373e4358d320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
							alt="Product"
							className="h-80 w-72 object-cover rounded-t-xl"
						/>
						<div className="px-4 py-3 w-72">
							<span className="text-gray-400 mr-3 uppercase text-xs">
								Brand
							</span>
							<p className="text-lg font-bold text-black truncate block capitalize">
								Product Name
							</p>
							<div className="flex items-center">
								<p className="text-lg font-semibold text-black cursor-auto my-3">
									$149
								</p>
								<del>
									<p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
								</del>
							</div>
						</div>
					</Link>
				</div>
				<div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
					<Link href="/product">
						<img
							src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
							alt="Product"
							className="h-80 w-72 object-cover rounded-t-xl"
						/>
						<div className="px-4 py-3 w-72">
							<span className="text-gray-400 mr-3 uppercase text-xs">
								Brand
							</span>
							<p className="text-lg font-bold text-black truncate block capitalize">
								Product Name
							</p>
							<div className="flex items-center">
								<p className="text-lg font-semibold text-black cursor-auto my-3">
									$149
								</p>
								<del>
									<p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
								</del>
							</div>
						</div>
					</Link>
				</div>

				<div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
					<Link href="/product">
						<img
							src="https://images.unsplash.com/photo-1651950537598-373e4358d320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
							alt="Product"
							className="h-80 w-72 object-cover rounded-t-xl"
						/>
						<div className="px-4 py-3 w-72">
							<span className="text-gray-400 mr-3 uppercase text-xs">
								Brand
							</span>
							<p className="text-lg font-bold text-black truncate block capitalize">
								Product Name
							</p>
							<div className="flex items-center">
								<p className="text-lg font-semibold text-black cursor-auto my-3">
									$149
								</p>
								<del>
									<p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
								</del>
							</div>
						</div>
					</Link>
				</div>
				<div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
					<Link href="/product">
						<img
							src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
							alt="Product"
							className="h-80 w-72 object-cover rounded-t-xl"
						/>
						<div className="px-4 py-3 w-72">
							<span className="text-gray-400 mr-3 uppercase text-xs">
								Brand
							</span>
							<p className="text-lg font-bold text-black truncate block capitalize">
								Product Name
							</p>
							<div className="flex items-center">
								<p className="text-lg font-semibold text-black cursor-auto my-3">
									$149
								</p>
								<del>
									<p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
								</del>
							</div>
						</div>
					</Link>
				</div>

				<div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
					<Link href="/product">
						<img
							src="https://images.unsplash.com/photo-1651950537598-373e4358d320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
							alt="Product"
							className="h-80 w-72 object-cover rounded-t-xl"
						/>
						<div className="px-4 py-3 w-72">
							<span className="text-gray-400 mr-3 uppercase text-xs">
								Brand
							</span>
							<p className="text-lg font-bold text-black truncate block capitalize">
								Product Name
							</p>
							<div className="flex items-center">
								<p className="text-lg font-semibold text-black cursor-auto my-3">
									$149
								</p>
								<del>
									<p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
								</del>
							</div>
						</div>
					</Link>
				</div>
				<div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
					<Link href="/product">
						<img
							src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
							alt="Product"
							className="h-80 w-72 object-cover rounded-t-xl"
						/>
						<div className="px-4 py-3 w-72">
							<span className="text-gray-400 mr-3 uppercase text-xs">
								Brand
							</span>
							<p className="text-lg font-bold text-black truncate block capitalize">
								Product Name
							</p>
							<div className="flex items-center">
								<p className="text-lg font-semibold text-black cursor-auto my-3">
									$149
								</p>
								<del>
									<p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
								</del>
							</div>
						</div>
					</Link>
				</div>

				<div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
					<Link href="/product">
						<img
							src="https://images.unsplash.com/photo-1651950537598-373e4358d320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
							alt="Product"
							className="h-80 w-72 object-cover rounded-t-xl"
						/>
						<div className="px-4 py-3 w-72">
							<span className="text-gray-400 mr-3 uppercase text-xs">
								Brand
							</span>
							<p className="text-lg font-bold text-black truncate block capitalize">
								Product Name
							</p>
							<div className="flex items-center">
								<p className="text-lg font-semibold text-black cursor-auto my-3">
									$149
								</p>
								<del>
									<p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
								</del>
							</div>
						</div>
					</Link>
				</div> */}
				</section>
			</div>
		</>
	);
}
