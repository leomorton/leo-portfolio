import React from "react";

function Main(props: React.PropsWithChildren) {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#f2f2f2] to-[#ccbfb3]">
      {props.children}
    </main>
  );
}

export default Main;
