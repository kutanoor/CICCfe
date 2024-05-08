
"use client"; // Add this line to mark the parent component as a client entry
import Navbar from "@/components/Layout/Navbar";
import DiscoverGreatPlaces from "@/components/Common/DiscoverGreatPlaces";
import NewsletterForm from "@/components/Common/NewsletterForm";
import TestimonialSlider from "@/components/Common/TestimonialSlider";
import TopAuthor from "@/components/Common/TopAuthor";
import Benefits from "@/components/HomeOne/Benefits";
import DiscountOfferTrip from "@/components/HomeOne/DiscountOfferTrip";
import HeroBanner from "@/components/HomeOne/HeroBanner";
import HowItWorks from "@/components/HomeOne/HowItWorks";
import MostPopularPlaces from "@/components/HomeOne/MostPopularPlaces";
import OurHottestVideos from "@/components/HomeOne/OurHottestVideos";
import Partner from "@/components/HomeOne/Partner";
import PopularDestination from "@/components/HomeOne/PopularDestination";
import Welcome from "@/components/HomeOne/Welcome";
import WhyChooseUs from "@/components/HomeOne/WhyChooseUs";
import Footer from "@/components/Layout/Footer";
import ContactInfo from "@/components/ContactUs/ContactInfo";
import TermsConditionsContent from "@/components/TermsConditions/TermsConditionsContent";
import PrivacyPolicyContent from "@/components/PrivacyPolicy/PrivacyPolicyContent";
import ExperienceCardContent from "@/components/Experiences/ExperienceCardContent";
import ExperienceCardWithMapContent from "@/components/Experiences/ExperienceCardWithMapContent";
import Home2 from "./home-2/page";
import Home3 from "./home-3/page";
import BlogDetailsPage from "./blog/blog-details/page";
import BlogDetailsContent from "@/components/Blog/BlogDetailsContent";
import AboutUsContent from "@/components/AboutUs/AboutUsContent";
import AboutUsPage from "./about-us/page";

export default function Home() {
	return (
		<>
			<Navbar />

			<HeroBanner />

			<Partner />

			<Benefits />

			<PopularDestination />

			<Welcome />

			<MostPopularPlaces />

			{/* <HowItWorks /> */}

			{/* <DiscountOfferTrip /> */}

			<WhyChooseUs />

			{/* <TopAuthor /> */}

			{/* <TestimonialSlider /> */}

      {/* <BlogDetailsContent/> */}
      {/* <AboutUsContent/> */}
      {/* <AboutUsPage/> */}
			{/* <DiscoverGreatPlaces /> */}

			<OurHottestVideos />

			{/* <NewsletterForm /> */}

			<Footer />
		</>
	);
}
