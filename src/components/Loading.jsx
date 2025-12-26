import { Spin } from "antd";
import React from "react";

export default function Loading() {
  return (
    <div className="flex justify-center py-52">
      <Spin size="large" />
    </div>
  );
}
