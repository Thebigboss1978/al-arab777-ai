import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-egyptian-gold/20 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-egyptian-gold font-playfair">AlArab 777</div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your gateway to ancient Egypt. Experience the magic of pyramids, desert adventures, and authentic Egyptian
              culture.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-egyptian-gold">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-egyptian-gold">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-egyptian-gold">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-egyptian-gold">Quick Links</h3>
            <div className="space-y-2">
              {["Tours", "Hotels", "Packages", "Gallery", "Family", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="block text-muted-foreground hover:text-egyptian-gold transition-colors duration-200"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-egyptian-gold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="h-4 w-4 text-egyptian-gold" />
                <span className="text-sm">+20 100 244 6123</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="h-4 w-4 text-egyptian-gold" />
                <span className="text-sm">alarabclub777@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-egyptian-gold" />
                <span className="text-sm">Giza, Egypt</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-egyptian-gold">Newsletter</h3>
            <p className="text-muted-foreground text-sm">
              Subscribe for exclusive offers and Egyptian adventure updates.
            </p>
            <div className="space-y-2">
              <Input
                placeholder="Enter your email"
                className="bg-background border-egyptian-gold/20 focus:border-egyptian-gold"
              />
              <Button className="w-full bg-egyptian-gold text-primary-foreground hover:bg-egyptian-gold/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-egyptian-gold/20 mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 AlArab Club 777. All rights reserved. | Gateway to Ancient Egypt
          </p>
        </div>
      </div>
    </footer>
  )
}
