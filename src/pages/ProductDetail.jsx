import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchBookById } from "../services/bookService";
import { Button, Divider, Rate, Spin } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import ReviewGrid from "../components/ReviewGrid";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookById(id)
      .then(setBook)
      .finally(() => setLoading(false));
  }, [id]);

  console.log(book);

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Button
        icon={<ArrowLeftOutlined />}
        onClick={() => navigate(-1)}
        className="mb-6"
      >
        Kembali
      </Button>

      <div className="grid md:grid-cols-2 gap-8">
        <img
          src={book.thumbnail}
          alt={book.title}
          className="w-full rounded-lg"
        />

        <div>
          <h1 className="text-3xl font-bold mb-2">{book.title}</h1>

          <Rate disabled allowHalf defaultValue={book.rating} />

          <p className="text-gray-600 mt-4">{book.description}</p>

          <p className="text-2xl font-semibold text-teal-600 mt-6">
            ${book.price}
          </p>

          <p className="mt-2 text-sm text-gray-500">Stok: {book.stock}</p>
        </div>
      </div>

      <Divider />

      <h3 className="text-2xl">Review</h3>
      <ReviewGrid />
    </div>
  );
}
