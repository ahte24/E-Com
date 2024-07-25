"use client";

import Slider from "react-slick";
import React, { useEffect, useState } from "react";
import endpoint from "@/utills/endpoint";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/app/globals.css";

const Page = ({ params }) => {
	const [quantity, setQuantity] = useState(1);
	const [productData, setProductData] = useState({
		image: "",
		image2: "",
		image3: "",
		name: "",
		description: "",
		price: 0,
	});

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					`${endpoint}/api/products/${params.productID}`,
					{
						method: "GET",
						headers: {
							"Content-Type": "application/json",
						},
					}
				);

				if (response.ok) {
					const data = await response.json();
					setProductData(data);
				} else {
					console.error("Error fetching the product:", response.statusText);
				}
			} catch (error) {
				console.error("Error fetching the product:", error);
			}
		};

		fetchData();
	}, [params.productID]); // Correct dependency for useEffect to only re-run when params.productID changes

	const redirectToWhatsApp = () => {
		const whatsappMessage = `Hello! Can I get more info on this?\n\nProduct Name: ${productData.name}\nProduct Description: ${productData.description}\nPrice: ₹${productData.price}/unit \n\nLink:\n ${window.location.href}`;
		const whatsappURL = `https://wa.me/9891055087?text=${encodeURIComponent(
			whatsappMessage
		)}`;
		window.open(whatsappURL, "_blank");
	};

	const images = [
		productData.image,
		productData.image2,
		productData.image3,
	].filter(Boolean);

	const hasMultipleImages = images.length > 1;

	const settings = {
		dots: true,
		infinite: hasMultipleImages, // Only enable infinite loop if more than one image
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true, // If your images vary in height, this can help manage layout shifts
	};

	return (
		<section className="text-gray-600 body-font overflow-hidden min-h-screen">
			<div className="container px-5 py-10 mx-auto">
				<div className="lg:w-4/5 mx-auto flex flex-wrap">
					<div className="lg:w-1/2 w-full">
						<Slider {...settings}>
							{images.length > 0 ? (
								images.map((img, index) => (
									<div key={index}>
										<img
											alt="ecommerce"
											className="lg:h-[75vh] w-full h-64 object-contain bg-gray-100 object-center rounded"
											src={`${endpoint}${img}`}
										/>
									</div>
								))
							) : (
								<div>No Image Available</div> // Show this if no images are available
							)}
						</Slider>
					</div>
					<div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
						<h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
							{productData.name}
						</h1>

						<p className="leading-relaxed ">{productData.description}</p>

						<div className="flex mt-10 items-center">
							<span className="title-font font-medium text-2xl text-gray-900">
								₹ {productData.price}
							</span>
							<button
								className="flex ml-auto text-white bg-[#25d366] border-0 py-2 px-3 focus:outline-none hover:bg-[#1ca04d] rounded"
								onClick={redirectToWhatsApp}
							>
								Contact via WhatsApp
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Page;
