import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoreHorizontal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductsListTable = ({ products }: { products: any }) => {
  let len = products.length;
  return (
    <div className="relative">
      <div className="overflow-x-auto rounded-sm">
        <Card x-chunk="dashboard-06-chunk-0">
          <CardHeader>
            <CardTitle>Products</CardTitle>
            <CardDescription>
              Manage your products and view their sales performance.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px] sm:table-cell">
                    {/* <span className="sr-only">Image</span> */}
                    <span className="">Image</span>
                  </TableHead>

                  <TableHead className="whitespace-nowrap">Name</TableHead>
                  <TableHead className="whitespace-nowrap">Brand</TableHead>
                  <TableHead className="whitespace-nowrap">Price</TableHead>
                  <TableHead className="whitespace-nowrap">
                    Availability
                  </TableHead>
                  <TableHead className="hidden md:table-cell">
                    Created at
                  </TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((item: any) => (
                  <TableRow key={item._id}>
                    <TableCell className="">
                      <Image
                        alt="Product image"
                        className="aspect-square rounded-md object-cover"
                        height="64"
                        src={item.images}
                        width="64"
                      />
                    </TableCell>
                    <TableCell className="font-medium whitespace-nowrap">
                      {item.name.slice(0, 20)}
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{item.brand}</Badge>
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      ${item.price}
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      {item.inStock === true ? "In-Stock" : "Not Aviable"}
                    </TableCell>
                    <TableCell className="hidden md:table-cell whitespace-nowrap">
                      {item.createdAt.slice(1, 10)}
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            aria-haspopup="true"
                            size="icon"
                            variant="ghost"
                          >
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Toggle menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>
                            <Link href="/products">Show Details</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter>
            <div className="text-xs text-muted-foreground">
              Showing <strong>1-10</strong> of <strong>{len}</strong> products
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default ProductsListTable;
