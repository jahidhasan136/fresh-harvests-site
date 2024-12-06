import CenterHeading from "../components/subHeading/CenterHeading";
import imageOne from "../assets/products/image1.svg";

const RelatedProducts = () => {
  return (
    <div className="container xs:mt-[64px] xl:mt-[150px]">
      {/* sub heading */}
      <CenterHeading value="Our Products" />
      <div className="grid gap-4 text-center mt-4 mb-8">
        <h2 className="xs:text-h4 xl:text-h2">Related products</h2>
        <p className="xs:text-b4 xl:text-b3">
          We pride ourselves on offering a wide variety of fresh and flavorful
          fruits, vegetables, and salad ingredients.
        </p>
      </div>

      {/* Related product cards */}
      <div className="grid xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div className="pt-[10px] pb-5 px-3 rounded-[20px] text-center shadow-customMd bg-white">
          <div className="mb-3 bg-grey20 inline-block px-[29px] py-1 rounded-2xl">
            <img src={imageOne} alt="Product Image" />
          </div>
          <h6 className="xs:mb-1 md:mb-2 xs:text-h7 md:text-h6">Mushroom</h6>
          <p className="xs:text-[12px] md:text-b2 xs:mb-[6px] md:mb-3">
            $2.3/kg
          </p>
          <button className="xs:text-[11px] md:text-lg md:button2 py-3 border border-grey50 text-black w-full rounded-lg hover:bg-primary hover:text-white transition-all duration-300 ease-in-out">
            Add to cart
          </button>
        </div>
        <div className="pt-[10px] pb-5 px-3 rounded-[20px] text-center shadow-customMd bg-white">
          <div className="mb-3 bg-grey20 inline-block px-[29px] py-1 rounded-2xl">
            <img src={imageOne} alt="Product Image" />
          </div>
          <h6 className="xs:mb-1 md:mb-2 xs:text-h7 md:text-h6">Mushroom</h6>
          <p className="xs:text-[12px] md:text-b2 xs:mb-[6px] md:mb-3">
            $2.3/kg
          </p>
          <button className="xs:text-[11px] md:text-lg md:button2 py-3 border border-grey50 text-black w-full rounded-lg hover:bg-primary hover:text-white transition-all duration-300 ease-in-out">
            Add to cart
          </button>
        </div>
        <div className="pt-[10px] pb-5 px-3 rounded-[20px] text-center shadow-customMd bg-white">
          <div className="mb-3 bg-grey20 inline-block px-[29px] py-1 rounded-2xl">
            <img src={imageOne} alt="Product Image" />
          </div>
          <h6 className="xs:mb-1 md:mb-2 xs:text-h7 md:text-h6">Mushroom</h6>
          <p className="xs:text-[12px] md:text-b2 xs:mb-[6px] md:mb-3">
            $2.3/kg
          </p>
          <button className="xs:text-[11px] md:text-lg md:button2 py-3 border border-grey50 text-black w-full rounded-lg hover:bg-primary hover:text-white transition-all duration-300 ease-in-out">
            Add to cart
          </button>
        </div>
        <div className="pt-[10px] pb-5 px-3 rounded-[20px] text-center shadow-customMd bg-white">
          <div className="mb-3 bg-grey20 inline-block px-[29px] py-1 rounded-2xl">
            <img src={imageOne} alt="Product Image" />
          </div>
          <h6 className="xs:mb-1 md:mb-2 xs:text-h7 md:text-h6">Mushroom</h6>
          <p className="xs:text-[12px] md:text-b2 xs:mb-[6px] md:mb-3">
            $2.3/kg
          </p>
          <button className="xs:text-[11px] md:text-lg md:button2 py-3 border border-grey50 text-black w-full rounded-lg hover:bg-primary hover:text-white transition-all duration-300 ease-in-out">
            Add to cart
          </button>
        </div>
        <div className="pt-[10px] pb-5 px-3 rounded-[20px] text-center shadow-customMd bg-white">
          <div className="mb-3 bg-grey20 inline-block px-[29px] py-1 rounded-2xl">
            <img src={imageOne} alt="Product Image" />
          </div>
          <h6 className="xs:mb-1 md:mb-2 xs:text-h7 md:text-h6">Mushroom</h6>
          <p className="xs:text-[12px] md:text-b2 xs:mb-[6px] md:mb-3">
            $2.3/kg
          </p>
          <button className="xs:text-[11px] md:text-lg md:button2 py-3 border border-grey50 text-black w-full rounded-lg hover:bg-primary hover:text-white transition-all duration-300 ease-in-out">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
