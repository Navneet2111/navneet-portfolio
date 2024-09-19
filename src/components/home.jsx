import HeaderMain from "./headerMain";
import AboutUs from "./aboutUs";
import Projects from "./projects";
import Contact from "./contact";
import Technologys from "./technology";
import MyHome from "./myHome";

function Home() {
  return (
    <div className="">
      <HeaderMain />
      <div id="home" className="-mt-8 md:-mt-5">
        <MyHome />
      </div>
      <div id="aboutUs">
        <AboutUs />
      </div>
      <div className="">
        <Technologys />
      </div>
      <div className="">
        <Projects />
      </div>
      <div className=""></div>
      <div id="contact" className="mt-0">
        <Contact />
      </div>
    </div>
  );
}

export default Home;
