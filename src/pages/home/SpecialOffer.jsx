import LeftHeading from "../../components/subHeading/LeftHeading";
import bgImage from "../../assets/special-offer/bgImg.svg";
import CenterHeading from "../../components/subHeading/CenterHeading";

const SpecialOffer = () => {
  return (
    <div className="xs:mt-[64px] lg:mt-[150px] relative">
      <img
        className="absolute -z-10 w-full h-full object-cover"
        src={bgImage}
        alt="Background Image"
      />
      <div className="container py-[90px]">
        {/* sub heading */}
        <div className="xs:hidden lg:inline-block">
          <LeftHeading value="Special Offer" />
        </div>
        {/* mobile design sub heading */}
        <div className="lg:hidden">
          <CenterHeading value="Special Offer" />
        </div>
        <h1 className="text-black xs:text-h2 lg:text-h1 xs:mt-3 lg:mt-4 mb-2 xs:text-center lg:text-left">
          Seasonal Fruit Bundle
        </h1>
        <h2 className="text-black xs:text-h4 lg:text-h2 mb-8 xs:text-center lg:text-left">
          Discount up to <span className="text-primary">80% OFF</span>
        </h2>

        {/* Offer days counter */}
        <div className="flex xs:justify-center lg:justify-start items-center gap-6">
          <div className="grid gap-[10px] xs:pt-5 lg:pt-7 xs:pb-[9px] lg:pb-[13px] xs:px-[19px] lg:px-6 bg-white shadow-customMd rounded-[10px]">
            <h3 className="xs:text-h5 lg:text-h3">03</h3>
            <p className="xs:text-xs lg:text-b2">Days</p>
          </div>
          <div className="grid gap-[10px] xs:pt-5 lg:pt-7 xs:pb-[9px] lg:pb-[13px] xs:px-[19px] lg:px-6 bg-white shadow-customMd rounded-[10px]">
            <h3 className="xs:text-h5 lg:text-h3">18</h3>
            <p className="xs:text-xs lg:text-b2">Hour</p>
          </div>
          <div className="grid gap-[10px] xs:pt-5 lg:pt-7 xs:pb-[9px] lg:pb-[13px] xs:px-[19px] lg:px-6 bg-white shadow-customMd rounded-[10px]">
            <h3 className="xs:text-h5 lg:text-h3">54</h3>
            <p className="xs:text-xs lg:text-b2">Min</p>
          </div>
          <div className="grid gap-[10px] xs:pt-5 lg:pt-7 xs:pb-[9px] lg:pb-[13px] xs:px-[19px] lg:px-6 bg-white shadow-customMd rounded-[10px]">
            <h3 className="xs:text-h5 lg:text-h3">21</h3>
            <p className="xs:text-xs lg:text-b2">Second</p>
          </div>
        </div>
        <div className="xs:text-center lg:text-left">
          <h4 className="xs:text-h5 lg:text-h4 mt-8 inline-block py-[15px] px-[31px] bg-[#176D38] rounded-full text-white">
            CODE : <span className="text-[#FAC714]">FRUIT28</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
