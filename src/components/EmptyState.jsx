import { Button, Result } from "antd";
import { FaBookDead } from "react-icons/fa";

export default function EmptyState({ keyword }) {
  return (
    <div className="flex flex-col items-center justify-center text-gray-500">
      <Result
        status="404"
        title="Tidak ditemukan"
        subTitle="Maaf, produk yang Anda cari tidak ditemukan"
      />
    </div>
  );
}
