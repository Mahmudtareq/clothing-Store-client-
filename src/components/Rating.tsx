import { Star } from "lucide-react";
import React from "react";

const Rating = ({ rating }: { rating: number }) => {
  const maxRating = 5;
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = maxRating - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center mt-2 mb-3">
      {[...Array(fullStars)].map((_, index) => (
        <Star key={index} className="w-5 h-5 text-fuchsia-600 me-1" />
      ))}
      {halfStar && <Star className="w-5 h-5 text-fuchsia-200 me-1" />}
      {[...Array(emptyStars)].map((_, index) => (
        <Star key={index} className="w-5 h-5 text-fuchsia-600 me-1" />
      ))}
      <p className="ms-1 text-sm font-medium text-gray-600 dark:text-gray-400">
        {rating.toFixed(2)}
      </p>
      <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
        out of
      </p>
      <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
        {maxRating}
      </p>
    </div>
  );
};

export default Rating;
