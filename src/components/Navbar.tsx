"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { href: "/#sobre", label: "Sobre" },
  { href: "/#o-que-buscamos", label: "O que buscamos" },
  { href: "/#como-doar", label: "Como funciona" },
  { href: "/#voluntario", label: "Contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Fecha o menu ao trocar de hash/rota (clicou em um link)
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    window.addEventListener("popstate", close);
    return () => {
      window.removeEventListener("hashchange", close);
      window.removeEventListener("popstate", close);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#272727]/95 backdrop-blur supports-[backdrop-filter]:bg-[#272727]/80">
      {/* Link de pulo para conteúdo (acessibilidade) */}
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-black"
      >
        Pular para conteúdo
      </a>

      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo + nome */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo2.png"
            alt="Logo Estação Sorriso"
            width={36}
            height={36}
            className="rounded-full"
            priority
          />
        </Link>

        {/* Menu desktop */}
        <ul className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-[#f8f4e8]/90 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/#como-doar"
              className="inline-flex items-center rounded-lg bg-amber-500 px-4 py-2 text-sm font-medium text-black hover:bg-amber-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-500"
            >
              Quero doar
            </Link>
          </li>
        </ul>

        {/* Botão mobile */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-[#f8f4e8] hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          onClick={() => setOpen((v) => !v)}
          aria-controls="mobile-menu"
          aria-expanded={open ? "true" : "false"}
          aria-label="Abrir menu"
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Menu mobile */}
      <div id="mobile-menu" className={`md:hidden border-t border-white/10 ${open ? "block" : "hidden"}`}>
        <ul className="space-y-1 px-4 py-3">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block rounded-md px-3 py-2 text-[#f8f4e8] hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="pt-1">
            <Link
              href="/#como-doar"
              className="block text-center rounded-md px-3 py-2 bg-amber-500 text-black font-medium hover:bg-amber-600"
              onClick={() => setOpen(false)}
            >
              Quero doar
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
