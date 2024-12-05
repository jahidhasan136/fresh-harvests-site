import LeftHeading from "../../components/subHeading/LeftHeading";
import bgImage from "../../assets/special-offer/bgImg.svg";

const SpecialOffer = () => {
  return (
    <div className="mt-[150px] relative">
      <img
        className="absolute -z-10 w-full object-cover"
        src={bgImage}
        alt="Background Image"
      />
      <div className="container pt-[90px]">
        {/* sub heading */}
        <LeftHeading value="Special Offer" />
        <h1 className="text-black mt-4 mb-2">Seasonal Fruit Bundle</h1>
        <h2 className="text-black mb-8">
          Discount up to <span className="text-primary">80% OFF</span>
        </h2>

        {/* Offer days counter */}
        <div className="flex items-center gap-6">
          <div className="grid gap-[10px] pt-7 pb-[13px] px-6 bg-white shadow-customMd rounded-[10px]">
            <h3>03</h3>
            <p className="text-b2">Days</p>
          </div>
          <div className="grid gap-[10px] pt-7 pb-[13px] px-6 bg-white shadow-customMd rounded-[10px]">
            <h3>18</h3>
            <p className="text-b2">Hour</p>
          </div>
          <div className="grid gap-[10px] pt-7 pb-[13px] px-6 bg-white shadow-customMd rounded-[10px]">
            <h3>54</h3>
            <p className="text-b2">Min</p>
          </div>
          <div className="grid gap-[10px] pt-7 pb-[13px] px-6 bg-white shadow-customMd rounded-[10px]">
            <h3>21</h3>
            <p className="text-b2">Second</p>
          </div>
        </div>
        <h4 className="mt-8 inline-block py-[15px] px-[31px] bg-[#176D38] rounded-full text-white">
          CODE : <span className="text-[#FAC714]">FRUIT28</span>
        </h4>
      </div>
    </div>
  );
};

export default SpecialOffer;
