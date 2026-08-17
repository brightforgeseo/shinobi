import { createFileRoute, Link } from "@tanstack/react-router";
import { GROK_PROVIDERS, authEnabled, signIn } from "@/lib/auth/client";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/login")({
  component: Login,
  head: () => ({
    meta: [{ title: "Sign in — Shinobi" }],
  }),
});

function Login() {
  return (
    <main className="relative grid min-h-dvh place-items-center overflow-hidden bg-paper px-5 py-16 text-ink">
      <div className="speed-lines pointer-events-none absolute inset-0 opacity-20 mix-blend-multiply" />
      <div className="relative w-full max-w-sm manga-panel p-6">
        <Link to="/" className="font-display text-2xl">
          SHINOBI 忍
        </Link>
        <h1 className="mt-6 font-display text-3xl">CLIENT ROOM</h1>
        <p className="mt-2 text-sm text-muted">
          Reporting, briefs, and working docs for current retainers.
        </p>
        <div className="mt-8 space-y-3">
          {authEnabled ? (
            GROK_PROVIDERS.map((p) => (
              <Button
                key={p.providerId}
                type="button"
                variant="outline"
                className="w-full"
                onClick={() => signIn(p.providerId, { callbackURL: "/" })}
              >
                Continue with {p.label}
              </Button>
            ))
          ) : (
            <p className="text-sm text-muted">Sign-in is disabled.</p>
          )}
        </div>
        <Link
          to="/"
          className="mt-8 inline-block text-sm text-muted hover:text-ink"
        >
          Back to the studio
        </Link>
      </div>
    </main>
  );
}
