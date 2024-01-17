import React from "react";
import CornerBorders from "./cornerBorders";

interface TitleProps {
  title: string;
}

function Title(props: TitleProps) {
  return (
    <div className="relative">
      <CornerBorders />
      <h1 className="whitespace-nowrap px-[3vw] py-[2vw] font-halogenRegular text-[8.5vw] font-medium leading-none text-orange-500 tiny:text-[7vw] sm:px-[2vw] sm:py-[1vw] sm:text-[9vw] xl:text-9xl">
        {props.title}
      </h1>
    </div>
  );
}

export default Title;
