import React from "react";

interface CarouselIndicatorProps {
  index: number;
  isActive: boolean;
  onClick: (index: number) => void;
}

const CarouselIndicator: React.FC<CarouselIndicatorProps> = ({
  index,
  isActive,
  onClick,
}) => {
  return (
    <button
      type="button"
      className={`w-3 h-3 rounded-full ${
        isActive ? "bg-white" : "bg-gray-400"
      }`}
      aria-current={isActive ? "true" : "false"}
      aria-label={`Slide ${index + 1}`}
      onClick={() => onClick(index)}
    ></button>
  );
};

export default CarouselIndicator;
