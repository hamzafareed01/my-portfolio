import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";   // <-- add this

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "A personal portfolio built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <header className="bg-white shadow p-4 flex gap-6">
          <Link href="/" className="font-semibold hover:text-blue-600">Home</Link>
          <Link href="/about" className="hover:text-blue-600">About</Link>
          <Link href="/projects" className="hover:text-blue-600">Projects</Link>
          <Link href="/experience" className="hover:text-blue-600">Experience</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
        </header>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
