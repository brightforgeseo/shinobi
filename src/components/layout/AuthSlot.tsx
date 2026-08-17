import { Link } from "@tanstack/react-router";
import { UserButton } from "@/lib/auth/gates";
import { useCurrentUserState } from "@/lib/auth/use-current-user";

export function AuthSlot() {
  const { user, isPending } = useCurrentUserState();
  if (isPending) {
    return <div className="h-8 w-16 animate-pulse rounded-sm bg-ink/8" />;
  }
  if (user) return <UserButton />;
  return (
    <Link
      to="/login"
      className="text-[0.8125rem] text-muted transition-colors hover:text-ink"
    >
      Sign in
    </Link>
  );
}
