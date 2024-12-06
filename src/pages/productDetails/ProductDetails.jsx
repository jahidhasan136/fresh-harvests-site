import image from "../../assets/product-details/image.svg";
import LeftHeading from "../../components/subHeading/LeftHeading";
import { FaHeart } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import Review from "../../sections/Review";
import RelatedProducts from "../../sections/RelatedProducts";

const ProductDetails = () => {
  return (
    <div className="container mt-8">
      <div className="grid lg:grid-cols-2 items-center gap-[46px]">
        {/* Left side selecting image */}
        <div>
          <img className="mx-auto" src={image} alt="Details Image" />
        </div>

        {/* Right side content */}
        <div>
          {/* sub heading */}
          <div className="grid xl:gap-4 xs:mb-8 xl:mb-[87px]">
            <LeftHeading className="xs:mb-1 xl:mb-0" value="Fruits" />
            <h2 className="text-black xs:text-h4 xl:text-h2 xs:mb-2 xl:mb-0">
              Coconut
            </h2>
            <h6 className="text-black xs:mb-2 xl:mb-0">
              5.0 <span className="text-h7">(1review)</span>
            </h6>
            <h4 className="text-primary xs:mb-2 xl:mb-0">$6.3/kg</h4>
            <p className="text-grey100 xs:text-sm xl:text-b2">
              From our farm directly to your door, our fresh coconuts are
              harvested at the peak of ripeness, offering you a sweet, hydrating
              treat full of flavor. Packed with natural nutrients, coconut is
              perfect for a variety of culinary uses, from smoothies to savory
              dishes, or even for a refreshing drink straight from the shell.
            </p>
          </div>

          {/* quantity */}
          <div className="flex items-center mb-10">
            <h6 className="mr-4">Quantity</h6>
            <table className="mr-2 border border-grey100">
              <tbody>
                <tr>
                  <td className="px-4 py-2 border border-grey100 font-bold cursor-pointer">
                    -
                  </td>
                  <td className="xs:text-h5 xl:text-h6 px-4 py-2 border border-grey100">
                    <h5>1</h5>
                  </td>
                  <td className="px-4 py-2 border border-grey100 font-bold cursor-pointer">
                    +
                  </td>
                </tr>
              </tbody>
            </table>

            <p className="text-b2 text-grey100">/kg</p>
          </div>

          {/* favourite or add cart button */}
          <div className="flex xs:flex-col xl:flex-row xl:items-center gap-7">
            <button className="flex items-center gap-[10px] py-4 px-8 bg-grey20 rounded-lg">
              <FaHeart className="text-grey50 text-[32px]" />
              <p className="button1 text-grey100">Save as favorite</p>
            </button>
            <button className="flex items-center gap-[10px] py-4 px-8 bg-primary rounded-lg">
              <IoMdCart className="text-white text-[32px]" />
              <p className="button1 text-white">Save as favorite</p>
            </button>
          </div>
        </div>
      </div>

      {/* description or review sect ion */}
      <Review />

      {/* Related products section */}
      <RelatedProducts />
    </div>
  );
};

export default ProductDetails;
