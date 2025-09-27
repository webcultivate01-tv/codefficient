import EducationalContactPage from "../components/contact/EducationalContactPage";
import AnimatedCards from "../components/contact/AnimatedCards";
import Hero from "../components/contact/ContactHero";

export default function Contact() {
  return (
    <div className="bg-black">
      <Hero/>
      <EducationalContactPage />
      <AnimatedCards/>
    </div>
  );
}
