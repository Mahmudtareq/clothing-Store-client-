import { Checkbox } from "../ui/checkbox";

const items = [
  {
    id: "10to20",
    label: "$10.00 - $20.00",
    minPrice: 10,
    maxPrice: 20,
  },
  {
    id: "20to30",
    label: "$20.00 - $30.00",
    minPrice: 20,
    maxPrice: 30,
  },
  {
    id: "30to40",
    label: "$30.00 - $40.00",
    minPrice: 30,
    maxPrice: 40,
  },
  {
    id: "40to50",
    label: "$40.00 - $50.00",
    minPrice: 40,
    maxPrice: 50,
  },
  {
    id: "50to60",
    label: "$50.00 - $60.00",
    minPrice: 50,
    maxPrice: 60,
  },
  {
    id: "60to70",
    label: "$60.00 - $70.00",
    minPrice: 60,
    maxPrice: 70,
  },
  // Add more ranges as needed
];

const PriceRange = () => {
  return (
    <div className="my-2">
      <span className="text-[22px] text-[#2D2D2D] flex items-center gap-1">
        <span>|</span> Price Range
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

export default PriceRange;
