import LeftHeading from "../../components/subHeading/LeftHeading";
import offerImg from "../../assets/banner/image.svg";
import appStore from "../../assets/banner/group.svg";
import googlePlay from "../../assets/banner/googleplay.svg";
import specialArrow from "../../assets/banner/arrow.svg";
import person from "../../assets/banner/person.svg";
import mobilePerson from "../../assets/banner/person-mobile.svg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section>
      <div className="container flex items-center relative">
        <img
          className="absolute right-0 bottom-0 md:hidden"
          src={mobilePerson}
          alt=""
        />
        <div className="z-10">
          {/* sub heading components */}
          <LeftHeading value="Welcome to Fresh Harvest" />
          <h1 className="mt-5 mb-4 xl:leading-[94px] text-black xs:text-h2 xl:text-h1">
            Fresh Fruits and Vegetables
          </h1>
          <p className="xs:text-b4 xl:text-b3 text-grey100 xs:mb-6 md:mb-8">
            At Fresh Harvests, we are passionate about providing you with the
            freshest and most flavorful fruits and vegetables
          </p>
          <button className="xs:button3 xl:button1 py-4 px-8 rounded-lg bg-primary hover:bg-white border hover:border-primary hover:text-primary transition-all duration-300 ease-in-out text-white">
            Shop Now
          </button>
          <br />

          {/* special offer card */}
          <div className="flex items-start gap-[33px] xs:mt-[22px] md:mt-[7px] xs:ml-10 md:ml-32 mb-[25px]">
            <img
              className="xs:hidden xl:inline-block"
              src={specialArrow}
              alt=""
            />
            <div className="inline-block bg-[#EBEBEB] rounded-xl py-2 px-5">
              <div className="flex items-center gap-1 ">
                <div>
                  <p className="xs:text-[8px] xl:text-sm text-[#176D38] font-medium xs:mb-[1px] xl:mb-[3px]">
                    Special Offer
                  </p>
                  <p className="xs:text-base xl:text-[28px] font-medium text-black xs:mb-[1px] xl:mb-[3px]">
                    Fresh Salad
                  </p>
                  <p className="xs:text-[9px] xs:text-base font-medium mb-[9px]">
                    <span className="text-[#176D38]">Up to</span>{" "}
                    <span className="xs:text-[13px] xl:text-2xl text-black">
                      70%
                    </span>{" "}
                    off
                  </p>
                  <div>
                    <p className="py-[6px] px-3 font-semibold bg-[#176D38] rounded-full text-white xs:text-[6px] xl:text-xs inline-block">
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
          <img className="xs:hidden md:inline-block" src={person} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
