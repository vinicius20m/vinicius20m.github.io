import React from 'react';
import Hero from '../../sections/Hero';
import ProjectsSection from '../../sections/ProjectsSection';
import SkillsSection from '../../sections/SkillsSection';
import AboutSection from '../../sections/AboutSection';
import ExperienceSection from '../../sections/ExperienceSection';
import CertificatesSection from '../../sections/CertificatesSection';
import ContactSection from '../../sections/ContactSection';
// import EmblaTestCarousel from '../../components/EmblaTestCarousel';

export default function Body() {
  return (
    <main className="flex-1 mx-auto lg:max-w-7xl max-w-full px-1.5 md:px-10 lg:px-24">
      <Hero />
      <ExperienceSection />
      <CertificatesSection />
      <SkillsSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
