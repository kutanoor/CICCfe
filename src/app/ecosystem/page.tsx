import NavbarStyleTwo from "@/components/Layout/NavbarStyleTwo";
import Footer from "@/components/Layout/Footer";
import PageBannerTitle from "@/components/Common/PageBannerTitle";
import AboutUsContent from "@/components/AboutUs/AboutUsContent";
import Benefits from "@/components/HomeThree/Benefits";
import TestimonialSliderFour from "@/components/Common/TestimonialSliderFour";
import TopAuthorSlider from "@/components/Common/TopAuthorSlider";
import Partner from "@/components/Common/Partner";
import Faq from "@/components/AboutUs/Faq";
import FunFacts from "@/components/AboutUs/FunFacts";
import PopularDestination from "@/components/HomeOne/PopularDestination";
import Welcome from "@/components/HomeOne/Welcome";
import MostPopularPlaces from "@/components/HomeOne/MostPopularPlaces";
import Navbar from "@/components/Layout/Navbar";

export default function EcosystemPage() {
	return (
		<>
			<Navbar />
			<div className="">
				<PageBannerTitle
					title='About Ecosystem'
					homeText='Home'
					homeUrl='/'
					image='/images/banner/blockchain.jpeg'
				/>
			</div>

			<Welcome />

			<MostPopularPlaces />

			{/* <AboutUsContent />

			<Benefits />
			<PopularDestination />

			<FunFacts />
			<TestimonialSliderFour /> */}

			{/* <TopAuthorSlider /> */}

			{/* <Faq /> */}

			<Footer />
		</>
	);
}
