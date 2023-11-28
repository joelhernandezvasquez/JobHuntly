import Footer from "@/components/Footer/Footer";
import MaxWidthWrapper from "@/components/MaxWidthWrapper/MaxWidthWrapper";
import MobileHeader from "@/components/MobileNavHeader/MobileHeader";
import CTA from "@/home/components/CTA/CTA";
import Hero from "@/home/components/Hero/Hero";
import JobListing from "@/home/components/JobListing/JobListing";
import PrimaryFeatures from "@/home/components/ProductFeatures/PrimaryFeatures";
import SecondaryFeatures from "@/home/components/ProductFeatures/SecondaryFeatures";
import TeamLogos from "@/home/components/TeamLogos/TeamLogos";
import Testimonials from "@/home/components/Testimonials/Testimonials";

export default function Home() {
  return (
    <>
    <main>
      <header>
        <MobileHeader/>
        <Hero/>
      </header>
     
     <section>
      <MaxWidthWrapper>
          <TeamLogos/>
          <PrimaryFeatures/>
          <SecondaryFeatures/>
          <JobListing/>
          <Testimonials/>
          <CTA/>
      </MaxWidthWrapper>
     </section>

    </main>
    
    <footer>
       <Footer/>
    </footer>
    </>
  )
}

