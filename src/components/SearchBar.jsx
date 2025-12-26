import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="mb-6 max-w-md mx-auto">
      <Input
        size="large"
        placeholder="Cari produk..."
        prefix={<SearchOutlined />}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
