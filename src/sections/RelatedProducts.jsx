import CenterHeading from "../components/subHeading/CenterHeading";
import imageOne from "../assets/products/image1.svg";

const RelatedProducts = () => {
  return (
    <div className="container mt-[150px]">
      {/* sub heading */}
      <CenterHeading value="Our Products" />
      <div className="grid gap-4 text-center mt-4 mb-8">
        <h2>Related products</h2>
        <p className="text-b3">
          We pride ourselves on offering a wide variety of fresh and flavorful
          fruits, vegetables, and salad ingredients.
        </p>
      </div>

      {/* product cards */}
      <div className="grid grid-cols-4 gap-6">
        <div className="pt-[10px] pb-5 px-3 rounded-[20px] text-center shadow-customMd bg-white">
          <div className="mb-3 bg-grey20 inline-block px-[29px] py-1 rounded-2xl">
            <img src={imageOne} alt="Product Image" />
          </div>
          <h6 className="mb-2">Mushroom</h6>
          <p className="text-b2 mb-3">$2.3/kg</p>
          <button className="button2 py-3 border border-grey50 text-black w-full rounded-lg hover:bg-primary hover:text-white transition-all duration-300 ease-in-out">
            Add to cart
          </button>
        </div>
        <div className="pt-[10px] pb-5 px-3 rounded-[20px] text-center shadow-customMd bg-white">
          <div className="mb-3 bg-grey20 inline-block px-[29px] py-1 rounded-2xl">
            <img src={imageOne} alt="Product Image" />
          </div>
          <h6 className="mb-2">Mushroom</h6>
          <p className="text-b2 mb-3">$2.3/kg</p>
          <button className="button2 py-3 border border-grey50 text-black w-full rounded-lg hover:bg-primary hover:text-white transition-all duration-300 ease-in-out">
            Add to cart
          </button>
        </div>
        <div className="pt-[10px] pb-5 px-3 rounded-[20px] text-center shadow-customMd bg-white">
          <div className="mb-3 bg-grey20 inline-block px-[29px] py-1 rounded-2xl">
            <img src={imageOne} alt="Product Image" />
          </div>
          <h6 className="mb-2">Mushroom</h6>
          <p className="text-b2 mb-3">$2.3/kg</p>
          <button className="button2 py-3 border border-grey50 text-black w-full rounded-lg hover:bg-primary hover:text-white transition-all duration-300 ease-in-out">
            Add to cart
          </button>
        </div>
        <div className="pt-[10px] pb-5 px-3 rounded-[20px] text-center shadow-customMd bg-white">
          <div className="mb-3 bg-grey20 inline-block px-[29px] py-1 rounded-2xl">
            <img src={imageOne} alt="Product Image" />
          </div>
          <h6 className="mb-2">Mushroom</h6>
          <p className="text-b2 mb-3">$2.3/kg</p>
          <button className="button2 py-3 border border-grey50 text-black w-full rounded-lg hover:bg-primary hover:text-white transition-all duration-300 ease-in-out">
            Add to cart
          </button>
        </div>
        <div className="pt-[10px] pb-5 px-3 rounded-[20px] text-center shadow-customMd bg-white">
          <div className="mb-3 bg-grey20 inline-block px-[29px] py-1 rounded-2xl">
            <img src={imageOne} alt="Product Image" />
          </div>
          <h6 className="mb-2">Mushroom</h6>
          <p className="text-b2 mb-3">$2.3/kg</p>
          <button className="button2 py-3 border border-grey50 text-black w-full rounded-lg hover:bg-primary hover:text-white transition-all duration-300 ease-in-out">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
