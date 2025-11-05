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
      className="section-spacing bg-[#f3fbf6]"
      aria-labelledby="trees-heading"
    >
      <div className="app-container">
        <h2
          id="trees-heading"
          className="mb-8 text-center text-2xl font-semibold text-gray-900"
        >
          Choose Your Trees
        </h2>

        <div className="grid gap-6 lg:grid-cols-[220px,1fr,260px]">
          <div className="order-1">
            <CategorySidebar
              categories={categories}
              activeCategoryId={activeCategoryId}
              onSelectCategory={setActiveCategoryId}
            />
          </div>

          <div className="order-3 lg:order-2">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredTrees.map((tree) => (
                <TreeCard
                  key={tree.id}
                  tree={tree}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </div>

          <div className="order-2 lg:order-3">
            <CartPanel items={cartItems} />
          </div>
        </div>
      </div>
    </section>
  );
}
