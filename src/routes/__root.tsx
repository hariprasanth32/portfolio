import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const SITE_URL = "https://hariprasanth32.vercel.app";

const jsonLd = JSON.stringify([
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "hariprasanth32",
    "url": SITE_URL,
    "description": "Personal portfolio website of Hari Prasanth S — Network Engineer, NOC, CCNA, Linux, Cloud Computing.",
    "author": {
      "@type": "Person",
      "name": "Hari Prasanth S",
      "url": SITE_URL,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Hari Prasanth S",
    "jobTitle": "Network Engineer",
    "url": SITE_URL,
    "image": `${SITE_URL}/hariprasanth.jpg`,
    "sameAs": [
      "https://github.com/hariprasanth32",
      "https://www.linkedin.com/in/hariprasanth32",
    ],
    "knowsAbout": [
      "Network Engineering",
      "Network Support",
      "NOC",
      "CCNA",
      "Linux",
      "Cloud Computing",
      "AWS",
      "Azure",
      "IT Infrastructure",
      "AI & Data Science",
    ],
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "AI & Data Science Program",
    },
  },
]);

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "google-site-verification", content: "bJhTrHdL2ItXHFgK8r4JJVHOatYFgO9KPPMY3OStb3s" },
      { title: "Hari Prasanth S | Network Engineer | Network Support | NOC | CCNA | Linux" },
      { name: "description", content: "Hari Prasanth S is an AI & Data Science graduate with skills in Network Engineering, Network Support, NOC, CCNA, Linux, Cloud Computing, AWS, Azure, and IT Infrastructure." },
      { name: "author", content: "Hari Prasanth S" },
      { name: "robots", content: "index, follow" },
      { name: "keywords", content: "Hari Prasanth S, hariprasanth32, Network Engineer, Network Support, NOC, CCNA, Linux, Cloud Computing, AWS, Azure, IT Infrastructure, AI Data Science" },
      // Open Graph
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:title", content: "Hari Prasanth S | Network Engineer | Network Support | NOC | CCNA | Linux" },
      { property: "og:description", content: "Hari Prasanth S is an AI & Data Science graduate with skills in Network Engineering, Network Support, NOC, CCNA, Linux, Cloud Computing, AWS, Azure, and IT Infrastructure." },
      { property: "og:image", content: `${SITE_URL}/hariprasanth.jpg` },
      { property: "og:site_name", content: "hariprasanth32" },
      { property: "og:locale", content: "en_US" },
      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Hari Prasanth S | Network Engineer | NOC | CCNA | Linux" },
      { name: "twitter:description", content: "Hari Prasanth S is an AI & Data Science graduate with skills in Network Engineering, Network Support, NOC, CCNA, Linux, Cloud Computing, AWS, and Azure." },
      { name: "twitter:image", content: `${SITE_URL}/hariprasanth.jpg` },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600&family=Manrope:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/hariprasanth.jpg", type: "image/jpeg" },
      { rel: "canonical", href: SITE_URL },
      { rel: "sitemap", type: "application/xml", href: `${SITE_URL}/sitemap.xml` },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: jsonLd,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Analytics />
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
