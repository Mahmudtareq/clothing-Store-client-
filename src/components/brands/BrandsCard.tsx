import { ArrowRightToLine} from "lucide-react";
import { Card, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";
import { TBrands } from "./ProductsBrands";

const BrandsCard = ({ brands }: { brands: TBrands }) => {
  return (
    <div>
      <Link href={{ pathname: "/products", query: { brand: brands.name } }}>
        <Card
          x-chunk="dashboard-01-chunk-0"
          className="ransition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 "
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-xl font-medium text-blue-400">
              {brands.name}
            </CardTitle>
            <ArrowRightToLine className="h-4 w-5 text-muted-foreground" />
          </CardHeader>
        </Card>
      </Link>
    </div>
  );
};

export default BrandsCard;
