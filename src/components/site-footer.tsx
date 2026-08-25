export function SiteFooter() {
  return (
    <footer className="border-t-2 border-walnut bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <a
          href="https://forte1design.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Forte 1 Design"
        >
          <img
            src="/images/logo.jpg"
            alt="Forte 1 Design"
            width={486}
            height={560}
            className="h-24 w-auto sm:h-36"
          />
        </a>
        <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/70">
          Conceptual architecture for cabins, family homes, and custom house
          plans — from a studio with one bath to four bedrooms and 2.5 baths.
        </p>
        <p className="mt-8 text-2xs tracking-wide text-cream/40 uppercase">
          © 2026 Forte 1 Design · Unlisted listing
        </p>
      </div>
    </footer>
  );
}
