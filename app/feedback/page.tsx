import { Suspense } from "react";
import { FewchursBoard } from "@fewchurs/next";
import "@fewchurs/next/styles.css";

export default function FeedbackPage() {
  return (
    <Suspense fallback={<p>Loading…</p>}>
      <FewchursBoard />
    </Suspense>
  );
}
