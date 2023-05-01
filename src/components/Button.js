import React from "react";

export const Button = ({ handleOnClick, label, className }) => {
  return (
    <div className={className} onClick={() => handleOnClick(label)}>
      {label}
    </div>
  );
};
