export default function CartPanel({ items }) {
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <aside
      className="rounded-2xl bg-white p-4 card-shadow"
      aria-label="Your cart"
    >
      <h2 className="mb-4 text-sm font-semibold text-gray-800">
        Your Cart
      </h2>

      {items.length === 0 ? (
        <p className="text-xs text-(--text-muted)">
          No trees added yet. Select a tree to get started.
        </p>
      ) : (
        <ul className="space-y-3 text-xs">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between rounded-xl bg-[#F0FDF4] px-3 py-2"
            >
              <div className="space-y-0.5">
                <p className="font-medium text-gray-800">{item.name}</p>
                <p className="text-[0.7rem] text-(--text-muted)">
                  ৳{item.price} × {item.quantity}
                </p>
              </div>
              <span className="text-xs font-semibold text-gray-900">
                ৳{item.price * item.quantity}
              </span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-4 border-t pt-3 text-sm font-semibold text-gray-900">
        <div className="flex items-center justify-between">
          <span>Total:</span>
          <span>৳{total}</span>
        </div>
      </div>
    </aside>
  );
}
