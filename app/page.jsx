'use client';


import { FaCar } from 'react-icons/fa';
import HeroHome from "../components/home/HeroHome"
import HomeAboutSection from "../components/home/HomeAboutSection"
import MenuHighlights from "../components/home/MenuHighlights"
import HomeServices from "../components/home/HomeServices"
import HomeGallery from "../components/home/HomeGallery"
import Testimonials from "../components/home/Testimonials"
import HomeContact from "../components/home/HomeContact"

export default function Home() {

  

  return (
    <div >
      <HeroHome />
      <HomeAboutSection />
      <MenuHighlights />
      <HomeServices />
      <HomeGallery />
      <Testimonials />
      <HomeContact />
    </div>
  );
}