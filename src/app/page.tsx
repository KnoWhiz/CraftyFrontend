import NavBar from "@/components/NavBar";
import Demo from "@/components/Demo";
import Footer from "@/components/Footer";
import Steps from "@/components/Steps";

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <NavBar />
      <Demo />
      <Steps />
      <Footer />
    </div>
  );
}
