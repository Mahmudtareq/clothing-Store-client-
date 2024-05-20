import React from 'react';
import { Checkbox } from '../ui/checkbox';
const items = [
  {
    id: "1Star",
    label: "1 Star",
    rating: 1,
  },
  {
    id: "2Star",
    label: "2 Star",
    rating: 2,
  },
  {
    id: "3Star",
    label: "3 Star",
    rating: 3,
  },
  {
    id: "4Star",
    label: "4 Star",
    rating: 4,
  },
  {
    id: "5Star",
    label: "5 Star",
    rating: 5,
  },
];


const RatingFilter = () => {
    return (
      <div className="my-2">
        <span className="text-[22px] text-[#2D2D2D] flex items-center gap-1">
          <span>|</span> Ratings
        </span>
        <div className="space-y-3 my-4 ms-3">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center space-x-3">
              <Checkbox
                id={item.id}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="terms"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {item.label}
              </label>
            </div>
          ))}
        </div>
      </div>
    );
};

export default RatingFilter;