import { Card, message, Rate, Skeleton } from "antd";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { useState } from "react";

export default function ProductCard({ book }) {
  const [imgLoading, setImgLoading] = useState(true);

  return (
    <div className="relative">
      <Link to={`/book/${book.id}`}>
        <div className="bg-white p-8 rounded-3xl hover:shadow-xl">
          <div className="flex justify-center items-center h-48">
            {imgLoading && (
              <Skeleton.Image
                active
                style={{ width: 150, height: 192, borderRadius: 12 }}
              />
            )}

            <img
              alt={book.title}
              src={book.thumbnail}
              className={`h-48 object-contain ${
                imgLoading ? "hidden" : "block"
              }`}
              onLoad={() => setImgLoading(false)}
              onError={() => setImgLoading(false)}
            />
          </div>

          <h3 className="font-semibold text-lg line-clamp-1 mt-3">
            {book.title}
          </h3>

          <div className="mt-3 flex items-center justify-between">
            <span className="font-bold text-teal-600">${book.price}</span>
            <Rate disabled allowHalf defaultValue={book.rating} />
          </div>
        </div>
      </Link>

      <div className="absolute top-4 right-4">
        <div className="flex gap-2">
          <div
            className="bg-white border border-gray-400 text-gray-400 hover:border-orange-600 hover:text-orange-600 p-2 rounded-full cursor-pointer"
            onClick={() => message.success("Berhasil menambahkan keranjang")}
          >
            <FiShoppingCart />
          </div>

          <div
            className="bg-white border border-gray-400 text-gray-400 hover:border-orange-600 hover:text-orange-600 p-2 rounded-full cursor-pointer"
            onClick={() =>
              message.success("Berhasil menambahkan produk favorit")
            }
          >
            <FaRegHeart />
          </div>
        </div>
      </div>
    </div>
  );
}
