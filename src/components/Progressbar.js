import React from "react";


export default function Progressbar({ done }) {
  return (
    <div className={"progressbar"}>
      <div
        className={"progressbar-done"}
        style={{ width: `${done*100}%` }}
      ></div>
    </div>
  );
}

