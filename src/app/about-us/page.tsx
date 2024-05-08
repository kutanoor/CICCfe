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
import Navbar from "@/components/Layout/Navbar";
import TeamComponent from "@/components/AboutUs/Team";

export default function AboutUsPage() {
  return (
		<>
			<Navbar />

			<PageBannerTitle
				title='About CICC estateDAO'
				homeText='Home'
				homeUrl='/'
				image='/images/banner/dalle2.webp'
			/>

			<AboutUsContent />

			<Benefits />
			<PopularDestination />

			<FunFacts />
			<TeamComponent/>
			{/* <TestimonialSliderFour /> */}

			{/* <TopAuthorSlider /> */}

			{/* <Faq /> */}

			<Footer />
		</>
  );
}
