import React from "react";

export const ColorStateAlarms = (state) => {
  let borderColor = "";
  let backgroundColor = "";
  switch (state) {
    case 0:
      borderColor = "outline-success";
      backgroundColor = "bg-success";
      break;
    case 1:
      borderColor = "outline-warning";
      backgroundColor = "bg-warning";
      break;
    case 2:
      borderColor = "outline-danger";
      backgroundColor = "bg-danger";
      break;
    case 3:
      borderColor = "outline-danger";
      backgroundColor = "bg-danger";
      break;
    case 4:
      borderColor = "outline-info";
      backgroundColor = "bg-info";
      break;
    case 5:
      borderColor = "outline-primary";
      backgroundColor = "bg-primary";
      break;
    default:
      borderColor = "outline-light";
      backgroundColor = "bg-light";
  }

  return { borderColor, backgroundColor };
};
