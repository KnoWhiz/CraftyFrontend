import NavBar from '@/components/NavBar'
import PricingHeader from '@/components/Pricing Components/PricingHeader'
import PricingSelection from '@/components/Pricing Components/PricingSelection'

export default function Home() {
  return (
    <div className="h-screen">
      <NavBar />
      <PricingHeader />
      <PricingSelection />
    </div>
  )
}
