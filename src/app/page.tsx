import NavBar from "@/components/Landing Page Components/NavBar";
import Demo from "@/components/Landing Page Components/Demo";
import Footer from "@/components/Landing Page Components/Footer";
import Steps from "@/components/Landing Page Components/Steps";
import Features from "@/components/Landing Page Components/Features";
import Contribute from "@/components/Landing Page Components/Contribute";

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <NavBar />
      <Demo />
      <Steps />
      <Features />
      <Contribute />
      <Footer />
    </div>
  );
}
