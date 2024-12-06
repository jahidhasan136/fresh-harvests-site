import { useEffect, useState } from "react";
import CategoriesTab from "../components/CategoriesTab"; // Assuming CategoriesTab is in the components folder
import ProductCard from "../components/ProductCard";

const ProductBody = () => {
  const [category, setCategory] = useState([]);
  const [product, setProduct] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

  // Fetch Category
  useEffect(() => {
    fetch("https://api-fresh-harvest.code-commando.com/api/v1/category")
      .then((res) => res.json())
      .then((data) => {
        setCategory(data?.data);
      });
  }, []);

  // Fetch Products
  useEffect(() => {
    fetch("https://api-fresh-harvest.code-commando.com/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data?.data);
      });
  }, []);

  // Filter products based on selected category
  const filteredProducts = activeCategory
    ? product.filter((item) => item.categoryId === activeCategory)
    : product;

  return (
    <div>
      {/* Custom Category Tabs */}
      <div className="flex justify-center gap-4 flex-wrap">
        {category?.map((categoryItem) => (
          <CategoriesTab
            key={categoryItem?.id}
            categoryItem={categoryItem}
            onClick={() => setActiveCategory(categoryItem?.id)} // Set active category ID
            isActive={activeCategory === categoryItem?.id} // Highlight active tab
          />
        ))}
      </div>

      {/* Display Filtered Products */}
      <div className="grid xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
        {filteredProducts?.map((productItem) => (
          <ProductCard key={productItem?.id} productItem={productItem} />
        ))}
      </div>

      {/* See all products button */}
      <div className="flex justify-center mt-8">
        <button className="xs:text-sm md:text-lg md:button1 px-8 py-4 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300 ease-in-out">
          See All Products
        </button>
      </div>
    </div>
  );
};

export default ProductBody;
