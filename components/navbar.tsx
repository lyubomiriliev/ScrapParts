"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                width={400}
                height={100}
                alt="/"
                src="/scrapFiguresLogo.png"
                className="w-28"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link
                href="/#about"
                className="hover:text-primary transition-colors"
              >
                About
              </Link>
              <Link
                href="/#gallery"
                className="hover:text-primary transition-colors"
              >
                Gallery
              </Link>
              <Link
                href="/products"
                className="hover:text-primary transition-colors"
              >
                Shop
              </Link>
              <Link
                href="/#exhibitions"
                className="hover:text-primary transition-colors"
              >
                Exhibitions
              </Link>
              <Link href="/#contact">
                <Button variant="secondary">Contact</Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            <Link
              href="/#about"
              className="block px-3 py-2 hover:bg-accent rounded-md"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/#gallery"
              className="block px-3 py-2 hover:bg-accent rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/products"
              className="block px-3 py-2 hover:bg-accent rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Shop
            </Link>
            <Link
              href="/#exhibitions"
              className="block px-3 py-2 hover:bg-accent rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Exhibitions
            </Link>
            <Link
              href="/#contact"
              className="block px-3 py-2 hover:bg-accent rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
