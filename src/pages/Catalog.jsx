import { useEffect, useState } from "react";
import { fetchBooks } from "../services/bookService";
import SearchBar from "../components/SearchBar";
import EmptyState from "../components/EmptyState";
import ProductGrid from "../components/ProductGrid";

export default function Catalog() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchBooks().then(setBooks);
  }, []);

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
