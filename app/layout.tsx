import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "A personal portfolio built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <header className="bg-white shadow p-4 flex gap-6">
          <a href="/" className="font-semibold hover:text-blue-600">Home</a>
          <a href="/about" className="hover:text-blue-600">About</a>
          <a href="/projects" className="hover:text-blue-600">Projects</a>
          <a href="/experience" className="hover:text-blue-600">Experience</a>
          <a href="/contact" className="hover:text-blue-600">Contact</a>
        </header>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}

