import React from "react";

function Content(props: React.PropsWithChildren) {
  return (
    <div className="mt-12 flex w-4/5 max-w-[1500px] flex-col gap-12 p-3 sm:mt-24 lg:mt-36">
      {props.children}
    </div>
  );
}

export default Content;
