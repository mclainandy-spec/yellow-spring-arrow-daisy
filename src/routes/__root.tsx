import { useEffect } from "react";
import {
  createRootRoute,
  HeadContent,
  Link,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import appCss from "../styles.css?url";

const APP_NAME = "The Snowline Chalet";
const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Outfit:wght@300;400;500;600&display=swap";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      {
        name: "description",
        content:
          "4 bedroom · 2 bath · two-story alpine house. Photograph, line drawing, interior, and to-scale floor plans.",
      },
      { name: "theme-color", content: "#f4f0e8" },
      { name: "robots", content: "noindex, nofollow" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  component: RootDocument,
  notFoundComponent: NotFound,
});

function FontLoader() {
  useEffect(() => {
    if (document.getElementById("forte-fonts")) return;
    const link = document.createElement("link");
    link.id = "forte-fonts";
    link.rel = "stylesheet";
    link.href = FONT_HREF;
    document.head.appendChild(link);
  }, []);
  return null;
}

function RootDocument() {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
        <style
          dangerouslySetInnerHTML={{
            __html:
              "html,body{background:#f4f0e8;color:#0a0a0a;margin:0;min-height:100%;}",
          }}
        />
      </head>
      <body className="bg-paper font-sans text-ink antialiased">
        <FontLoader />
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}

function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center bg-paper px-6 text-center text-ink">
      <p className="text-2xs font-medium tracking-label text-mute uppercase">
        Forte 1 Design
      </p>
      <h1 className="mt-4 font-display text-4xl leading-none">Page not found</h1>
      <p className="mt-4 max-w-sm text-sm text-ink-soft">
        This unlisted page does not exist. Return to the studio.
      </p>
      <a
        href="https://forte1design.com"
        className="mt-8 inline-flex h-12 items-center bg-ink px-7 text-sm font-medium text-cream hover:bg-walnut"
      >
        Forte 1 Design
      </a>
      <Link
        to="/"
        className="mt-4 text-sm text-ink-soft underline decoration-ink/25 underline-offset-4 hover:text-ink"
      >
        Private listing
      </Link>
    </main>
  );
}
