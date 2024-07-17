import NavBar from "@/components/NavBar";
import Steps from "@/components/Landing Page Components/Steps";
import Contribute from "@/components/Landing Page Components/Contribute";
import SideBar from "@/components/Documentation Components/SideBar";

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <NavBar />
      <Steps />
      <Contribute />
    </div>
  );
}
