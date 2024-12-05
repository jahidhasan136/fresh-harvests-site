const Review = () => {
  return (
    <div className="mt-16">
      {/* buttons */}
      <div className="flex items-center gap-12">
        <button className="px-6 py-3 border border-grey80 text-grey80 hover:border-green hover:bg-green hover:text-white rounded-lg button2 transition-all duration-300 ease-in-out">
          Description
        </button>
        <button className="px-6 py-3 border border-grey80 text-grey80 hover:border-green hover:bg-green hover:text-white rounded-lg button2 transition-all duration-300 ease-in-out">
          Review <span>(1)</span>
        </button>
      </div>

      {/* details */}
      <p className="bg-grey20 text-grey100 py-10 px-8 rounded-3xl mt-6">
        Our coconuts are sustainably grown, ensuring the best quality and taste.
        Each coconut is handpicked and carefully prepared, offering you the
        freshest product possible. Rich in healthy fats, electrolytes, and
        essential nutrients, coconuts provide both hydration and nourishment.
        Whether you’re using the water, flesh, or milk, our coconuts bring
        versatility to your kitchen while supporting healthy living. Perfect for
        smoothies, desserts, curries, and more — let the natural sweetness of
        the coconut elevate your recipes. Enjoy the tropical goodness in its
        purest form, directly from nature.
      </p>
    </div>
  );
};

export default Review;
