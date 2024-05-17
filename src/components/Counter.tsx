"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { HeartCrackIcon, Minus, Plus } from "lucide-react";

const Counter = () => {
  const [count, setCount] = useState(1);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <div className="flex items-center flex-wrap gap-4">
      <div className="flex items-center gap-5">
        <Button variant="outline" className="sm" onClick={handleDecrement}>
          <Minus className="w-4 h-3" />
        </Button>
        <Button variant="secondary">{count}</Button>
        <Button variant="outline" className="icon" onClick={handleIncrement}>
          <Plus className="w-4 h-3" />
        </Button>
      </div>
      <Button variant="outline" className="rounded-full">
        Add To Cart
      </Button>
      <Button variant="outline" className="icon rounded-full">
        <HeartCrackIcon />
      </Button>
    </div>
  );
};

export default Counter;
