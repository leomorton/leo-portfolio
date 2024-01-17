import React from "react";

function Main(props: React.PropsWithChildren) {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#e0e0e0] to-[#BFB8B2]">
      {props.children}
    </main>
  );
}

export default Main;
