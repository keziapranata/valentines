import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Just for Daryl :)",
  description:
    "Hi baby, come play a memory game :) I hope this makes you smile.. Please open lewat laptop ya, and set aside 15 minutes!!",
  openGraph: {
    title: "Just for Daryl :)",
    description:
      "Hi baby, come play a memory game :) I hope this makes you smile.. Please open lewat laptop ya, and set aside 15 minutes!!",
    url: "https://i-love-you-daryl.vercel.app/",
    type: "website",
    siteName: "Just for Daryl :)",
  },
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
