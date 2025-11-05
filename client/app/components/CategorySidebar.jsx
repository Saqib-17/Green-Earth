export default function CategorySidebar({
  categories,
  activeCategoryId,
  onSelectCategory,
}) {
  return (
    <aside
      className="rounded-xl bg-white p-4 card-shadow"
      aria-label="Tree categories"
    >
      <h2 className="mb-4 text-sm font-semibold text-gray-800">
        Categories
      </h2>
      <ul className="space-y-2 text-sm">
        {categories.map((cat) => (
          <li key={cat.id}>
            <button
              type="button"
              onClick={() => onSelectCategory(cat.id)}
              className={`w-full rounded-md px-3 py-1 text-left transition ${
                activeCategoryId === cat.id
                  ? "bg-(--green-primary) text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {cat.label}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
