import React from "react";
import ReviewCard from "./ReviewCard";

export default function ReviewGrid({ reviews = [] }) {
  if (!reviews) {
    return;
  }

  return (
    <div
      className="
        grid gap-6
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
      "
    >
      {reviews.map((e, i) => (
        <ReviewCard key={i} review={e} />
      ))}
    </div>
  );
}
