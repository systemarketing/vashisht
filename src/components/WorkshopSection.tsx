import { motion } from "framer-motion";
import { Megaphone, Globe, BarChart3 } from "lucide-react";
import { useState } from "react";
import BookingDialog from "./BookingDialog";

const cards = [
  {
    icon: Megaphone,
    title: "Маркетинг и презентация",
    items: [
      "В чем ваша ценность и как ее презентовать?",
      "Как быстро вывести свой продукт или себя на рынок?",
      "Что такое Кармический Маркетинг и зачем он вам?",
    ],
  },
  {
    icon: Globe,
    title: "Соц.сети и digital",
    items: [
      "Как сделать сайт за день без дизайнера и маркетолога?",
      "Как регулярно превращать охваты в деньги?",
      "Какие платформы будут актуальны в 2026-2027 году?",
    ],
  },
  {
    icon: BarChart3,
    title: "Системность и управление",
    items: [
      "Какая система в маркетинге приносит больше заказов?",
      "Как считать и развивать личную и командную эффективность?",
      "Как организовать свою работу и бизнес в удаленном формате?",
    ],
  },
];

const WorkshopSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-3xl md:text-5xl lg:text-6xl font-light text-foreground mb-8"
        >
          Масштабируем проекты и создаем уверенность
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-3xl space-y-4 mb-16"
        >
          <p className="font-body text-sm text-muted-foreground leading-relaxed">
            В основную программу включены 3 воркшопа по маркетингу, менеджменту и соц.сетям.
          </p>
          <p className="font-body text-sm text-muted-foreground leading-relaxed">
            Ведущий Илья Харитонов — более 15 лет в маркетинге и менеджменте, основатель проекта «Система», маркетинг-консультант крупных бизнесов и ведущих экспертов в России (Центр Дикарева, КуулКлевер, АТОМ, Kalinov Milk и&nbsp;др). Илья поделится своим опытом, реальными кейсами и ответит на самые важные вопросы для тех, кто создает свое дело, двигает себя и свою экспертность, кто хочет быть в курсе современных инструментов и методов продвижения
          </p>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display text-2xl md:text-3xl text-foreground text-center mb-10"
        >
          9 вопросов с которыми мы будем работать
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" }}
              className="bg-card/[0.05] backdrop-blur-xl border border-white/10 rounded-lg p-8 text-center shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
            >
              <card.icon className="w-8 h-8 text-primary mx-auto mb-5" />
              <h4 className="font-display text-xl text-foreground mb-4">{card.title}</h4>
              <ul className="space-y-3 text-left">
                {card.items.map((item) => (
                  <li key={item} className="font-body text-sm text-muted-foreground leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center space-y-6"
        >
          <p className="font-body text-sm text-muted-foreground italic">
            Кстати, этот сайт сделан Ильей за 2 дня без дизайнера и программиста — вы тоже так научитесь
          </p>

          <div className="space-y-1">
            <p className="font-body text-sm text-muted-foreground">
              Есть вопрос по маркетингу и менеджменту?
            </p>
            <p className="font-body text-sm text-muted-foreground">
              Задайте свой вопрос Илье, чтобы обсудить его на воркшопах.
            </p>
          </div>

          <a
            href="https://t.me/max_lapshin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-primary text-primary-foreground font-body font-medium text-base tracking-wider uppercase rounded-sm hover:opacity-90 transition-opacity"
          >
            Спросить в Telegram
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkshopSection;
