import React from "react";

export default function Background() {
  return (
    <>
      <div className=" w-full h-screen fixed z-[2]">
        <div className="absolute w-full pt-20 text-xl text-center font-medium text-zinc-400">
          Documents
        </div>
        <h1 className="absolute text-[13vw] leading-none tracking-tighter top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold text-zinc-900 ">
          Docs
        </h1>
      </div>
    </>
  );
}
