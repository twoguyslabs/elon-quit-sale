import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import { headers } from "next/headers";
import ReownContextProvider from "@/context/reown";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "$QUIT Token Sale",
  description:
    "The angriest token in crypto. Join the revolution and buy $QUIT token.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersObj = await headers();
  const cookies = headersObj.get("cookie");

  return (
    <html lang="en" className="dark">
      <body>
        <ReownContextProvider cookies={cookies}>
          <Header />
          {children}
        </ReownContextProvider>
        <Toaster />
      </body>
    </html>
  );
}
