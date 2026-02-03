import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Just for Daryl :)",
  description:
    "Hi baby, come play a game :) I hope this makes you smile.. Please open lewat laptop ya",
  keywords: [
    "Valentine's card game",
    "romantic proposal game",
    "photo card challenge",
    "Valentine's Day surprise",
    "couples game",
    "valentine's day game",
    "proposal game",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
