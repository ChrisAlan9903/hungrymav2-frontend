import React from "react";

interface BaseButtonProps {
  text?: string;
  onClick?: () => void;
  colorType?: "primary" | "secondary" | "tertiary";
  styleType?: "filled" | "outline";
}

const BaseButton = ({
  text,
  onClick,
  colorType = "primary",
  styleType = "filled",
}: BaseButtonProps) => {
  const color = {
    primary: "orange",
    secondary: "red",
    tertiary: "black",
  };

  function style(type: string, color: string) {
    switch (type) {
      case "filled":
        return `border-${color}-400 bg-${color}-400 text-slate-100`;
      case "outline":
        return `border-${color}-400 bg-slate-100 text-${color}-400 `;
    }
  }

  return (
    <button
      onClick={onClick}
      className={`px-8 py-2 rounded-full border-2 ${style(
        styleType,
        color[colorType]
      )} cursor-pointer drop-shadow-lg hover:bg-opacity-80`}
    >
      {text}
    </button>
  );
};

export default BaseButton;
