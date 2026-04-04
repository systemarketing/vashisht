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
          Наш интенсив не случайно проходит в середине октября. Эти даты совпадают с великим индуистским фестивалем Душера — символом победы света над тьмой, победы Рамы над десятиголовым демоном Раваной (олицетворением 10 пороков эго). В долине Куллу Душера празднуется совершенно по-особенному: местные жители спускают из горных деревень паланкины со своими божествами. Мы также застанем празднества богини Хидимбы, чей уникальный храм XVI века стоит посреди сказочного реликтового кедрового леса в Манали. Это шанс прикоснуться к нетуристической мистике Индии.
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
