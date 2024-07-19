import NavBar from "@/components/NavBar";
import SideBar from "@/components/Documentation Components/SideBar";
import Welcome from "@/components/Documentation Components/Welcome";
import Api from "@/components/Documentation Components/Api";
import Readme from "@/components/Documentation Components/Readme";

export default function Home() {
  return (
    <div>
      <NavBar />
      <SideBar />
      <Welcome />
      <Api />
      <Readme />
    </div>
  );
}
