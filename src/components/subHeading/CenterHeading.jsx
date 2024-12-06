const CenterHeading = ({ value }) => {
  return (
    <div className="flex justify-center">
      <p className="xs:text-sh2 xl:text-sh1 px-3 py-1 bg-green/10 text-green rounded-lg text-center inline-block">
        {value}
      </p>
    </div>
  );
};

export default CenterHeading;
