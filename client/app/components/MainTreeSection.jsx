"use client";

import { useMemo, useState } from "react";
import CategorySidebar from "./CategorySidebar";
import TreeCard from "./TreeCard";
import CartPanel from "./CartPanel";

export default function MainTreeSection({ trees, categories }) {
  const [activeCategoryId, setActiveCategoryId] = useState("all");
  const [cartItems, setCartItems] = useState([]);

  const filteredTrees = useMemo(() => {
    if (activeCategoryId === "all") return trees;
    return trees.filter((tree) => tree.categoryId === activeCategoryId);
  }, [trees, activeCategoryId]);

  function handleAddToCart(tree) {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === tree.id);
      if (existing) {
        return prev.map((item) =>
          item.id === tree.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...tree, quantity: 1 }];
    });
  }

  return (
    <section
      id="trees"
      className="section-spacing bg-[#F1FAF4]"
      aria-labelledby="trees-heading"
    >
      <div className="app-container">
        {/* Heading */}
        <h2
          id="trees-heading"
          className="mb-10 text-center text-2xl font-semibold text-gray-900"
        >
          Choose Your Trees
        </h2>

        {/* GRID: left 240px | middle flexible | right 260px */}
        <div className="grid gap-8 lg:grid-cols-[240px_minmax(0,1fr)_260px] xl:grid-cols-[260px_minmax(0,1.15fr)_280px]">
          {/* Left Sidebar */}
          <div className="self-start">
            <CategorySidebar
              categories={categories}
              activeCategoryId={activeCategoryId}
              onSelectCategory={setActiveCategoryId}
            />
          </div>

          {/* Middle Cards Grid */}
          <div>
            <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
              {filteredTrees.map((tree) => (
                <TreeCard
                  key={tree.id}
                  tree={tree}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </div>

          {/* Right Cart Panel */}
          <div className="self-start">
            <CartPanel items={cartItems} />
          </div>
        </div>
      </div>
    </section>
  );
}
