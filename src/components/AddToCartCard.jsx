import { Button } from "antd";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import InputAmount from "./InputAmount";

export default function AddToCartCard() {
  return (
    <div className="mt-5 shadow-xl rounded-2xl p-8 bg-white">
      <InputAmount />
      <div className="flex gap-3">
        <Button variant="solid" color="orange" size="large" className="w-full">
          Add to cart
        </Button>

        <Button icon={<FaRegHeart />} size="large" type="primary"></Button>
      </div>
    </div>
  );
}
