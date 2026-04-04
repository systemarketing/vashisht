import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mountain, Flame, Settings } from "lucide-react";
import heroImage from "@/assets/hero-mountains.jpg";
import BookingDialog from "./BookingDialog";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [bookingOpen, setBookingOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cards = [
    { icon: Mountain, title: "Место силы", desc: "Деревня Вашишт. Практика на высоте 2100м в окружении гималайских кедров, горячих источников и пятитысячных снежных пиков." },
    { icon: Flame, title: "Время перемен", desc: "Даты Душеры. Поездка совпадает с великим фестивалем победы света над тьмой. Идеальный момент для работы над собственными ограничениями." },
    { icon: Settings, title: "Йога и Система", desc: "Симбиоз традиций и бизнеса. Практика работы с телом от авторизованного преподавателя Аштанги и системный подход к своему делу от эксперта по маркетингу." },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          transform: `translateY(${scrollY * 0.4}px)`,
          willChange: "transform",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/90" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-muted-foreground font-body text-sm tracking-[0.3em] uppercase mb-6"
        >
          13–24 октября 2026 г. &nbsp;|&nbsp; Вашишт, Химачал-Прадеш, Индия
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-foreground leading-tight mb-4"
        >
          Аштанга-тур в Гималаи
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-display text-xl md:text-2xl text-primary italic mb-6"
        >
          для предпринимателей и экспертов
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-body text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Путешествие для тех, кто развивает себя и своё дело:
          <br />9 майсор-классов + 3 воркшопа по маркетингу и тайм-менеджменту
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          onClick={() => setBookingOpen(true)}
          className="px-10 py-4 bg-primary text-primary-foreground font-body font-medium text-base tracking-wider uppercase rounded-sm hover:opacity-90 transition-opacity"
        >
          Забронировать место
        </motion.button>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 mt-20 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-card/60 backdrop-blur-md border border-border/50 rounded-lg p-8 text-center"
            >
              <card.icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-display text-xl text-foreground mb-2">{card.title}</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} />
    </section>
  );
};

export default HeroSection;
