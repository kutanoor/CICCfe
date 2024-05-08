import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import NewsletterForm from "@/components/Common/NewsletterForm";
import PageBanner from "@/components/Stay/PageBanner";
// import BookingSearchFrom from "@/components/homeOne/HeroBanner/BookingSearchFrom";

import ListingCardContent from "@/components/Stay/ListingCardContent";
import OurHottestNearbyCities from "@/components/Common/OurHottestNearbyCities";
import TopAuthorStyleTwo from "@/components/Common/TopAuthorStyleTwo";
import BookingSearchForm from "@/components/HomeOne/HeroBanner/BookingSearchForm";

export default function StayPage() {
	return (
		<>
			<Navbar />

			<PageBanner />

			<div className="md:w-[65%] w-[95%]  mt-3 ml-2 md:ml-8">
				<BookingSearchForm />
			</div>

			{/* <BookingSearchFrom /> */}

			<ListingCardContent />

			<div className='bg-color-fff7ed'>
				{/* <OurHottestNearbyCities /> */}
			</div>

			{/* <TopAuthorStyleTwo /> */}

			{/* <NewsletterForm /> */}

			<Footer />
		</>
	);
}
