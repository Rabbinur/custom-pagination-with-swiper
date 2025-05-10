"use client";
import Container from "@/components/Common/container/Container";
import Title from "@/components/Common/title/Title";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./style.css";
const exclusiveOffers = [
	{
		id: 1,
		title: "Exclusive Offer",
		description: "Get 10% off on all products",
		image: "/offer/1.avif",
		link: "/promotions",
	},
	{
		id: 1,
		title: "Exclusive Offer",
		description: "Get 10% off on all products",
		image: "/offer/2.avif",
		link: "/promotions",
	},
	{
		id: 2,
		title: "Summer Special",
		description: "Special summer deals up to 20% off",
		image: "/offer/3.avif",
		link: "/summer-deals",
	},
	{
		id: 3,
		title: "Summer Special",
		description: "Special summer deals up to 20% off",
		image: "/offer/4.avif",
		link: "/summer-deals",
	},
	{
		id: 4,
		title: "Summer Special",
		description: "Special summer deals up to 20% off",
		image: "/offer/5.avif",
		link: "/summer-deals",
	},
	{
		id: 5,
		title: "Summer Special",
		description: "Special summer deals up to 20% off",
		image: "/offer/6.avif",
		link: "/summer-deals",
	},
	{
		id: 6,
		title: "Summer Special",
		description: "Special summer deals up to 20% off",
		image: "/offer/7.avif",
		link: "/summer-deals",
	},
	{
		id: 7,
		title: "Summer Special",
		description: "Special summer deals up to 20% off",
		image: "/offer/8.avif",
		link: "/summer-deals",
	},
	{
		id: 8,
		title: "Summer Special",
		description: "Special summer deals up to 20% off",
		image: "/offer/9.avif",
		link: "/summer-deals",
	},
];

const ExclusiveOffers = () => {
	const paginationRef = useRef(null);

	return (
		<div className="w-full bg-[#f7f9fb] py-8">
			<Container className=" px-4 relative">
				<Title align="left" size="large">
					Excluseive Offers
				</Title>
				<Swiper
					modules={[Pagination, Autoplay]}
					spaceBetween={24}
					slidesPerView={3}
					slidesPerGroup={3}
					pagination={{
						// dynamicBullets: true,
						clickable: true,
						el: ".custom-bullets",
					}}
					slideToClickedSlide
					autoplay={{ delay: 3000, disableOnInteraction: false }}
					loop={true}
					breakpoints={{
						320: { slidesPerView: 1, slidesPerGroup: 1 },
						640: { slidesPerView: 2, slidesPerGroup: 2 },
						1024: { slidesPerView: 3, slidesPerGroup: 3 },
					}}
					className="w-full"
				>
					{exclusiveOffers.map((offer) => (
						<SwiperSlide key={offer.id}>
							<Link href={offer.link} className="block w-full ">
								<div className="relative w-full h-full rounded-xl overflow-hidden shadow-md">
									<Image
										src={offer.image}
										alt={offer.title}
										width={400}
										height={100}
										className="object-contain"
										priority={true}
									/>
								</div>
							</Link>
						</SwiperSlide>
					))}
				</Swiper>

				<div className="custom-bullets flex justify-center items-center mt-6 space-x-2" />
			</Container>
		</div>
	);
};

export default ExclusiveOffers;
