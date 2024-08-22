import NavBar from '@/components/NavBar'
import Footer from '@/components/Landing Page Components/Footer'
import Features from '@/components/Landing Page Components/Features'
import Contribute from '@/components/Landing Page Components/Contribute'
import Introduction from '@/components/Landing Page Components/Introduction'
import Demo from '@/components/Landing Page Components/Demo'

export default function Home() {
  return (
    <div className="h-screen">
      <Introduction />
      <Demo />
      <Features />
      <Contribute />
      <Footer />
      <NavBar />
    </div>
  )
}
