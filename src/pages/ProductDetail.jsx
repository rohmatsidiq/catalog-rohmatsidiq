import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchBookById } from "../services/bookService";
import { Button, Divider, Rate, Tag, Skeleton } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import ReviewGrid from "../components/ReviewGrid";
import AddToCartCard from "../components/AddToCartCard";
import Loading from "../components/Loading";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imgLoading, setImgLoading] = useState(true);

  useEffect(() => {
    const loadBook = async () => {
      try {
        setLoading(true);
        const data = await fetchBookById(id);
        setBook(data);
        setImgLoading(true); // reset saat ganti produk
      } catch (error) {
        console.error("Gagal mengambil detail buku:", error);
      } finally {
        setLoading(false);
      }
    };

    loadBook();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!book) {
    return <p className="text-center py-10">Produk tidak ditemukan</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Button
        icon={<ArrowLeftOutlined />}
        onClick={() => navigate(-1)}
        className="mb-6"
        type="link"
      >
        Kembali
      </Button>

      <div className="grid md:grid-cols-2 gap-8">
        {/* IMAGE */}
        <div className="w-full">
          {imgLoading && (
            <Skeleton.Image
              active
              style={{
                width: "100%",
                height: 420,
                borderRadius: 12,
              }}
            />
          )}

          <img
            src={book.thumbnail}
            alt={book.title}
            className={`w-full rounded-lg object-contain ${
              imgLoading ? "hidden" : "block"
            }`}
            onLoad={() => setImgLoading(false)}
            onError={() => setImgLoading(false)}
          />
        </div>

        {/* DETAIL */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{book.title}</h1>

          <Rate disabled allowHalf defaultValue={book.rating} />

          <div className="mt-4">
            <p className="text-2xl font-semibold text-teal-600">
              ${book.price}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-5">
            <p className="text-sm">
              Stok: <b>{book.stock}</b>
            </p>
            <p className="text-sm">
              Brand: <b>{book.brand}</b>
            </p>
            <p className="text-sm">
              Category: <b>{book.category}</b>
            </p>
          </div>

          <p className="text-gray-600">{book.description}</p>

          <div className="mt-5">
            Tags:{" "}
            {book.tags?.map((tag, i) => (
              <Tag key={i} color="cyan">
                {tag}
              </Tag>
            ))}
          </div>

          <AddToCartCard />
        </div>
      </div>

      <Divider />

      <h3 className="text-2xl mb-4">Review</h3>
      <ReviewGrid reviews={book.reviews} />
    </div>
  );
}
