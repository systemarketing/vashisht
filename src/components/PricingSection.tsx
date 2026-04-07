import { useState } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
          className="font-display text-4xl md:text-6xl text-foreground mb-6"
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
          <p className="font-body text-muted-foreground mb-2 text-base">Тур рассчитан на камерную группу — доступно только 15 мест.</p>
          <p className="font-display text-3xl text-muted-foreground line-through mb-1">180 000 руб.</p>
          <p className="font-display text-5xl md:text-6xl text-primary mb-2">150 000 руб.</p>
          <p className="font-body text-muted-foreground uppercase tracking-wider mb-2 text-sm">за 12 дней</p>
          <p className="font-body text-muted-foreground mb-8 text-sm">В стоимость включены 8 Аштанга йога Майсор-классов, 3 маркетинг мастер класса, проживание в ретрит-центре с завтраком, трансфер Дели–Вашишт–Дели, трекинги по программе, помощь с оформлением визы.</p>
          
          <p className="font-body text-muted-foreground mb-2 text-base">Бронь места: <strong className="text-foreground">20 000 руб.</strong> (невозвратная сумма).</p>
          <p className="font-body text-muted-foreground text-sm mb-6">Авиаперелет из России до Дели и обратно приобретается участниками самостоятельно.</p>

          <Accordion type="single" collapsible className="mb-10 text-left">
            <AccordionItem value="payment-terms" className="border border-border rounded-lg px-6 bg-background/50">
              <AccordionTrigger className="font-body text-base text-foreground hover:text-primary py-5 text-left">
                Условия оплаты и рассрочка
              </AccordionTrigger>
              <AccordionContent className="font-body text-muted-foreground text-sm leading-relaxed pb-5 space-y-4">
                <div>
                  <p className="font-display text-foreground text-sm mb-1">Как забронировать место</p>
                  <p>Чтобы зафиксировать место в туре, внесите невозвратный депозит 20 000 руб. Это подтверждает вашу бронь и запускает резервирование места в ретрит-центре и трансфере.</p>
                  <p className="mt-2">Остаток суммы (130 000 руб.) необходимо внести не позднее 1 сентября 2026 года — одним или несколькими платежами в удобном для вас темпе.</p>
                </div>
                <div>
                  <p className="font-display text-foreground text-sm mb-1">Удобная схема оплаты в 3 платежа</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>20 000 руб. — сейчас (невозвратная бронь места)</li>
                    <li>65 000 руб. — до 1 июля 2026</li>
                    <li>65 000 руб. — до 1 сентября 2026</li>
                  </ul>
                  <p className="mt-2">Оплатить можно и одним платежом — главное, чтобы полная сумма была внесена до 1 сентября. Если до 1 июля не поступит хотя бы 65 000 руб. — бронь аннулируется, депозит не возвращается.</p>
                </div>
                <div>
                  <p className="font-display text-foreground text-sm mb-1">Не затягивайте</p>
                  <p>По опыту прошлых лет все места разбирают за 2 месяца после анонса — ориентировочно к июню 2026.</p>
                </div>
                <div>
                  <p className="font-display text-foreground text-sm mb-1">Авиабилеты покупаете самостоятельно</p>
                  <p>Основная группа: вылет из Москвы 12 октября в 18:40 (Аэрофлот), прилёт в Дели 13 октября в 05:45. Обратно — 25 октября в 05:00. Есть более бюджетный вариант — билеты с пересадкой в Баку.</p>
                  <p className="mt-2">Если хотите прилететь/улететь раньше или позже — сообщите нам — мы поможем с организацией трансфера.</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

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
