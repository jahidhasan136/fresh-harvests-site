const CategoriesTab = ({ categoryItem, onClick, isActive }) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer py-2 px-6 rounded-lg text-center ${
        isActive
          ? "bg-green text-white"
          : "border border-[#D9D9D9] text-grey80 hover:bg-green hover:text-white"
      }`}
    >
      {categoryItem?.categoryName}
    </div>
  );
};

export default CategoriesTab;
