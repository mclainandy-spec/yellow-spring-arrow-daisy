export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-paper/92 backdrop-blur-md">
      <div className="mx-auto flex h-header max-w-7xl items-center justify-between gap-4 border-b-2 border-walnut px-4 sm:px-8">
        <a
          className="flex min-w-0 items-center"
          href="https://forte1design.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Forte 1 Design"
        >
          <img
            src="/images/logo-header.jpg"
            alt="Forte 1 Design"
            width={638}
            height={232}
            className="h-10 w-auto sm:h-16"
          />
        </a>
        <a
          className="inline-flex h-11 shrink-0 items-center justify-center bg-ink px-3 text-center text-2xs font-medium tracking-wide text-cream uppercase hover:bg-walnut sm:px-4 sm:text-xs sm:tracking-nav"
          href="https://forte1design.com/contact"
          target="_blank"
          rel="noopener noreferrer"
        >
          Request building plans
        </a>
      </div>
    </header>
  );
}
