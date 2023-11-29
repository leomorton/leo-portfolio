import React from "react";

function CornerBorders() {
  return (
    <div>
      <div className="absolute left-0 top-0 h-[1vw] max-h-[12px] min-h-[4px] w-[1vw] min-w-[4px] max-w-[12px] border-b-0 border-l border-r-0 border-t border-solid border-neutral-700 bg-transparent sm:border-l-2 sm:border-t-2"></div>
      <div className="absolute right-0 top-0 h-[1vw] max-h-[12px] min-h-[4px] w-[1vw] min-w-[4px] max-w-[12px] border-b-0 border-l-0 border-r border-t border-solid border-neutral-700 bg-transparent sm:border-r-2 sm:border-t-2"></div>
      <div className="absolute bottom-0 right-0 h-[1vw] max-h-[12px] min-h-[4px] w-[1vw] min-w-[4px] max-w-[12px] border-b border-l-0 border-r border-t-0 border-solid border-neutral-700 bg-transparent sm:border-b-2 sm:border-r-2"></div>
      <div className="absolute bottom-0 left-0 h-[1vw] max-h-[12px] min-h-[4px] w-[1vw] min-w-[4px] max-w-[12px] border-b border-l border-r-0 border-t-0 border-solid border-neutral-700 bg-transparent sm:border-b-2 sm:border-l-2"></div>
    </div>
  );
}

export default CornerBorders;
