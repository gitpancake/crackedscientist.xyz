import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "crackedscientist.xyz",
  description: "Cracked Scientist. Stay tuned.",
  twitter: {
    images: [{ url: "", alt: "crackedscientist.xyz" }],
    card: "summary_large_image",
    description: "Cracked Scientist. Stay tuned.",
    title: "crackedscientist.xyz",
  },
  openGraph: {
    images: [{ url: "", alt: "crackedscientist.xyz" }],
    description: "Cracked Scientist. Stay tuned.",
    title: "crackedscientist.xyz",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
