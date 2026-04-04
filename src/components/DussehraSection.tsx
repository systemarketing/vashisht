import { motion } from "framer-motion";
import dussehraImg from "@/assets/dussehra.jpg";
import dussehraCeremonyImg from "@/assets/dussehra-ceremony.jpg";
import dussehraStreetImg from "@/assets/dussehra-street.jpg";

const DussehraSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-4xl text-foreground text-center mb-6"
      >
        Праздник Душера в Долине Богов
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        className="font-body text-muted-foreground text-lg text-center max-w-3xl mx-auto leading-relaxed mb-12"
      >
        Наш интенсив не случайно проходит в середине октября. Эти даты совпадают с великим индуистским фестивалем Душера — символом победы света над тьмой, победы Рамы над десятиголовым демоном Раваной (олицетворением 10 пороков эго). В долине Куллу Душера празднуется совершенно по-особенному: местные жители спускают из горных деревень паланкины со своими божествами. Мы также застанем празднества богини Хидимбы, чей уникальный храм XVI века стоит посреди сказочного реликтового кедрового леса в Манали. Это шанс прикоснуться к нетуристической мистике Индии.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { src: dussehraImg, alt: "Душера в Куллу", delay: 0 },
          { src: dussehraCeremonyImg, alt: "Церемония Душеры", delay: 0.15 },
          { src: dussehraStreetImg, alt: "Улицы во время Душеры", delay: 0.3 },
        ].map((img) => (
          <motion.div
            key={img.alt}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: img.delay }}
            className="overflow-hidden rounded-lg"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-72 md:h-80 object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DussehraSection;
