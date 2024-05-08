import Slider from "react-slick";

const ImageSlider = ({ images }: any) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<Slider {...settings}>
			{images.map((image: any, index: any) => (
				<div key={index}>
					<img
						src={image}
						alt={`Property Image ${index + 1}`}
						className='h-[500px] w-full'
					/>
				</div>
			))}
		</Slider>
	);
};
export default ImageSlider;
