import { motion } from "framer-motion";
import roerichImg from "@/assets/roerich.jpg";

const RoerichSection = () => {
  return (
    <div className="relative py-24 overflow-hidden mb-20">
      <div className="absolute inset-0">
        <img src={roerichImg} alt="Дом Рериха" loading="lazy" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/75" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl text-foreground mb-6"
        >
          Мост между Западом и Востоком: Дом Рериха
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="font-body text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto"
        >
          Всего в часе езды от Вашишта, в Наггаре, находится усадьба великого русского художника и мыслителя Николая Рериха. Он прожил здесь последние 20 лет жизни, создавая знаменитые гималайские серии. Мы посетим его дом, мемориал и институт «Урусвати», чтобы увидеть Гималаи его глазами — глазами человека, искавшего синтез духовного и земного.
        </motion.p>
      </div>
    </div>
  );
};

export default RoerichSection;
