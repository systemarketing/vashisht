import { useState } from "react";
import { Menu, X } from "lucide-react";
import BookingDialog from "./BookingDialog";

const navLinks = [
  { label: "Ведущие", target: "leaders" },
  { label: "Место", target: "location" },
  { label: "Размещение", target: "accommodation" },
  { label: "Стоимость", target: "pricing" },
];

const SiteHeader = () => {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/5 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 h-12">
          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => scrollTo(link.target)}
                className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Mobile burger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-foreground/70 hover:text-foreground transition-colors"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <button
            onClick={() => setBookingOpen(true)}
            className="px-5 py-1.5 bg-primary/90 text-primary-foreground font-body text-sm rounded-sm hover:bg-primary transition-colors"
          >
            Забронировать
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="md:hidden bg-background/10 backdrop-blur-xl border-t border-white/10 px-4 pb-4 pt-2 flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => scrollTo(link.target)}
                className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors text-left py-1"
              >
                {link.label}
              </button>
            ))}
          </nav>
        )}
      </header>

      <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} />
    </>
  );
};

export default SiteHeader;
