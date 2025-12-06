import { Navbar } from "@/components/conference/Navbar";
import { HeroSection } from "@/components/conference/HeroSection";
import { AboutSection } from "@/components/conference/AboutSection";
import { TracksSection } from "@/components/conference/TracksSection";
import { SpeakersSection } from "@/components/conference/SpeakersSection";
import { StatsSection } from "@/components/conference/StatsSection";
import { SubmissionSection } from "@/components/conference/SubmissionSection";
import { ScheduleSection } from "@/components/conference/ScheduleSection";
import { RegistrationSection } from "@/components/conference/RegistrationSection";
import { CollaboratorsSection } from "@/components/conference/CollaboratorsSection";
import { CommitteeSection } from "@/components/conference/CommitteeSection";
import { Footer } from "@/components/conference/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TracksSection />
      <SpeakersSection />
      <StatsSection />
      <SubmissionSection />
      <ScheduleSection />
      <RegistrationSection />
      <CollaboratorsSection />
      <CommitteeSection />
      <Footer />
    </main>
  );
};

export default Index;
