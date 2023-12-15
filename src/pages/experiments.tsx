import React from "react";
import GlowButton from "~/components/GlowButton";

const Experiments = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <GlowButton
        text="INTERFACE"
        delay1={"delay-75"}
        time1={"duration-1000"}
        delay2={"delay-75"}
        time2={"duration-1000"}
      />
    </div>
  );
};

export default Experiments;
