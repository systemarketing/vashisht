import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "А если я новичок в Аштанге?",
    a: "Тур подходит абсолютно всем. Аштангу может практиковать каждый. Начать свою практику в месте, где родилась эта традиция — бесценно и даст мощнейший фундамент для дальнейшего развития.",
  },
  {
    q: "Я не предприниматель и далек от маркетинга. Будут ли мне полезны воркшопы?",
    a: "Да. Воркшопы раскрывают глубинные принципы системности, применимые в любой сфере жизни. Мы поговорим о тайм-менеджменте, грамотной самопрезентации и принципах организации удаленного труда.",
  },
  {
    q: "Трудно ли получить визу в Индию?",
    a: "Все очень легко! Сейчас доступна бесплатная 30-дневная электронная виза. Мы полностью поможем вам с её оформлением.",
  },
  {
    q: "Как туда долететь?",
    a: "Самый удобный вариант — прямые рейсы «Аэрофлота» из Москвы в Дели. Стоимость билета в одну сторону — около 40 000 руб. Есть перелеты через Баку существенно дешевле. Также, знайте, что при покупке билетов \"туда-обратно\" стоимость выгоднее. В Дели мы встретим вас и организуем совместный трансфер в горы.",
  },
  {
    q: "Сложные ли трекинги?",
    a: "Нет, специальная физическая подготовка не требуется. Это легкие радиальные пешие маршруты без сложного набора высоты. Илья проходил эти тропы вприпрыжку вместе со своими детьми.",
  },
  {
    q: "На какой высоте мы будем жить и практиковать?",
    a: "Деревня Вашишт находится на высоте 2100 метров над уровнем моря. На такой высоте горная болезнь не возникает, акклиматизация проходит абсолютно комфортно и незаметно.",
  },
  {
    q: "Могу ли я сам гулять и посещать места без группы?",
    a: "Да, конечно! Мы дадим вам все необходимые рекомендации, расскажем и покажем, куда интереснее всего сходить, где вкусно поесть и что посмотреть. Мы провели в этом месте много времени и знаем его изнутри.",
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
                <AccordionTrigger className="font-body text-lg text-foreground hover:text-primary py-5 text-left md:text-base">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground text-sm md:text-base leading-relaxed pb-5">
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
