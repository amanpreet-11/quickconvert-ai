"use client";
import Link from "next/link";
import { Button } from "../ui/Button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { name: "Product", href: "/" },
  { name: "Features", href: "/#features" },
  { name: "Pricing", href: "/pricing" },
  { name: "Developers", href: "/docs" },
];

export const TopNavBar = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-gradient-to-b from-surface/95 to-surface/80 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        {/* Logo */}
        <Link 
          href="/" 
          className="text-2xl font-bold bg-neon-gradient bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
        >
          QuickConvert
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300",
                pathname === link.href
                  ? "bg-primary/20 text-primary shadow-neon-glow-sm"
                  : "text-on-surface-variant hover:text-primary hover:bg-white/5"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <Link href="/login" className="hidden md:block">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
          </Link>
          <Button variant="primary" size="sm" className="hidden md:flex">
            Get Started
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {mobileOpen ? (
              <X className="h-5 w-5 text-primary" />
            ) : (
              <Menu className="h-5 w-5 text-primary" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-surface/95 backdrop-blur-2xl animate-slide-down">
          <div className="px-6 py-4 space-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "block px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-300",
                  pathname === link.href
                    ? "bg-primary/20 text-primary"
                    : "text-on-surface-variant hover:text-primary hover:bg-white/5"
                )}
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2 space-y-2">
              <Button variant="ghost" fullWidth>
                Sign In
              </Button>
              <Button variant="primary" fullWidth>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};