import React from "react";


export default function Progressbar({ done }) {
  return (
    <div className={"progressbar w-full h-1 pointer-events-none mt-4"}>
      <div
        className={"progressbar-done h-full"}
        style={{ width: `${done*100}%` }}
      ></div>
    </div>
  );
}

