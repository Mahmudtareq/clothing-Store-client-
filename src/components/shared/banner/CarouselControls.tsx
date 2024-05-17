
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { MouseEventHandler } from "react";

interface CarouselControlsProps {
  direction: "prev" | "next";
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const CarouselControls: React.FC<CarouselControlsProps> = ({
  direction,
  onClick,
}) => (
  <>
    <button
      type="button"
      className={`absolute top-0 ${
        direction === "prev" ? "start-0" : "end-0"
      } z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none`}
      onClick={onClick}
    >
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        {direction === "prev" ? (
          <ArrowBigLeft/>
        ) : (
           <ArrowBigRight/>
         
        )}
        <span className="sr-only">
          {direction === "prev" ? "Previous" : "Next"}
        </span>
      </span>
    </button>
  </>
);

export default CarouselControls;
