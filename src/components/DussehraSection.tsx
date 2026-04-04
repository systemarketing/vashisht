import { motion } from "framer-motion";
import dussehraImg from "@/assets/dussehra.jpg";

const DussehraSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl text-foreground text-center mb-6"
        >
          Душера в Долине Богов
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="font-body text-muted-foreground text-lg text-center max-w-3xl mx-auto leading-relaxed mb-12"
        >
          Даты тура совпадают с Душерой — одним из главных праздников Индии. В долине Куллу это событие отмечается с особым размахом: процессии с божествами, танцы, музыка и невероятная энергия тысяч паломников.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <img src={dussehraImg} alt="Душера в Куллу" loading="lazy" className="w-full h-72 md:h-[480px] object-cover rounded-lg" />
        </motion.div>
      </div>
    </section>
  );
};

export default DussehraSection;
