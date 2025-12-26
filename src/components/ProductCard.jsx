import { Card, message, Rate } from "antd";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

export default function ProductCard({ book }) {
  return (
    <div className="relative">
      <Link to={`/book/${book.id}`}>
        <div className="bg-white p-8 rounded-3xl hover:shadow-xl">
          <img
            alt={book.title}
            src={book.thumbnail}
            className="h-48 object-cover"
          />
          <h3 className="font-semibold text-lg line-clamp-1">{book.title}</h3>

          <div className="mt-3 flex items-center justify-between">
            <span className="font-bold text-teal-600">${book.price}</span>
            <Rate disabled allowHalf defaultValue={book.rating} />
          </div>
        </div>
      </Link>
      <div className="absolute top-4 right-4">
        <div className="flex gap-2">
          <div
            className="bg-white border border-gray-400 text-gray-400 hover:border-teal-600 hover:text-teal-600 p-2 rounded-full cursor-pointer"
            onClick={() => {
              message.success("Berhasil menambahkan keranjang");
            }}
          >
            <FiShoppingCart />
          </div>
          <div
            className="bg-white border border-gray-400 text-gray-400 hover:border-teal-600 hover:text-teal-600 p-2 rounded-full cursor-pointer"
            onClick={() => {
              message.success("Berhasil menambahkan produk favorit");
            }}
          >
            <FaRegHeart />
          </div>
        </div>
      </div>
    </div>
  );
}
