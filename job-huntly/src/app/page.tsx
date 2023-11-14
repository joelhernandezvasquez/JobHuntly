import MaxWidthWrapper from "@/components/MaxWidthWrapper/MaxWidthWrapper";
import MobileHeader from "@/components/MobileNavHeader/MobileHeader";
import Hero from "@/home/components/Hero/Hero";
import PrimaryFeatures from "@/home/components/ProductFeatures/PrimaryFeatures";
import SecondaryFeatures from "@/home/components/ProductFeatures/SecondaryFeatures";
import TeamLogos from "@/home/components/TeamLogos/TeamLogos";

export default function Home() {
  return (
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
      </MaxWidthWrapper>
     </section>

    </main>
  )
}

