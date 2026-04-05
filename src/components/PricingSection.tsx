import { useState } from "react";
import { motion } from "framer-motion";
import BookingDialog from "./BookingDialog";

const PricingSection = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-secondary/30">
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
          <p className="font-body text-muted-foreground text-sm mb-2">Тур рассчитан на камерную группу — доступно только 15 мест.</p>
          <p className="font-display text-3xl text-muted-foreground line-through mb-1">180 000 руб.</p>
          <p className="font-display text-5xl md:text-6xl text-primary mb-2">150 000 руб.</p>
          <p className="font-body text-muted-foreground text-sm uppercase tracking-wider mb-2">за 12 дней</p>
          <p className="font-body text-muted-foreground text-xs mb-8">В стоимость включены 9 майсор-классов, 3 бизнес-воркшопа, проживание в ретрит-центре, трансфер Дели–Вашишт–Дели, трекинги по программе, помощь с оформлением визы. Завтраки опционально.</p>
          
          <p className="font-body text-muted-foreground text-sm mb-2">Бронь места: <strong className="text-foreground">20 000 руб.</strong> (невозвратная сумма).</p>
          <p className="font-body text-muted-foreground text-sm mb-10">Авиаперелет из России до Дели и обратно приобретается участниками самостоятельно.</p>

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
