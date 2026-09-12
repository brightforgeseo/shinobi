import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/studio")({
  beforeLoad: ({ location }) => {
    throw redirect({ href: `/about${location.searchStr}`, statusCode: 301 });
  },
});
