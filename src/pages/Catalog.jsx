import { useEffect, useState } from "react";
import { fetchBooks } from "../services/bookService";
import SearchBar from "../components/SearchBar";
import EmptyState from "../components/EmptyState";
import ProductGrid from "../components/ProductGrid";
import { Spin } from "antd";

export default function Catalog() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBooks = async () => {
      try {
        setLoading(true);
        const data = await fetchBooks();
        setBooks(data);
      } catch (error) {
        console.error("Gagal mengambil daftar buku:", error);
      } finally {
        setLoading(false);
      }
    };

    loadBooks();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <Spin size="large" />
      </div>
    );
  }

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between w-full items-center">
        <h1 className="text-3xl font-bold text-center mb-6">Catalog</h1>

        <div>
          <SearchBar value={search} onChange={setSearch} />
        </div>
      </div>

      {filteredBooks.length > 0 ? (
        <ProductGrid books={filteredBooks} />
      ) : (
        <EmptyState keyword={search} />
      )}
    </div>
  );
}
