"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const footerLinks = [
  {
    title: "Product",
    links: [
      { name: "Features", href: "/#features" },
      { name: "Pricing", href: "/pricing" },
      { name: "Security", href: "/security" },
      { name: "Roadmap", href: "/roadmap" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Documentation", href: "/docs" },
      { name: "API Reference", href: "/api" },
      { name: "Status", href: "/status" },
      { name: "Support", href: "/support" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
      { name: "License", href: "/license" },
      { name: "Cookies", href: "/cookies" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="relative border-t border-white/10 bg-gradient-to-b from-surface/50 to-surface">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link
              href="/"
              className="text-xl font-bold bg-neon-gradient bg-clip-text text-transparent"
            >
              QuickConvert AI
            </Link>
            <p className="text-sm text-on-surface-variant max-w-xs">
              The world's most advanced AI file conversion engine. Ultra-fast, ultra-secure.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-on-surface-variant hover:text-primary transition-all duration-300"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-on-surface-variant hover:text-primary transition-all duration-300"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-on-surface-variant hover:text-primary transition-all duration-300"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-on-surface-variant hover:text-primary transition-all duration-300"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column) => (
            <div key={column.title} className="space-y-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-on-surface-variant hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-12" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-on-surface-variant text-center md:text-left">
            © 2024 QuickConvert AI. All rights reserved. Crafted with love by the neural collective.
          </p>
          <div className="flex items-center gap-4">
            <button className="text-xs text-on-surface-variant hover:text-primary transition-colors duration-300">
              Change Language
            </button>
            <button className="text-xs text-on-surface-variant hover:text-primary transition-colors duration-300">
              System Status
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};