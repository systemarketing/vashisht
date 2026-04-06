import { motion } from "framer-motion";
import VashishtSection from "./VashishtSection";
import RoerichSection from "./RoerichSection";
import DussehraSection from "./DussehraSection";

const LocationBlock = () => {
  return (
    <section id="location" className="py-24 bg-accent/20">
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="font-body text-primary text-sm tracking-[0.3em] uppercase mb-4 block">
            Место и время
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            Место и время тура — уникальны
          </h2>
          <p className="font-body text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto">
            Сакральные Гималаи, наследие Рериха и великий праздник Душера — всё сходится в одной точке
          </p>
        </motion.div>
      </div>

      <VashishtSection />
      <RoerichSection />
      <DussehraSection />
    </section>
  );
};

export default LocationBlock;
