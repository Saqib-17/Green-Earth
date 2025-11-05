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
      className="section-spacing bg-[#F0FDF4]"
      aria-labelledby="trees-heading"
    >
      <div className="app-container px-0">
        <h2
          id="trees-heading"
          className="mb-10 text-center text-2xl font-semibold text-gray-900"
        >
          Choose Your Trees
        </h2>

        {/* Full-width layout:
            left 220px | middle 100% + (220px + 260px) | right 260px
            visually: middle spans same total width as both sidebars */}
        <div
          className="
            grid gap-8
            lg:grid-cols-[minmax(220px,220px)_minmax(0,calc(100%+480px))_minmax(260px,260px)]
            items-start
          "
        >
          {/* Left sidebar */}
          <div className="justify-self-start">
            <CategorySidebar
              categories={categories}
              activeCategoryId={activeCategoryId}
              onSelectCategory={setActiveCategoryId}
            />
          </div>

          {/* Middle cards area */}
          <div className="grid justify-items-center gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredTrees.map((tree) => (
              <TreeCard
                key={tree.id}
                tree={tree}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>

          {/* Right cart */}
          <div className="justify-self-end">
            <CartPanel items={cartItems} />
          </div>
        </div>
      </div>
    </section>
  );
}
