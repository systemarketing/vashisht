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
          Древняя деревня в долине Куллу, стоящая на горячих источниках у подножия гималайских пиков. По легенде, именно здесь мудрец Вашишта совершал аскезу, а сам Рама приходил сюда за силой и мудростью.
        </motion.p>

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
