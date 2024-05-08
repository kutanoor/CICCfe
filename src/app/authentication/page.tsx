import Navbar from "@/components/Layout/Navbar";
import PageBannerTitle from "@/components/Common/PageBannerTitle";
import Footer from "@/components/Layout/Footer";
import Authentication from "@/components/Authentication/Authentication";
import NewsletterForm from "@/components/Common/NewsletterForm";
 
export default function AuthenticationPage() {
  return (
    <>
      <Navbar />
      
      <PageBannerTitle 
        title="Login Register" 
        homeText="Home" 
        homeUrl="/" 
        image="/images/page-banner/page-banner-img-19.jpg"
      />

      <Authentication />

      {/* <NewsletterForm /> */}
    
      <Footer />
    </>
  )
}
