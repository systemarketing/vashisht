import { useState } from "react";
import { Menu, X, Send, Phone } from "lucide-react";
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

          <div className="flex items-center gap-3">
            <a href="https://t.me/yes_bulb?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A3%20%D0%BC%D0%B5%D0%BD%D1%8F%20%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81%20%D0%BF%D0%BE%20%D1%82%D1%83%D1%80%D1%83%20%D0%B2%20%D0%93%D0%B8%D0%BC%D0%B0%D0%BB%D0%B0%D0%B8" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Send className="w-4 h-4" />
            </a>
            <a href="https://vk.com/max_lapshin_ashtanga" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 16.09c.2.36-.04.54-.33.54h-1.37c-.28 0-.54-.22-.54-.22s-1.07-1.1-1.9-1.1c-.16 0-.33.06-.33.4v.72c0 .28-.2.38-.6.38-1.46 0-3.08-.88-4.24-2.54-1.72-2.48-2.18-4.34-2.18-4.72 0-.16.06-.32.38-.32h1.38c.32 0 .42.14.54.42.6 1.7 1.78 3.58 2.14 3.58.16 0 .24-.08.24-.5V10.3c-.04-.86-.5-.94-.5-1.24 0-.14.12-.3.32-.3h2.18c.26 0 .36.14.36.4v2.68c0 .22.1.32.18.32.16 0 .28-.1.6-.42 1.02-1.14 1.74-2.92 1.74-2.92.08-.18.24-.36.54-.36h1.38c.42 0 .5.22.42.44-.2.7-1.84 3.16-1.84 3.16-.14.22-.18.34 0 .58l1.49 1.6z"/></svg>
            </a>
            <a href="tel:+79056639653" className="text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setBookingOpen(true)}
              className="px-4 py-1 border border-foreground/40 text-foreground/80 font-body text-xs rounded-sm hover:bg-foreground/10 transition-colors"
            >
              Забронировать
            </button>
          </div>
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
