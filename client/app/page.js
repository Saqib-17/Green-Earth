import HeroSection from "./components/HeroSection";
import MainTreeSection from "./components/MainTreeSection";
import Button from "./components/Button";
import { getTrees } from "../lib/getTrees";
import { getCategories } from "../lib/getCategories";

export const dynamic = "force-static"; // SSG style

export default async function HomePage() {
  const [trees, categories] = await Promise.all([
    getTrees(),
    getCategories()
  ]);

  return (
    <>
      <HeroSection />

      <MainTreeSection trees={trees} categories={categories} />

      {/* About the Campaign */}
      <section
        id="about"
        className="section-spacing bg-(--green-light)"
        aria-labelledby="about-heading"
      >
        <div className="app-container grid items-center gap-10 md:grid-cols-2">
          <div id="gallery">
            <div className="relative mx-auto max-w-sm overflow-hidden rounded-2xl bg-white card-shadow">
              <div className="h-72 w-full bg-(--gray-bg)" />
              {/* Replace above with a real <Image> later if you want */}
            </div>
          </div>

          <div>
            <h2
              id="about-heading"
              className="text-xl font-semibold text-gray-900"
            >
              About the Campaign
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-(--text-muted)">
              Green Earth is a global tree plantation initiative dedicated to
              fighting climate change. Since our start, we’ve planted hundreds
              of thousands of trees around the world. By joining our campaign,
              you help restore forests, create habitats for wildlife, and combat
              global warming.
            </p>
            <ul className="mt-4 space-y-1 list-disc pl-5 text-sm text-(--text-muted)">
              <li>Restoration of natural habitats</li>
              <li>Improvement of air quality</li>
              <li>Support for local communities</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section
        className="section-spacing bg-[#e2f4eb]"
        aria-labelledby="impact-heading"
      >
        <div className="app-container text-center">
          <h2
            id="impact-heading"
            className="text-xl font-semibold text-gray-900"
          >
            Our Impact
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="card-shadow rounded-2xl bg-white p-8">
              <p className="text-3xl font-semibold text-(--green-primary)">
                500K+
              </p>
              <p className="mt-2 text-xs uppercase tracking-wide text-(--text-muted)">
                Trees Planted
              </p>
            </div>

            <div className="card-shadow rounded-2xl bg-white p-8">
              <p className="text-3xl font-semibold text-(--green-primary)">
                120+
              </p>
              <p className="mt-2 text-xs uppercase tracking-wide text-(--text-muted)">
                Communities Involved
              </p>
            </div>

            <div className="card-shadow rounded-2xl bg-white p-8">
              <p className="text-3xl font-semibold text-(--green-primary)">
                30+
              </p>
              <p className="mt-2 text-xs uppercase tracking-wide text-(--text-muted)">
                Countries Reached
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation / Form */}
      <section
        id="donate"
        className="section-spacing bg-(--green-primary)"
        aria-labelledby="donate-heading"
      >
        <div className="app-container">
          <div className="card-shadow mx-auto max-w-xl rounded-2xl bg-[#0d5b28] p-8">
            <h2
              id="donate-heading"
              className="text-center text-xl font-semibold text-white"
            >
              Plant a Tree Today
            </h2>

           <form className="mt-6 space-y-4">

              <div>
                <label
                  htmlFor="name"
                  className="mb-1 block text-xs font-medium text-gray-100"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full rounded-md border border-transparent bg-white/95 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-transparent focus:outline-none"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-xs font-medium text-gray-100"
                >
                  Your Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full rounded-md border border-transparent bg-white/95 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-transparent focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="trees"
                  className="mb-1 block text-xs font-medium text-gray-100"
                >
                  Number of Trees
                </label>
                <select
                  id="trees"
                  className="w-full rounded-md border border-transparent bg-white/95 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-transparent focus:outline-none"
                  defaultValue="3"
                >
                  <option value="1">1 Tree</option>
                  <option value="3">3 Trees</option>
                  <option value="5">5 Trees</option>
                  <option value="10">10 Trees</option>
                  <option value="20">20 Trees</option>
                </select>
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  className="w-full bg-(--yellow-primary) py-3 text-sm font-semibold text-black"
                >
                  Donate Now
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
