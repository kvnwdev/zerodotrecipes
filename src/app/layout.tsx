import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import { type Metadata } from "next";

import { TRPCReactProvider } from "@/trpc/react";
import Link from "next/link";
export const metadata: Metadata = {
  title: "0.recipes",
  description:
    "A collection of my personal recipes I have crafted over the years.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex min-h-screen flex-col bg-black text-white`}
      >
        <header className="border-b border-gray-800 p-4">
          <div className="container mx-auto">
            <Link href="/" className="text-xl font-bold">
              0.recipes
            </Link>
          </div>
        </header>
        <TRPCReactProvider>
          <main className="container mx-auto flex-1 p-4">{children}</main>
        </TRPCReactProvider>
        <footer className="border-t border-gray-800 p-4">
          <div className="container mx-auto text-center text-sm text-gray-500">
            made with ❤️ and ☕ by{" "}
            <Link
              target="_blank"
              href="https://kvnw.dev"
              className="hover:text-white"
            >
              Kevin
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
