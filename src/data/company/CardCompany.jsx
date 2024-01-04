const CardCompany = ({ logo, alt }) => {
  return (
    <>
      <div className="bg-[#222222] py-3 px-4 border-[1.5px] border-[#434343]">
        <img src={logo} alt={alt} />
      </div>
    </>
  );
};

export default CardCompany;
