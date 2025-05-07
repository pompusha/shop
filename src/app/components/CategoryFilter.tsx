



"use client";

import { useState } from "react";

type CategoryFilterProps = {
  categories: string[];
  onFilter: (category: string) => void;
};

export default function CategoryFilter({ categories, onFilter }: CategoryFilterProps) {
  const [selected, setSelected] = useState("All");

  const handleClick = (category: string) => {
    setSelected(category);
    onFilter(category);
  };

  return (
    <div className="flex gap-2 mb-6">
      {["All", ...categories].map((cat) => (
        <button
          key={cat}
          onClick={() => handleClick(cat)}
          className={`px-3 py-1 rounded border ${
            selected === cat ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
