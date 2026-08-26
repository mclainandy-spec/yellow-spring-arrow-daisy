import { useState } from "react";
import { FloorPlan } from "@/components/floor-plan";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { cn } from "@/lib/utils";

const CONTACT = "https://forte1design.com/contact";

export function SnowlineListing() {
  return (
    <div className="flex min-h-dvh flex-col bg-paper text-ink">
      <SiteHeader />
      <article className="flex-1">
        <Hero />
        <ListingGallery />
        <SpecSet />
        <PlanSection />
      </article>
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative bg-ink pt-20 sm:min-h-hero sm:bg-paper sm:pt-0">
      <div className="relative overflow-hidden sm:absolute sm:inset-0">
        <img
          src="/images/snowline-dusk.jpg"
          alt="The Snowline Chalet"
          width={1500}
          height={844}
          decoding="async"
          className="aspect-hero w-full object-cover object-center sm:absolute sm:inset-0 sm:aspect-auto sm:h-full sm:object-hero"
        />
        <div className="absolute inset-0 hidden bg-linear-to-t from-ink/80 via-ink/25 to-ink/20 sm:block" />
      </div>
      <div className="relative px-4 pt-8 pb-10 sm:flex sm:min-h-hero sm:flex-col sm:justify-end sm:px-8 sm:pt-36 sm:pb-20">
        <div className="mx-auto w-full max-w-7xl">
          <p className="text-2xs font-medium tracking-label text-cream/70 uppercase">
            Professional Design
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl leading-display font-normal text-cream sm:mt-4 sm:text-6xl lg:text-7xl">
            The Snowline<em className="italic"> Chalet.</em>
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-cream/85 sm:mt-5 sm:text-base">
            4 bedroom · 2 bath · two-story alpine house. A professional design
            listing — photograph, line drawing, interiors, and to-scale floor
            plans.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
            <a
              className="inline-flex h-12 items-center justify-center bg-cream px-7 text-sm font-medium text-ink hover:bg-paper"
              href="#listing"
            >
              View the listing
            </a>
            <a
              className="inline-flex h-12 items-center justify-center border border-cream/40 px-7 text-sm font-medium tracking-nav text-cream uppercase hover:bg-cream/10"
              href={CONTACT}
              target="_blank"
              rel="noopener noreferrer"
            >
              Request building plans
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ListingGallery() {
  const [view, setView] = useState<"photo" | "drawing">("photo");
  const drawing = view === "drawing";

  return (
    <section id="listing" className="scroll-mt-24 border-b border-line bg-paper">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-2xs font-medium tracking-label text-mute uppercase">
          Listing
        </p>
        <h2 className="mt-3 font-display text-4xl leading-title font-normal sm:text-5xl">
          4 bedroom, 2 bath chalet
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft">
          A mountain chalet drawn as a professional design set: warm cedar,
          black steel, and a stone chimney. The great room is a two-story glass
          gable facing the range; a primary suite sits on the main floor; three
          bedrooms and a second bath occupy the upper wings. Four bedrooms, two
          baths — the upper end of the Forte range, built for snow country.
        </p>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <div className="flex flex-col border border-line bg-cream">
            <div className="relative overflow-hidden bg-paper-deep">
              <img
                src={
                  drawing
                    ? "/images/snowline-ink.jpg"
                    : "/images/snowline-dusk.jpg"
                }
                alt={
                  drawing
                    ? "The Snowline Chalet line drawing"
                    : "The Snowline Chalet exterior"
                }
                width={1500}
                height={844}
                decoding="async"
                className="aspect-photo w-full object-cover"
              />
              <ShareButton
                href={
                  drawing
                    ? "/images/snowline-ink.jpg"
                    : "/images/snowline-dusk.jpg"
                }
                title={
                  drawing
                    ? "The Snowline Chalet line drawing"
                    : "The Snowline Chalet exterior"
                }
              />
            </div>
            <div className="flex border-t border-line">
              <TabButton
                active={!drawing}
                onClick={() => setView("photo")}
              >
                Photograph
              </TabButton>
              <TabButton
                active={drawing}
                onClick={() => setView("drawing")}
              >
                Line drawing
              </TabButton>
            </div>
            <div className="px-5 py-5">
              <p className="text-2xs font-medium tracking-nav text-mute uppercase">
                4 bed · 2 bath · 2,180 sf · Two story
              </p>
              <h3 className="mt-2 font-display text-2xl leading-snug italic">
                The Snowline Chalet
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                A four-bedroom, two-bath alpine house with a two-story glass
                gable.
              </p>
            </div>
          </div>

          <div className="flex flex-col border border-line bg-cream">
            <div className="relative overflow-hidden bg-paper-deep">
              <img
                src="/images/snowline-great-room.jpg"
                alt="The Snowline Chalet interior — great room"
                width={1057}
                height={1920}
                decoding="async"
                className="aspect-photo w-full object-cover object-great-room"
              />
              <ShareButton
                href="/images/snowline-great-room.jpg"
                title="The Snowline Chalet great room"
              />
            </div>
            <div className="px-5 py-5">
              <p className="text-2xs font-medium tracking-nav text-mute uppercase">
                Interior
              </p>
              <h3 className="mt-2 font-display text-2xl leading-snug italic">
                Great room
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Two-story cedar, black steel, and a hearth. The gable glass
                opens the living floor to the snow and the range.
              </p>
            </div>
          </div>

          <div className="flex flex-col border border-line bg-cream lg:col-span-2 lg:grid lg:grid-cols-2">
            <div className="relative overflow-hidden bg-paper-deep">
              <img
                src="/images/snowline-kitchen.jpg"
                alt="The Snowline Chalet kitchen and dining"
                width={1048}
                height={1920}
                decoding="async"
                className="aspect-interior w-full object-cover object-kitchen lg:aspect-auto lg:min-h-96 lg:h-full"
              />
              <ShareButton
                href="/images/snowline-kitchen.jpg"
                title="The Snowline Chalet kitchen and dining"
              />
            </div>
            <div className="flex flex-col justify-center px-5 py-5 sm:px-8">
              <p className="text-2xs font-medium tracking-nav text-mute uppercase">
                Interior
              </p>
              <h3 className="mt-2 font-display text-2xl leading-snug italic">
                Kitchen and dining
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-soft">
                Cedar, black millwork, and a stacked-stone fireplace. The
                kitchen island and dining table sit in one room — the chalet
                cooked and eaten by the hearth, looking toward the snow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ShareButton({ href, title }: { href: string; title: string }) {
  const [copied, setCopied] = useState(false);

  async function onShare() {
    const url = new URL(href, window.location.href).href;
    try {
      if (navigator.share) {
        await navigator.share({ title, text: title, url });
        return;
      }
    } catch (err) {
      if (err instanceof Error && err.name === "AbortError") return;
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      window.prompt("Copy image link", url);
    }
  }

  return (
    <button
      type="button"
      onClick={onShare}
      className="absolute top-3 right-3 z-10 inline-flex h-9 items-center bg-ink px-3 text-2xs font-medium tracking-nav text-cream uppercase hover:bg-walnut"
    >
      {copied ? "Copied" : "Share"}
    </button>
  );
}

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "flex-1 px-4 py-3 text-xs font-medium tracking-nav uppercase transition-colors duration-150",
        active
          ? "bg-ink text-cream"
          : "bg-cream text-ink-soft hover:bg-paper hover:text-ink",
      )}
    >
      {children}
    </button>
  );
}

