import Image from "next/image";
import Button from "./Button";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#CFF0DC]" 
      aria-labelledby="hero-heading"
    >
      {/* Left leaf */}
      <Image
        src="/images/hero-left.png"
        alt="Leaf left"
        width={520}
        height={520}
        priority
        className="absolute left-0 bottom-0 hidden md:block lg:w-[560px] xl:w-[600px]"
      />

      {/* Right leaf */}
      <Image
        src="/images/hero-right.png"
        alt="Leaf right"
        width={520}
        height={520}
        priority
        className="absolute right-0 bottom-0 hidden md:block lg:w-[560px] xl:w-[600px]"
      />

      {/* Center content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-24 text-center md:py-28">
        <h1
          id="hero-heading"
          className="text-3xl font-semibold tracking-tight text-(--text-main) sm:text-4xl lg:text-5xl"
        >
          Plant a Tree, Grow a Future
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-(--text-muted) sm:text-base">
          Join our mission to plant 1 million trees and make the Earth greener
          for future generations.
        </p>

        <div className="mt-8 flex justify-center">
          <Button
            as="a"
            href="#trees"
            className="bg-(--yellow-primary) px-8 py-3 text-sm text-black sm:text-base"
          >
            Get Involved
          </Button>
        </div>
      </div>
    </section>
  );
}
