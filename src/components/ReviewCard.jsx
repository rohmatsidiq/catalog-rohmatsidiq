import { Rate } from "antd";
import React from "react";

export default function ReviewCard({ review }) {
  return (
    <div className="bg-white p-5 rounded-3xl">
      <div className="flex gap-3 items-center">
        <div className="w-13.75 h-13.75 rounded-full flex justify-center items-center text-white bg-teal-600">
          <div className="text-xl">{review.reviewerName[0]}</div>
        </div>
        <div className="flex flex-col">
          <p className="font-bold">{review.reviewerName}</p>
          <Rate disabled allowHalf defaultValue={review.rating} />
        </div>
      </div>
      <div className="mt-6">
        <p>{review.comment}</p>
      </div>
    </div>
  );
}
