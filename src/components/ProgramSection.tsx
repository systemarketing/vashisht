import { motion } from "framer-motion";
import yogaImg from "@/assets/practica-new.png";
import trekkingImg from "@/assets/trekking-new.jpg";
import workshopImg from "@/assets/workshop-new.png";

const programs = [
  {
    title: "Утро: Практика",
    description: "Каждый день начинается с утренних Майсор-классов Аштанга-йоги под руководством Макса Лапшина (KPJAYI, 2-й уровень). Комфортный зал, прямой контакт с учителем и панорамный вид на заснеженные Гималаи.",
    image: yogaImg,
  },
  {
    title: "День: Трекинги и Традиции",
    description: "Медитация в движении. Мы пройдем легкие радиальные маршруты к водопаду Йогини, древним храмам долины Куллу и сказочному кедровому лесу. Прикоснемся к традициям, сохранившимся сквозь тысячелетия и посетим дом-музей Николая Рериха в Наггаре",
    image: trekkingImg,
    reverse: true,
  },
  {
    title: "Вечер: Система и Маркетинг",
    description: "Интерактивные мастер-классы с создателем «Системы» Ильей Харитоновым. Перенесем логику дисциплины Аштанги на язык вашего дела. Разберем три фундамента: как найти и презентовать свою ценность, как регулярно превращать охваты в соцсетях в реальные деньги и как выстроить 100% удаленную работу без потери эффективности.",
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
                <p className="font-body text-muted-foreground leading-relaxed text-sm md:text-base">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
