import Link from "next/link";
import Button from "./Button";

export default function Navbar() {
  return (
    <header
      className="bg-(--green-primary) text-white"
      aria-label="Main navigation"
    >
      <div className="app-container flex items-center justify-between py-4">
        <Link href="/" className="text-lg font-semibold tracking-wide">
          Green Earth
        </Link>

      <nav className="hidden gap-10 text-sm font-medium md:flex">
  <Link href="#about">
    About
  </Link>
  <Link href="/" >
    Gallery
  </Link>
  <Link href="#trees" >
    Choose a tree
  </Link>
</nav>

        <Button
          as={Link}
          href="#donate"
          className="bg-(--yellow-primary) text-sm text-black px-6 py-2 rounded-full shadow-none"
        >
          Plant a Tree
        </Button>
      </div>
    </header>
  );
}