function SpecSet() {
  const specs = [
    ["Bedrooms", "4 bed"],
    ["Baths", "2"],
    ["Stories", "Two"],
    ["Heated area", "2,180 sf"],
    ["Garage", "None — snow court"],
    ["Width × depth", "48' × 34'"],
  ] as const;

  return (
    <section className="border-b border-line bg-paper">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-2xs font-medium tracking-label text-mute uppercase">
            Professional set
          </p>
          <h2 className="mt-3 font-display text-4xl leading-title font-normal italic sm:text-5xl">
            Drawn to be built.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-soft">
            Primary suite on the main floor; three bedrooms and the second bath
            on the upper wings, with a loft looking into the great room. Cedar
            rain-screen, black steel, stone chimney, standing-seam roof.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {[
              "Cedar rain-screen",
              "Black steel",
              "Stone chimney",
              "Standing-seam metal",
            ].map((item) => (
              <li
                key={item}
                className="border border-line bg-cream px-3 py-1 text-xs tracking-nav text-ink-soft uppercase"
              >
                {item}
              </li>
            ))}
          </ul>
          <a
            className="mt-8 inline-flex h-12 items-center justify-center bg-ink px-7 text-sm font-medium tracking-nav text-cream uppercase hover:bg-walnut"
            href={CONTACT}
            target="_blank"
            rel="noopener noreferrer"
          >
            Request building plans
          </a>
        </div>
        <dl className="grid grid-cols-2 gap-px overflow-hidden border border-line bg-line">
          {specs.map(([label, value]) => (
            <div key={label} className="bg-cream p-4 sm:p-5">
              <dt className="text-2xs font-medium tracking-label text-mute uppercase">
                {label}
              </dt>
              <dd className="mt-1 font-display text-xl italic sm:text-2xl">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function PlanSection() {
  const [floor, setFloor] = useState<"main" | "upper">("main");

  return (
    <section className="border-b border-line bg-cream">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-2xs font-medium tracking-label text-mute uppercase">
          To-scale schematic
        </p>
        <h2 className="mt-3 font-display text-4xl leading-title font-normal italic sm:text-5xl">
          Floor plans
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft">
          Main floor: great room, kitchen, dining, primary suite, and mud.
          Upper: loft, three bedrooms, and the second bath.
        </p>
        <div className="mt-8 min-h-96 border border-line bg-paper p-3 sm:p-4">
          <div className="mb-3 flex gap-1">
            <PlanTab
              active={floor === "main"}
              onClick={() => setFloor("main")}
            >
              Main
            </PlanTab>
            <PlanTab
              active={floor === "upper"}
              onClick={() => setFloor("upper")}
            >
              Upper
            </PlanTab>
          </div>
          <div className="overflow-x-auto">
            <div className="min-w-72">
              <FloorPlan floor={floor} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PlanTab({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "h-10 px-4 text-xs font-medium tracking-nav uppercase transition-colors duration-150",
        active ? "bg-ink text-cream" : "bg-ink/5 text-ink hover:bg-ink/10",
      )}
    >
      {children}
    </button>
  );
}
