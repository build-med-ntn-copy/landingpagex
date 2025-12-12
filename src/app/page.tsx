import Navigation from "@/components/sections/navigation";
import HeroSection from "@/components/sections/hero";
import AcademicWorkflows from "@/components/sections/academic-workflows";
import UnderstandFiles from "@/components/sections/understand-files";
import ScholarlyAnswersSection from "@/components/sections/scholarly-answers";
// import FlashcardsSection from "@/components/sections/flashcards";
// import SearchableLibrary from "@/components/sections/searchable-library";
import TrustedMetrics from "@/components/sections/trusted-metrics";
import TestimonialsSection from "@/components/sections/testimonials";
import FaqSection from "@/components/sections/faq";
import FinalCta from "@/components/sections/final-cta";
import Footer from "@/components/sections/footer";
import Particles from "@/components/Particles";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Particle Animation Background */}
      <div className="fixed inset-0 z-0">
        <Particles
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleColors={['#ffffff', '#ffffff']}
          moveParticlesOnHover={true}
          particleHoverFactor={1}
          alphaParticles={false}
          particleBaseSize={100}
          sizeRandomness={1}
          cameraDistance={20}
          disableRotation={false}
        />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10">
        <Navigation />
        
        <main className="pt-16 md:pt-[88px]">
          <div className="px-6 lg:px-8">
            <div className="py-24 md:py-32">
              <HeroSection />
            </div>
            
            <div className="px-3 md:px-7">
              <AcademicWorkflows />
              <UnderstandFiles />
              <ScholarlyAnswersSection />
              {/* FlashcardsSection commented out per request */}
              {/* SearchableLibrary section commented out per request */}
            </div>
          </div>
          
          {/* <TrustedMetrics /> */}
          <TestimonialsSection />
          {/* <FaqSection /> */}
          <FinalCta />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}
