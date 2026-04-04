import { motion } from "framer-motion";
import yogaImg from "@/assets/yoga-practice.jpg";
import trekkingImg from "@/assets/trekking.jpg";
import workshopImg from "@/assets/workshop.jpg";

const programs = [
  {
    title: "Утро: Практика",
    description: "Ежедневные майсор-классы аштанга-йоги на рассвете. Индивидуальный подход, корректировки, работа с дыханием — всё в традиции KPJAYI.",
    image: yogaImg,
  },
  {
    title: "День: Трекинги и Традиции",
    description: "Горные маршруты, визиты в древние храмы и горячие источники Вашишта. Погружение в культуру долины Куллу и живые традиции Гималаев.",
    image: trekkingImg,
    reverse: true,
  },
  {
    title: "Вечер: Система и Менеджмент",
    description: "Воркшопы по кармическому маркетингу, тайм-менеджменту и системному мышлению. Работа над собственными проектами в кругу единомышленников.",
    image: workshopImg,
  },
];

const ProgramSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl text-foreground text-center mb-4"
        >
          Программа тура
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-xl text-primary text-center italic mb-20"
        >
          Тело, Традиции, Система
        </motion.p>

        <div className="space-y-24">
          {programs.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col ${item.reverse ? "md:flex-row-reverse" : "md:flex-row"} gap-8 md:gap-16 items-center`}
            >
              <div className="w-full md:w-1/2">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-72 md:h-96 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="font-display text-3xl text-foreground mb-4">{item.title}</h3>
                <p className="font-body text-muted-foreground leading-relaxed text-lg">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
