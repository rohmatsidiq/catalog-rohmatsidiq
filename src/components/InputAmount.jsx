import { Button, Input } from "antd";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

export default function InputAmount() {
  const [amount, setAmount] = useState(1);

  const handleIncrease = () => {
    setAmount((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setAmount((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleChange = (e) => {
    const value = Number(e.target.value);
    if (value >= 1) {
      setAmount(value);
    }
  };

  return (
    <div className="flex gap-3 mb-5 items-center">
      <Button size="large" icon={<FaMinus />} onClick={handleDecrease} />

      <Input
        size="large"
        type="number"
        min={1}
        value={amount}
        onChange={handleChange}
        className="text-center w-20"
      />

      <Button size="large" icon={<FaPlus />} onClick={handleIncrease} />
    </div>
  );
}
