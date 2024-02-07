import { PaymentSection } from '@/components/PaymentsSection'
import { HeroSection } from '../components/HeroSection'
import { ServiceSection } from '@/components/ServiceSection'

export default function Home() {
  return (
    <div className="min-h-screen relative ">
      <HeroSection/>
      <PaymentSection/>
      <ServiceSection/>
    </div>
  )
}
