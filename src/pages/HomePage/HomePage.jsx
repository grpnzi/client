
import Map from "./../../components/WorldMap/Map"
import AboutUp from "../../components/AboutUs/AboutUp";
import AboutDown from "../../components/AboutUs/AboutDown";

function HomePage() {
  return (
    <>
      <div>
      <AboutUp/>
      <Map/>
    </div>
    <div>
<AboutDown/>
    </div>
    </>
  );
}

export default HomePage;
