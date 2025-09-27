import React from 'react';
import { motion } from "framer-motion";
import AboutHero from '../components/About/AboutHero.jsx';
import AboutAboutPage from '../components/About/AboutAboutPage.jsx';
import KnowUs from '../components/About/KnowUs.jsx';
import WhatWeDo from '../components/About/WhatWeDo.jsx';
import Vision from '../components/About/Vision.jsx';
import Mission from '../components/About/Mission.jsx';
import Team from '../components/About/Team.jsx';
import CallToAction from '../components/About/CallToAction.jsx';

export default function About() {
  
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
