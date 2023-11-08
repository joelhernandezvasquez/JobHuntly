import MaxWidthWrapper from "@/components/MaxWidthWrapper/MaxWidthWrapper";
import MobileHeader from "@/components/MobileNavHeader/MobileHeader";
import Hero from "@/home/components/Hero/Hero";
import PrimaryFeatures from "@/home/components/ProductFeatures/PrimaryFeatures";
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
      </MaxWidthWrapper>
     </section>

    </main>
  )
}
import { NextResponse, NextRequest } from "next/server";

interface Segments{
    params:{
        search:string
    }
}
export async function GET(request:Request,response:NextResponse,{params}:Segments) {
    const {searchParams} = new URL(request.url);
    const experienceLevel = searchParams.get('experienceLevel');
    
    return NextResponse.json({keyword:params.search});
    
}
