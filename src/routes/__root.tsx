import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { Toaster } from "sonner";
import appCss from "../styles.css?url";

const APP_NAME = "Shinobi | Creative Industry SEO Philippines";
const OG_IMAGE = "https://shinobiseo.netlify.app/og.jpg";
const OG_URL = "https://shinobiseo.netlify.app/";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      {
        name: "description",
        content:
          "SEO and web development for games, film, music, design and culture-led brands. Philippines-based, working worldwide.",
      },
      { name: "apple-mobile-web-app-title", content: "Shinobi" },
      { name: "theme-color", content: "#fff6e8" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: APP_NAME },
      {
        name: "twitter:description",
        content:
          "Creative industry SEO from the Philippines for games, film, music, design and culture-led brands. A Bright Forge SEO studio.",
      },
      { name: "twitter:image", content: OG_IMAGE },
      { property: "og:type", content: "website" },
      { property: "og:url", content: OG_URL },
      { property: "og:title", content: APP_NAME },
      {
        property: "og:description",
        content:
          "Creative industry SEO from the Philippines for games, film, music, design and culture-led brands. A Bright Forge SEO studio.",
      },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:secure_url", content: OG_IMAGE },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Shinobi Search Dojo" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=IBM+Plex+Mono:wght@400..500&family=Noto+Sans+JP:wght@400..700&display=swap",
      },
    ],
  }),
  component: () => (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
          <Toaster
            position="bottom-right"
            toastOptions={{
              className: "font-sans",
            }}
          />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
