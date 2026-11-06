import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import { FewchursButton } from "@fewchurs/next";

export const metadata: Metadata = {
  title: "myapp",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        {children}
        <Suspense fallback={null}>
          <FewchursButton floating />
        </Suspense>
      </body>
    </html>
  );
}
