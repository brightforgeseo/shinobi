import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/work")({
  beforeLoad: ({ location }) => {
    throw redirect({ href: `/seo-services${location.searchStr}`, statusCode: 301 });
  },
});
