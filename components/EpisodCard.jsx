import React from "react";

const EpisodCard = ({ episode }) => {
  return (
    <div className="episod-card py-[10px] px-[24px] mx-2">
      <span className="block text-white xs:text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px]">
        {episode?.episode}
      </span>
      <h4 className="text-white xs:text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] text-[20px] font-bold">
        {episode?.name}
      </h4>
    </div>
  );
};

export default EpisodCard;
