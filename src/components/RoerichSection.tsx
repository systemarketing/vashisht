import { motion } from "framer-motion";

const RoerichSection = () => {
  return (
    <div className="relative py-24 overflow-hidden mb-20">
      <div className="absolute inset-0">
        <img src="https://storage.yandexcloud.net/systemarketing-media/Roerich-museum.jpg" alt="Дом Рериха" loading="lazy" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/75" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl text-foreground mb-3"
        >
          Рядом находится дом Николая Рериха
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-body text-muted-foreground text-sm md:text-xl mb-6"
        >
          Прибежище умиротворения и внутренней гармонии
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="font-body text-muted-foreground text-sm md:text-lg leading-relaxed max-w-2xl mx-auto"
        >
          Всего в часе езды от Вашишта, в Наггаре, находится усадьба великого русского художника и мыслителя Николая Рериха. Он прожил здесь последние 20 лет жизни, создавая знаменитые гималайские серии. Мы посетим его дом, мемориал и институт «Урусвати», чтобы увидеть Гималаи его глазами — глазами человека, искавшего синтез духовного и земного.
        </motion.p>
      </div>
    </div>
  );
};

export default RoerichSection;
