import Image from "next/image";
import Second from "../public/images/image2.jpg";
import First1 from "../public/images/image1.png";
import Five from "../public/images/3rd.png";
import Third from "../public/images/4th.png";
import Fourth from "../public/images/5th.png";

import DarkSection from "@/components/DarkSection";
import AskMeSection from "@/components/AskMeSection";
import PriceSection from "@/components/PriceSection";
import WelcomeSection from "@/components/WelcomeSection";
import CardSection from "@/components/CardSection";
import FooterSection from "@/components/FooterSection";
import TryOutSection from "@/components/TryOutSection";
export default function Home() {
  return (
    <div className=" ">
      
      {
        //NOTE - Welcome Section
      }
      <WelcomeSection />
      {
        //NOTE - Here the cards div started
      }
      <CardSection />
      {
        //!SECTION =  dark theme here
      }
      <DarkSection />

      {
        //NOTE - Ask me answer section starts here
      }
      <AskMeSection />
      {
        //NOTE - Price section here
      }
      <PriceSection />
      {
        //NOTE - Try out section
      }
      <TryOutSection />
      {
        //NOTE - second last section here
      }
      <FooterSection />

      {
        //NOTE - last here
      }
    </div>
  );
}
