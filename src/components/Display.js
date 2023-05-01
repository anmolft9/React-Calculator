import React from "react";

export const Display = ({ str }) => {
  return (
    <input className="main" type="string" placeholder="0" value={str || "0"} />
  );
};
