import ClientLayout from "./ClientLayout";
import { type Metadata } from "next";
import type { Viewport } from "next";

export const metadata: Metadata = {
  title: "Leo Morton",
  icons: {
    icon: "/favicon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#e0e0e0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
