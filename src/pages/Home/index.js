import './home.css'
import LeadSection from '../../components/home/LeadSection'
import UltraLimeSection from '../../components/home/UltraLimeSection'
import CatalogSection from '../../components/home/CatalogSection'
import BestSellerSection from '../../components/home/BestSellerSection'
import AccordionSection from '../../components/home/AccordionSection'
import AyoKawanSection from '../../components/home/AyoKawanSection'
import Footer from '../../components/layout/Footer'

function Index() {
  return (
    <main>
      <LeadSection />
      <UltraLimeSection />
      <AccordionSection />
      <AyoKawanSection />
      <CatalogSection />
      <BestSellerSection />
      <Footer />
    </main>
  )
}

export default Index
