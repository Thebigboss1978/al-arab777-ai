"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/tours", label: "Tours" },
    { href: "/hotels", label: "Hotels" },
    { href: "/packages", label: "Packages" },
    { href: "/gallery", label: "Gallery" },
    { href: "/family", label: "Family" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-egyptian-gold/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-egyptian-gold font-playfair">AlArab 777</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-egyptian-gold transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
            <Button
              variant="outline"
              className="border-egyptian-gold text-egyptian-gold hover:bg-egyptian-gold hover:text-primary-foreground bg-transparent"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-egyptian-gold"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-egyptian-gold/20">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-muted-foreground hover:text-egyptian-gold transition-colors duration-200 px-4 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4">
                <Button
                  variant="outline"
                  className="w-full border-egyptian-gold text-egyptian-gold hover:bg-egyptian-gold hover:text-primary-foreground bg-transparent"
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
