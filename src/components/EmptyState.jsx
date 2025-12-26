import { FaBookDead } from "react-icons/fa";

export default function EmptyState({ keyword }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-gray-500">
      <FaBookDead size={64} className="mb-4" />
      <h2 className="text-xl font-semibold">Buku tidak ditemukan</h2>
      <p className="mt-1">Tidak ada hasil untuk kata kunci "{keyword}"</p>
    </div>
  );
}
