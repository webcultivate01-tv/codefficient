import React from 'react';
import { motion } from "framer-motion";
import AboutHero from '../components/About/AboutHero';
import AboutAboutPage from '../components/About/AboutAboutPage';
import KnowUs from '../components/About/KnowUs';
import WhatWeDo from '../components/About/WhatWeDo';
import Vision from '../components/About/Vision';
import Mission from '../components/About/Mission';
import Team from '../components/About/Team';
import CallToAction from '../components/About/CallToAction';

export default function AboutPage() {
  

  return (
    <div className="min-h-screen bg-black font-sans antialiased">
      {/* Hero Section */}
       <AboutHero/>
      {/* Main Content */}
      <main className="bg-white">
        {/* About CODEfficient Section */}
        <AboutAboutPage/>
        {/* Know Us Section */}
        <KnowUs/>
        {/* What We Do Section */}
         <WhatWeDo/>
        {/* Our Vision Section */}
        <Vision/>
        {/* Our Mission Section */}
         <Mission/>
        {/* Our Team Section */}
        <Team/>
        {/* Call to Action Section */}
         <CallToAction/>
      </main>
    </div>
  );
}
