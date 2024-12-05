import person from "../../assets/about/person.svg";
import logo from "../../assets/about/logo.svg";
import productImg from "../../assets/about/product.svg";
import tree from "../../assets/about/tree.svg";
import vector from "../../assets/about/vector.svg";
import LeftHeading from "../../components/subHeading/LeftHeading";

const About = () => {
  return (
    <div className="container mt-[150px]">
      <div className="grid grid-cols-2 items-center gap-[65px]">
        {/* left side about image or card */}
        <div className="relative">
          <img src={person} alt="About Person Image" />
          <img className="absolute top-0 right-0" src={tree} alt="" />
          <div className="absolute -bottom-20 right-10">
            <div className="mb-4 flex gap-[19px]">
              <div className="bg-white px-[13px] py-[9px] rounded-lg">
                <img src={logo} alt="Logo" />
              </div>
              <img src={vector} alt="Vector Icon" />
            </div>

            {/* about product card */}
            <div className="shadow-customMd bg-white pt-[5px] pb-[10px] px-[6px] rounded-[20px] text-center inline-block ml-28">
              <div className="mb-[6px] bg-grey20 inline-block px-[29px] py-1 rounded-2xl">
                <img src={productImg} alt="Product Image" />
              </div>
              <p className="mb-1 font-medium text-[9px]">Mushroom</p>
              <p className="text-[9px] mb-[6px]">$2.3/kg</p>
              <button className="button3 py-[6px] border border-grey50 text-black w-full rounded-lg hover:bg-primary hover:text-white transition-all duration-300 ease-in-out">
                Add to cart
              </button>
            </div>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="grid gap-4">
          {/* sub heading */}
          <LeftHeading value="About us" />
          <h2 className="text-black">About Fresh Harvest</h2>
          <p className="text-b3 text-grey100">
            Welcome to Fresh Harvest, your premier destination for high-quality
            and fresh produce. We are passionate about providing you with the
            finest fruits, vegetables, and salad ingredients to nourish your
            body and delight your taste buds. With a commitment to excellence,
            sustainability, and customer satisfaction, Fresh Harvest is here to
            revolutionize your grocery shopping experience.
          </p>
          <div>
            <button className="button1 px-8 py-4 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300 ease-in-out">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
