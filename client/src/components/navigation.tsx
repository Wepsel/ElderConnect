import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Building2, User } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "./ui/button";

export default function Navigation() {
  const [location] = useLocation();
  const { user, logout } = useAuth();

  const links = [
    { href: "/", label: "Activiteitencentra", icon: Building2 },
    ...(user ? [{ href: "/profile", label: "Mijn Profiel", icon: User }] : []),
  ];

  return (
    <nav className="border-b bg-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-8">
            {links.map(({ href, label, icon: Icon }) => (
              <Link key={href} href={href}>
                <a
                  className={cn(
                    "flex items-center space-x-2 text-lg font-medium transition-colors hover:text-primary",
                    location === href ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  <Icon className="h-5 w-5" />
                  <span>{label}</span>
                </a>
              </Link>
            ))}
          </div>

          <div>
            {user ? (
              <Button
                variant="outline"
                onClick={() => logout()}
              >
                Uitloggen
              </Button>
            ) : (
              <Link href="/auth">
                <Button>Inloggen</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}