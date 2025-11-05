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
  function handleRemoveItem(id) {
  setCartItems((prev) => prev.filter((item) => item.id !== id));
}


  return (
    <section
      id="trees"
      className="section-spacing bg-[#F0FDF4]"
      aria-labelledby="trees-heading"
    >
      <div className="app-container">
        <h2
          id="trees-heading"
          className="mb-10 text-center text-2xl font-semibold text-gray-900"
        >
          Choose Your Trees
        </h2>

        {/* Mobile: 1 col  |  Desktop: 250px - 1090px - 250px */}
        <div
          className="
            grid grid-cols-1 items-start gap-6
            md:gap-8
            lg:grid-cols-[250px_1090px_250px]
          "
        >
          {/* Categories (full width on mobile, 250px on desktop) */}
          <div>
            <CategorySidebar
              categories={categories}
              activeCategoryId={activeCategoryId}
              onSelectCategory={setActiveCategoryId}
            />
          </div>

          {/* Cards */}
          <div
            className="
              grid gap-6
              sm:grid-cols-2
              xl:grid-cols-3
            "
          >
            {filteredTrees.map((tree) => (
              <TreeCard
                key={tree.id}
                tree={tree}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>

          {/* Cart (full width on mobile, 250px on desktop) */}
          <div className="mt-4 lg:mt-0">
           <CartPanel items={cartItems} onRemoveItem={handleRemoveItem} />

          </div>
        </div>
      </div>
    </section>
  );
}
