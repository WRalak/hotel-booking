import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  {
    rel: "stylesheet",
    href: "https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap",
  },
];

export function meta() {
  return [
    { title: "Prime" },
    { name: "description", content: "Welcome to Remix!" },
  ];
}

export default function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full bg-white text-gray-900">
        <Navbar />
        <main className="min-h-[calc(100vh-160px)]">
          <Outlet />
        </main>
        <Footer />

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}


