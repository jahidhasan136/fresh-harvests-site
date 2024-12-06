const ProductCard = ({ productItem }) => {
  const { images, productName, price } = productItem;
  const image = images?.[0];
  return (
    <div className="pt-[10px] pb-5 px-3 rounded-[20px] text-center shadow-customMd bg-white">
      <div className="mb-3 bg-grey20 inline-block px-[29px] py-1 rounded-2xl max-w-[258px] max-h-[208px]">
        <img className="w-[200px] h-[200px]" src={image} alt={productName} />
      </div>
      <h6 className="xs:mb-1 md:mb-2 xs:text-h7 md:text-h6">{productName}</h6>
      <p className="xs:text-[12px] md:text-b2 xs:mb-[6px] md:mb-3">
        $<span>{price}</span>/kg
      </p>
      <button className="xs:text-[11px] md:text-lg md:button2 py-3 border border-grey50 text-black w-full rounded-lg hover:bg-primary hover:text-white transition-all duration-300 ease-in-out">
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
