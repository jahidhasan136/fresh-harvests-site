import imageOne from "../assets/products/image1.svg";

const ProductCards = () => {
  return (
    <>
      {/* product category tabs */}
      <div className="flex items-center justify-center gap-6 mb-8">
        <button className="button2 px-6 py-3 border border-grey50 rounded-lg text-grey80 hover:bg-green hover:border-green hover:text-white transition-all duration-300 ease-in-out">
          All
        </button>
        <button className="button2 px-6 py-3 border border-grey50 rounded-lg text-grey80 hover:bg-green hover:border-green hover:text-white transition-all duration-300 ease-in-out">
          Fruits
        </button>
        <button className="button2 px-6 py-3 border border-grey50 rounded-lg text-grey80 hover:bg-green hover:border-green hover:text-white transition-all duration-300 ease-in-out">
          Vegetables
        </button>
        <button className="button2 px-6 py-3 border border-grey50 rounded-lg text-grey80 hover:bg-green hover:border-green hover:text-white transition-all duration-300 ease-in-out">
          Salad
        </button>
      </div>

      {/* products card */}
      <div>
        <div className="flex items-center gap-6">
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

        {/* see all products button */}
        <div className="flex justify-center mt-8">
          <button className="button1 px-8 py-4 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300 ease-in-out">
            See All Products
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCards;
