import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://i-love-you-daryl.vercel.app"),
  title: "Just for Daryl :)",
  description:
    "Hi baby, come play a memory game :) I hope this makes you smile.. Please open lewat laptop ya, and set aside 15 minutes!!",
  openGraph: {
    title: "Just for Daryl :)",
    description:
      "Hi baby, come play a memory game :) I hope this makes you smile.. Please open lewat laptop ya, and set aside 15 minutes!!",
    url: "https://i-love-you-daryl.vercel.app/",
    type: "website",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Just for Daryl 💖",
      },
    ],
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
