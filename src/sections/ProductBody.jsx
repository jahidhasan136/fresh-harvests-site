import { useEffect } from "react";
import imageOne from "../assets/products/image1.svg";

const ProductBody = () => {
  useEffect(() => {
    fetch("https://api-fresh-harvest.code-commando.com/api/v1/category")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  return (
    <>
      {/* Product category tabs */}
      <div className="flex items-center justify-center xs:gap-3 sm:gap-6 xs:mb-6 md:mb-8">
        <button className="xs:text-xs md:button2 px-6 py-3 border border-grey50 rounded-lg text-grey80 hover:bg-green hover:border-green hover:text-white transition-all duration-300 ease-in-out">
          All
        </button>
        <button className="xs:text-xs md:button2 px-6 py-3 border border-grey50 rounded-lg text-grey80 hover:bg-green hover:border-green hover:text-white transition-all duration-300 ease-in-out">
          Fruits
        </button>
        <button className="xs:text-xs md:button2 px-6 py-3 border border-grey50 rounded-lg text-grey80 hover:bg-green hover:border-green hover:text-white transition-all duration-300 ease-in-out">
          Vegetables
        </button>
        <button className="xs:text-xs md:button2 px-6 py-3 border border-grey50 rounded-lg text-grey80 hover:bg-green hover:border-green hover:text-white transition-all duration-300 ease-in-out">
          Salad
        </button>
      </div>

      {/* products card */}
      <div>
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

        {/* see all products button */}
        <div className="flex justify-center mt-8">
          <button className="xs:text-sm md:text-lg md:button1 px-8 py-4 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300 ease-in-out">
            See All Products
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductBody;
