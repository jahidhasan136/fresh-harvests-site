import LeftHeading from "../../components/subHeading/LeftHeading";
import offerImg from "../../assets/banner/image.svg";
import appStore from "../../assets/banner/group.svg";
import googlePlay from "../../assets/banner/googleplay.svg";
import specialArrow from "../../assets/banner/arrow.svg";
import person from "../../assets/banner/person.svg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section>
      <div className="container flex items-center">
        <div>
          {/* sub heading components */}
          <LeftHeading value="Welcome to Fresh Harvest" />
          <h1 className="mt-5 mb-4 leading-[94px]">
            Fresh Fruits and Vegetables
          </h1>
          <p className="text-b3 text-grey100 mb-8">
            At Fresh Harvests, we are passionate about providing you with the
            freshest and most flavorful fruits and vegetables
          </p>
          <button className="button1 py-4 px-8 rounded-lg bg-primary text-white">
            Shop Now
          </button>
          <br />

          {/* special offer card */}
          <div className="flex items-start gap-[33px]  mt-[7px] ml-32 mb-[25px]">
            <img src={specialArrow} alt="" />
            <div className="inline-block bg-[#EBEBEB] rounded-xl py-2 px-5">
              <div className="flex items-center gap-1 ">
                <div>
                  <p className="text-sm text-[#176D38] font-medium mb-[3px]">
                    Special Offer
                  </p>
                  <p className="text-[28px] font-medium text-black mb-[3px]">
                    Fresh Salad
                  </p>
                  <p className="font-medium mb-[9px]">
                    <span className="text-[#176D38]">Up to</span>{" "}
                    <span className="text-2xl text-black">70%</span> off
                  </p>
                  <div>
                    <p className="py-[6px] px-3 font-semibold bg-[#176D38] rounded-full text-white text-xs inline-block">
                      CODE: <span className="text-[#FAC714]">FRESH25</span>
                    </p>
                  </div>
                </div>
                <img src={offerImg} alt="" />
              </div>
            </div>
          </div>

          {/* download apps */}
          <div className="space-y-3">
            <p className="text-b3 text-grey100">Download App:</p>
            <div className="flex items-center gap-[19px]">
              <Link to="#">
                <img
                  src={appStore}
                  alt="Download on App Store"
                  className="rounded"
                />
              </Link>
              <Link to="#">
                <img
                  src={googlePlay}
                  alt="Get it on Google Play"
                  className="rounded"
                />
              </Link>
            </div>
          </div>
        </div>
        <div>
          <img className="h-[758px]" src={person} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
