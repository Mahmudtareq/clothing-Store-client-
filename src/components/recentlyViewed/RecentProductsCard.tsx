import Image from "next/image";
import Link from "next/link";

const RecentProductsCard = ({ product }:any) => {
  const { name, price, rating, images, _id } = product;
  return (
    <div>
      <div>
        <div className="w-full lg:h-[350px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative">
          <Link href="#">
            <Image
              className="p-2 rounded-t-lg h-[250px] w-full"
              src={images}
              alt={name}
              width={500}
              height={50}
              sizes="100vw"
              style={{
                width: "100%",
              }}
            />
          </Link>
          <span className="absolute top-2 left-2 bg-blue-100 text-blue-800 text-xs font-semibold dark:bg-blue-200 dark:text-blue-800 ms-3 px-3 py-1 rounded-full">
            {rating}
          </span>
          <div className="px-5 pb-5">
            <a href="#">
              <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                {name.slice(0, 19)}
              </h5>
            </a>
            <div className="flex items-center justify-between my-3">
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                ${price}
              </span>
              <Link
                href={`products/${_id}`}
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center"
              >
                Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentProductsCard;