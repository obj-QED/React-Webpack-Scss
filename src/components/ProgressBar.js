import React from "react";

export default function Progressbar({ done }) {
  return (
    <div className={"progressbar w-full h-1 pointer-events-none mt-4"}>
      <div
        className={"progressbar-done h-full"}
        style={{
          width: `${Math.round(done * 100)}%`,
          // transition: `width ${Math.abs(done - 1)}s ease`,
          // transitionDelay: `${Math.abs(done)}s`,
        }}
      ></div>
    </div>
  );
}

