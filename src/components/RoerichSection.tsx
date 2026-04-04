import { motion } from "framer-motion";
import roerichImg from "@/assets/roerich.jpg";

const RoerichSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img src={roerichImg} alt="Дом Рериха" loading="lazy" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/75" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl text-foreground mb-6"
        >
          Мост между Западом и Востоком: Дом Рериха
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="font-body text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto"
        >
          Усадьба Николая Рериха в Наггаре — место, где великий художник и мыслитель провел последние годы жизни, создавая свои знаменитые гималайские полотна. Мы посетим музей и прогуляемся по территории, вдохновляясь его наследием.
        </motion.p>
      </div>
    </section>
  );
};

export default RoerichSection;
