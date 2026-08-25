import type { ErrorComponentProps } from "@tanstack/react-router";

export function AppErrorComponent({ error }: ErrorComponentProps) {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center bg-paper px-6 text-center text-ink">
      <p className="text-2xs font-medium tracking-label text-mute uppercase">
        Forte 1 Design
      </p>
      <h1 className="mt-4 font-display text-4xl leading-none">
        The listing is still here.
      </h1>
      <p className="mt-4 max-w-md text-sm text-ink-soft">
        Reload the private page to open The Snowline Chalet.
      </p>
      <a
        href="/"
        className="mt-8 inline-flex h-12 items-center bg-ink px-7 text-sm font-medium text-cream"
      >
        Open listing
      </a>
      <p className="sr-only">{error.message}</p>
    </main>
  );
}