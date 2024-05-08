import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import PageBannerTitle from "@/components/Common/PageBannerTitle";
import NewsletterForm from "@/components/Common/NewsletterForm";
import StayDetailsContent from "@/components/StayDetails/StayDetailsContent"; 
// import ChoosingListingCategories from "@/components/AddListing/ChoosingListingCategories";

export default function StayDetailsPage() {
  return (
    <>
      <Navbar />

      <PageBannerTitle 
        title="Pool Details" 
        homeText="Home" 
        homeUrl="/" 
        image="/images/banner/dubai9.jpg"
      />

      <StayDetailsContent />
      {/* <ChoosingListingCategories/> */}
 
      {/* <NewsletterForm /> */}
  
      <Footer />
    </>
  )
}
