import CenterHeading from "../../components/subHeading/CenterHeading";
import ProductCards from "../../sections/ProductCards";

const Products = () => {
  return (
    <div className="container mt-[150px]">
      {/* sub heading */}
      <CenterHeading value="Our Products" />
      <div className="grid gap-4 text-center my-4">
        <h2>Our Fresh Products</h2>
        <p className="text-b3">
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
