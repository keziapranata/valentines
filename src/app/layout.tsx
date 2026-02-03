import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Just for Daryl :)",
  description:
    "Hi baby, come play a memory game with me :) Open lewat laptop ya, I hope this makes you smile.. Set aside 15 mins!",
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
