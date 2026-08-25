import { createFileRoute } from "@tanstack/react-router";
import { SnowlineListing } from "@/components/snowline-listing";

export const Route = createFileRoute("/")({
  component: SnowlineListing,
  head: () => ({
    meta: [
      {
        title: "Professional Design — The Snowline Chalet | Forte 1 Design",
      },
    ],
  }),
});
