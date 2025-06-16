import GoogleGeminiEffectDemo from "./about/page";
import LandingHero from "./hero/page";
import TimelineDemo from "./experience/page";
import GallerySection from "./gallery/page";
import ProjectSection from "./project/page";
import SkillIconCloud from "./skill/page";

export default function Home() {
  return (
    <div className="w-full">
      <div className=" px-4 sm:px-6 lg:px-8">
        <main className="space-y-16 sm:space-y-12">
          {/* Hero Section */}
          <div id="home" className="pt-16 sm:pt-12">
            <LandingHero />
          </div>

          {/* About Section */}
          <div id="about">
            <GoogleGeminiEffectDemo />
          </div>
        </main>
      </div>

      {/* Experience Section */}
      <div className="mt-24 sm:mt-16" id="experience">
        <TimelineDemo />
      </div>

      {/* Skills Section */}
      <div className="mt-24 sm:mt-16 px-4 sm:px-6 lg:px-8 " id="skills">
        <SkillIconCloud />
      </div>

      {/* Projects Section */}
      <div className="mt-24 sm:mt-16 " id="projects">
        <ProjectSection />
      </div>

      {/* Gallery Section */}
      {/* <div className="mt-24 sm:mt-16 px-4 sm:px-6 lg:px-8 pb-15"  id="gallery">
        <GallerySection />
      </div> */}
    </div>
  );
}
