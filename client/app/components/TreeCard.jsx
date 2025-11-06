import Image from "next/image";
import Button from "./Button";

export default function TreeCard({ tree, onAddToCart }) {
  return (
    <article
      className="
        flex flex-col justify-between
        rounded-2xl bg-white p-4 card-shadow
        w-full min-h-[360px]
      "
    >
      <div>
        <div className="mb-4 w-full rounded-xl overflow-hidden bg-[--gray-bg] relative aspect-[4/5]">
          <Image
            src={tree.image}
            alt={tree.name}
            fill
            className="object-contain transition-opacity duration-300"
            unoptimized
            priority
          />
        </div>

        <h3 className="text-sm font-semibold text-gray-900">
          {tree.name}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-[--text-muted] line-clamp-3">
          {tree.description}
        </p>

        <div className="mt-4 flex items-center justify-between text-xs font-medium">
          <span className="rounded-full bg-[#e4f9ec] px-3 py-1 text-[0.7rem] text-[#1a7f42]">
            {tree.tag}
          </span>
          <span className="text-sm font-semibold text-gray-900">
            ৳{tree.price}
          </span>
        </div>
      </div>

      <div className="mt-4">
        <Button
          className="w-full rounded-full bg-(--green-primary) py-2.5 text-sm text-white"
          onClick={() => onAddToCart(tree)}
        >
          Add to Cart
        </Button>
      </div>
    </article>
  );
}
