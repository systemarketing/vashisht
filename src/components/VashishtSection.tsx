import { motion } from "framer-motion";
import vashishtImg from "@/assets/vashisht.jpg";

const VashishtSection = () => {
  return (
    <section className="py-24 bg-accent/20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl text-foreground text-center mb-6"
        >
          Вашишт: там, где Рама обрел силу
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="font-body text-muted-foreground text-lg text-center max-w-3xl mx-auto leading-relaxed mb-12"
        >
          Деревня Вашишт (2100 м) — это не просто точка на карте Гималаев, это живая легенда. Именно здесь, согласно преданиям, великий мудрец Васиштха обучал царя Раму искусству йоги и законам мироздания. Сердце деревни — древний каменный храм, на территории которого тысячелетиями бьют целебные горячие сероводородные источники, подаренные богами.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <ul className="font-body text-muted-foreground text-lg space-y-3">
            <li className="flex gap-3"><span className="text-primary">✦</span> <span><strong>Источники:</strong> Ежедневное омовение в целебных водах после практики для глубокого расслабления тела.</span></li>
            <li className="flex gap-3"><span className="text-primary">✦</span> <span><strong>Водопад Йогини:</strong> Трекинг по живописной тропе к мощному водопаду сквозь яблоневые сады.</span></li>
            <li className="flex gap-3"><span className="text-primary">✦</span> <span><strong>Аутентичность:</strong> Традиционная гималайская архитектура и атмосфера глубинной Индии.</span></li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <img src={vashishtImg} alt="Вашишт" loading="lazy" className="w-full h-72 md:h-96 object-cover rounded-lg" />
          <img src={vashishtImg} alt="Вашишт храм" loading="lazy" className="w-full h-72 md:h-96 object-cover rounded-lg" style={{ objectPosition: "right" }} />
        </motion.div>
      </div>
    </section>
  );
};

export default VashishtSection;
