import { motion } from "framer-motion";
import retreatImg from "@/assets/retreat-house.jpg";
import roomImg from "@/assets/room-interior.jpg";
import yogaImg from "@/assets/yoga-hall.png";

const images = [
  { src: retreatImg, alt: "Ретрит-центр" },
  { src: roomImg, alt: "Интерьер номера" },
  { src: yogaImg, alt: "Зал для йоги" },
];

const AccommodationSection = () => {
  return (
    <section className="py-24 bg-section-light">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl text-section-light-foreground text-center mb-6"
        >
          Дом с видом на бесконечность
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="font-body text-section-light-foreground/70 text-lg text-center max-w-3xl mx-auto leading-relaxed mb-16"
        >
          Наш лагерь — это уютный ретрит-центр «Васиштха йога дом», расположенный прямо в деревне Вашишт. Это пространство, специально созданное для практиков. Простые, но чистые и светлые номера выполнены в экологичном гималайском стиле с обилием дерева.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <ul className="font-body text-section-light-foreground/70 text-lg space-y-3">
            <li className="flex gap-3"><span className="text-primary">✦</span> <span><strong>Практика:</strong> Просторный зал для йоги с панорамными окнами на долину Куллу и снежные пики.</span></li>
            <li className="flex gap-3"><span className="text-primary">✦</span> <span><strong>Размещение:</strong> Одно- и двухместные номера. У каждого номера балкон или терраса для встречи рассветов.</span></li>
            <li className="flex gap-3"><span className="text-primary">✦</span> <span><strong>Атмосфера:</strong> Никакого городского шума — только звуки горных водопадов, пение птиц и чистый воздух.</span></li>
          </ul>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="overflow-hidden rounded-lg"
            >
              <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccommodationSection;
