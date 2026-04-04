import { useState } from "react";
import { motion } from "framer-motion";
import BookingDialog from "./BookingDialog";

const PricingSection = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <section className="py-24 bg-secondary/30">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl text-foreground mb-6"
        >
          Стоимость и условия участия
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="bg-card border border-border rounded-lg p-10 md:p-14"
        >
          <p className="font-display text-5xl md:text-6xl text-primary mb-2">$1 800</p>
          <p className="font-body text-muted-foreground text-sm uppercase tracking-wider mb-8">за 12 дней · всё включено</p>
          
          <ul className="font-body text-muted-foreground text-left space-y-3 mb-10 max-w-md mx-auto">
            <li className="flex gap-3"><span className="text-primary">✓</span> Проживание в ретрит-центре</li>
            <li className="flex gap-3"><span className="text-primary">✓</span> 9 майсор-классов аштанга-йоги</li>
            <li className="flex gap-3"><span className="text-primary">✓</span> 3 воркшопа «Система»</li>
            <li className="flex gap-3"><span className="text-primary">✓</span> Трекинги и экскурсии</li>
            <li className="flex gap-3"><span className="text-primary">✓</span> Вегетарианское питание</li>
            <li className="flex gap-3"><span className="text-primary">✓</span> Трансфер из аэропорта Куллу</li>
          </ul>

          <button
            onClick={() => setBookingOpen(true)}
            className="px-10 py-4 bg-primary text-primary-foreground font-body font-medium text-base tracking-wider uppercase rounded-sm hover:opacity-90 transition-opacity"
          >
            Забронировать место
          </button>
        </motion.div>
      </div>
      <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} />
    </section>
  );
};

export default PricingSection;
