import { useState } from "react";
import { Menu, X, MessageCircle, Phone } from "lucide-react";
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
            <a href="https://t.me/max_lapshin" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <MessageCircle className="w-4 h-4" />
            </a>
            <a href="https://m.vk.com/write3768091" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M21.547 7H2.453A2.453 2.453 0 0 0 0 9.453v5.094A2.453 2.453 0 0 0 2.453 17h19.094A2.453 2.453 0 0 0 24 14.547V9.453A2.453 2.453 0 0 0 21.547 7zm-3.2 8.09h-1.6c-.6 0-.79-.48-1.87-1.57-1-.96-1.4-.96-1.64-.96-.34 0-.44.1-.44.56v1.43c0 .4-.13.54-1.15.54-1.7 0-3.58-1.03-4.9-2.95C5.1 9.6 4.6 8.1 4.6 7.74c0-.24.1-.46.56-.46h1.6c.42 0 .58.19.74.63.8 2.34 2.16 4.39 2.72 4.39.21 0 .3-.1.3-.64V9.67c-.06-1.12-.66-1.22-.66-1.62 0-.2.16-.4.43-.4h2.52c.36 0 .48.19.48.6v3.08c0 .36.16.48.26.48.21 0 .38-.12.78-.52 1.2-1.34 2.06-3.42 2.06-3.42.11-.24.3-.46.72-.46h1.6c.48 0 .59.25.48.6-.2.9-2.17 3.7-2.17 3.7-.17.28-.23.4 0 .7.17.22.72.7 1.1 1.12.7.78 1.22 1.44 1.36 1.9.15.46-.08.7-.52.7z"/></svg>
            </a>
            <a href="tel:+79056639653" className="text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setBookingOpen(true)}
              className="px-5 py-1.5 bg-primary/90 text-primary-foreground font-body text-sm rounded-sm hover:bg-primary transition-colors"
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
