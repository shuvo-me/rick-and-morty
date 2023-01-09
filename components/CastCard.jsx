import Image from "next/image";
import React from "react";

const CastCard = ({ cast }) => {
  return (
    <div
      className="max-w-[290px] p-[16px] my-5 cast-card  mx-2"
      // style={{
      //   borderRadius: "10px",
      //   border: "1px solid transparent",
      //   background:
      //     "linear-gradient(to right, rgba(132, 247, 41, 0.75), rgba(21, 191, 253, 0.75))",
      //   WebkitMask:
      //     "linear-gradient(#fff 0 0) padding-box,  linear-gradient(#fff 0 0)",
      //   WebkitMaskComposite: "add",
      //   maskComposite: "exclude",
      // }}
    >
      <div className="">
        <div className="cast-image relative">
          {cast?.image ? (
            <Image
              src={cast.image}
              height={216}
              width={258}
              className="absoulte"
            />
          ) : (
            ""
          )}
        </div>
        <div className="mt-[24px]">
          <h5 className="xs:text-[13px] md:text-[14px] lg:text-[l5] xl:text-[16px] text-white font-[500]">
            {cast?.name}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default CastCard;
