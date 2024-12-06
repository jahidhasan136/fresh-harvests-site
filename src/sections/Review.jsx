const Review = ({ description }) => {
  return (
    <div className="mt-16">
      {/* buttons */}
      <div className="flex items-center gap-12">
        <button className="px-6 py-3 border border-grey80 text-grey80 hover:border-green hover:bg-green hover:text-white rounded-lg xs:text-xs xl:text-lg md:button2 transition-all duration-300 ease-in-out">
          Description
        </button>
        <button className="px-6 py-3 border border-grey80 text-grey80 hover:border-green hover:bg-green hover:text-white rounded-lg xs:text-xs xl:text-lg md:button2 transition-all duration-300 ease-in-out">
          Review <span>(1)</span>
        </button>
      </div>

      {/* details */}
      <p className="bg-grey20 text-grey100 py-10 px-8 rounded-3xl mt-6 xs:text-b3 xl:text-b2">
        {description}
      </p>
    </div>
  );
};

export default Review;
