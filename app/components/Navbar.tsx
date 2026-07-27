"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);

      const sections = navItems.map((item) =>
        document.querySelector(item.href)
      );

      for (const section of sections) {
        if (!section) continue;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(section.id);
          break;
        }
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "border-b border-[var(--border)]/15 bg-[var(--background)]/80 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <Link
            href="/"
            className="font-[family-name:var(--font-pixel)] text-lg tracking-wide text-[var(--primary)]"
          >
            YASHASWI
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`relative text-sm font-medium transition-colors ${
                    active === item.href.slice(1)
                      ? "text-[var(--primary)]"
                      : "text-[var(--secondary)] hover:text-[var(--primary)]"
                  }`}
                >
                  {item.label}

                  {active === item.href.slice(1) && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-[var(--accent)]"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Link
              href="/resume.pdf"
              target="_blank"
              className="rounded-full border-2 border-[var(--border)] bg-[var(--accent)] px-5 py-2 text-sm font-semibold text-[var(--primary)] transition duration-200 hover:-translate-y-1"
            >
              Resume
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden"
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[var(--background)] pt-24"
          >
            <div className="flex flex-col items-center gap-8 text-lg">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-medium text-[var(--primary)]"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/resume.pdf"
                target="_blank"
                className="mt-4 rounded-full border-2 border-[var(--border)] bg-[var(--accent)] px-6 py-3 font-semibold text-[var(--primary)]"
              >
                Resume
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}