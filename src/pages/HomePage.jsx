import { SEO } from '@/components/common'
import {
  HeroSection,
  FormationsSection,
  StatsSection,
  TestimonialsSection,
  MethodSection,
  FinancingSection,
  PartnersSection,
  CTASection,
} from '@/components/sections'

const HomePage = () => {
  return (
    <>
      <SEO
        title="Centre de Formation Professionnelle"
        description="Avenir&Progres, centre de formation certifié Qualiopi. Titres professionnels RNCP en alternance : Conseiller Commercial et Graphiste. Formation 100% financée et rémunérée."
        keywords="formation professionnelle, titre professionnel, alternance, RNCP, graphiste, conseiller commercial, reconversion, Avenir&Progres, formation adulte"
      />
      
      <HeroSection />
      <StatsSection />
      <FormationsSection />
      <MethodSection />
      <TestimonialsSection />
      <FinancingSection />
      <PartnersSection />
      <CTASection />
    </>
  )
}

export default HomePage
