import CenterHeading from "../../components/subHeading/CenterHeading";
import ProductCards from "../../sections/ProductCards";

const Products = () => {
  return (
    <div className="container xs:mt-[64px] xl:mt-[150px]">
      {/* sub heading */}
      <CenterHeading value="Our Products" />
      <div className="grid gap-4 text-center my-4">
        <h2 className="xs:text-h4 md:text-h2 text-black">Our Fresh Products</h2>
        <p className="xs:text-xs md:text-b3 text-grey100">
          We pride ourselves on offering a wide variety of fresh and flavorful
          fruits, vegetables, and salad ingredients.
        </p>
      </div>

      {/* product cards */}
      <ProductCards />
    </div>
  );
};

export default Products;
