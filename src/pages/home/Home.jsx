import Header from "../../shared/Header";
import Banner from "./Banner";
import bannerBgImage from "../../assets/banner/banner-bg.svg";
import Products from "./Products";
import About from "./About";

const Home = () => {
  return (
    <div>
      {/* header of banner background image add */}
      <div className="relative">
        <img
          className="absolute w-full object-cover h-screen -z-10"
          src={bannerBgImage}
          alt="Banner Background"
        />
        <div>
          <Header />
          <Banner />
        </div>
      </div>
      {/* outhers home sections */}
      <Products />
      <About />
    </div>
  );
};

export default Home;
