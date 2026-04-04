import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Нужен ли опыт йоги для участия?",
    a: "Нет, программа подходит для любого уровня. Майсор-класс — это формат индивидуальной работы в группе, где каждый практикует в своем темпе под руководством преподавателя.",
  },
  {
    q: "Что входит в стоимость?",
    a: "Проживание, питание, все классы йоги, воркшопы, трекинги и экскурсии, трансфер из аэропорта Куллу. Авиабилеты и виза оплачиваются отдельно.",
  },
  {
    q: "Какая погода будет в октябре?",
    a: "В октябре в Вашиште сухо и комфортно: днем +18–22°C, ночью +8–12°C. Идеальное время для трекингов и практики на свежем воздухе.",
  },
  {
    q: "Сколько человек в группе?",
    a: "Группа ограничена 12 участниками для максимального качества внимания и комфорта.",
  },
  {
    q: "Как добраться до Вашишта?",
    a: "Ближайший аэропорт — Бхунтар (Куллу). Из Дели есть ежедневные рейсы. От аэропорта мы организуем трансфер до ретрит-центра.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-3xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl text-foreground text-center mb-16"
        >
          Частые вопросы
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="font-display text-lg md:text-xl text-foreground hover:text-primary py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground text-base leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
