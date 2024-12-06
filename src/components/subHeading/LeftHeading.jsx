const LeftHeading = ({ value }) => {
  return (
    <div>
      <p className="xs:text-sh2 xl:text-sh1 px-3 py-1 bg-green/10 text-green rounded-lg inline-block">
        {value}
      </p>
    </div>
  );
};

export default LeftHeading;
