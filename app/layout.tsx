import type { Metadata } from "next";
import "./globals.css";
import { FewchursButton } from "@fewchurs/next";

export const metadata: Metadata = {
  title: "myapp",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        {children} <FewchursButton floating />
      </body>
    </html>
  );
}
