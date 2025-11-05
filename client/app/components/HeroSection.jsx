import Image from "next/image";
import Button from "./Button";

export default function HeroSection() {
  return (
    <section
      className="bg-(--green-light)"
      aria-labelledby="hero-heading"
    >
      <div className="app-container flex flex-col items-center gap-8 py-16 md:flex-row md:justify-between">
        {/* Left leaf */}
        <div className="hidden w-1/4 md:block">
          <Image
            src="/images/hero-left.png"
            alt="Leaf illustration"
            width={260}
            height={260}
            className="h-auto w-full"
            priority
          />
        </div>

        {/* Center copy */}
        <div className="text-center md:w-1/2 md:text-center">
          <h1
            id="hero-heading"
            className="text-3xl font-semibold tracking-tight text-(--text-main) sm:text-4xl lg:text-5xl"
          >
            Plant a Tree, Grow a Future
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-(--text-muted) sm:text-base">
            Join our mission to plant 1 million trees and make the Earth
            greener for future generations.
          </p>

          <div className="mt-8 flex justify-center">
            <Button
              as="a"
              href="#trees"
              className="bg-(--yellow-primary) text-black px-8 py-3 text-sm sm:text-base"
            >
              Get Involved
            </Button>
          </div>
        </div>

        {/* Right leaf */}
        <div className="hidden w-1/4 md:block">
          <Image
            src="/images/hero-right.png"
            alt="Leaf illustration"
            width={260}
            height={260}
            className="h-auto w-full"
            priority
          />
        </div>
      </div>
    </section>
  );
}
