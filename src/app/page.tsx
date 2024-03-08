import Image from "next/image";

import NavbarC from "@/components/Navbar";
import SliderUi from "@/components/SliderUi";
import TimelineUi from "@/components/TimelineUi";
import MyProduct from "@/components/MyProduct";
import FooterUi from "@/components/FooterUi";

export default function Home() {
  return (
  <>
  <div className=" w-10/12 bg-black mx-auto">
     <NavbarC/>
      
      <SliderUi/>
      <TimelineUi/>
      <MyProduct/>
      <FooterUi/>
  </div>
 
  </>
  );
}
