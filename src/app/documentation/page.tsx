import NavBar from "@/components/NavBar";
import SideBar from "@/components/Documentation Components/SideBar";
import Welcome from "@/components/Documentation Components/Welcome";
import Api from "@/components/Documentation Components/Api";
import Readme from "@/components/Documentation Components/Readme";
import Cli from "@/components/Documentation Components/Cli";

export default function Home() {
  return (
    <div className="h-screen">
      <NavBar />
      <SideBar />
      <Welcome />
      <Api />
      <Readme />
      <Cli />
    </div>
  );
}
