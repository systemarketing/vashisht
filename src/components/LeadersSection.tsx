import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, MessageCircle, ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import maxImg from "@/assets/max-portrait.jpg";
import ilyaImg from "@/assets/ilya-portrait.png";

const LeadersSection = () => {
  const [maxOpen, setMaxOpen] = useState(false);
  const [ilyaOpen, setIlyaOpen] = useState(false);

  return (
    <section id="leaders" className="py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl text-foreground text-center mb-20"
        >
          Ведущие интенсива
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Max */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-card border border-border rounded-lg overflow-hidden"
          >
            <img src={maxImg} alt="Макс Лапшин" loading="lazy" className="w-full h-80 object-cover object-top" />
            <div className="p-8">
              <h3 className="font-display text-3xl text-foreground mb-3">Макс Лапшин</h3>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Авторизованный преподаватель Аштанга-йоги (KPJAYI, 2-й уровень). 13 лет ежедневной практики. Основатель Аштанга йога шалы в Н.Новгороде. Свой первый тур в Вашишт провел еще в 2019 году.
              </p>
              <div className="flex items-center gap-4 mb-6">
                <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://vk.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
              <button
                onClick={() => setMaxOpen(true)}
                className="px-6 py-3 border border-primary text-primary font-body text-sm tracking-wider uppercase rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Подробнее о Максе
              </button>
            </div>
          </motion.div>

          {/* Ilya */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-card border border-border rounded-lg overflow-hidden"
          >
            <img src={ilyaImg} alt="Илья Харитонов" loading="lazy" className="w-full h-80 object-cover object-top" />
            <div className="p-8">
              <h3 className="font-display text-3xl text-foreground mb-3">Илья Харитонов</h3>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Маркетолог, бизнес-консультант, основатель команды «Системы» и адепт подхода кармического маркетинга. Жил в Гималаях и выстроил 100% удаленный системный бизнес.
              </p>
              <div className="flex items-center gap-4 mb-6">
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              <button
                onClick={() => setIlyaOpen(true)}
                className="px-6 py-3 border border-primary text-primary font-body text-sm tracking-wider uppercase rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Подробнее об Илье
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <Dialog open={maxOpen} onOpenChange={setMaxOpen}>
        <DialogContent className="bg-card border-border max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">Макс Лапшин</DialogTitle>
          </DialogHeader>
          <p className="font-body text-muted-foreground leading-relaxed">
            Макс Лапшин — авторизованный преподаватель Аштанга-йоги 2-го уровня по Шарату Джойсу в традиции Шри К. Паттабхи Джойса. Основатель школы аштанга-йоги в Нижнем Новгороде и online Аштанга-шалы, ведущий преподаватель школы HotYoga36 в Санкт-Петербурге. Практикует более 13 лет.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed mt-4">
            Макс получил авторизацию (официальное право на преподавание) после нескольких лет интенсивного обучения в Индии (Майсор). Долина Куллу и Вашишт — его любимые места на планете. Свой первый йога-тур сюда он привез еще в 2012 году. Главный принцип его преподавания: «Практика — главный учитель, но живой учитель сократит тебе дорогу в несколько раз». В этом туре Макс щедро делится не только правками на коврике, но и местом, которое его вдохновляет.
          </p>
        </DialogContent>
      </Dialog>

      <Dialog open={ilyaOpen} onOpenChange={setIlyaOpen}>
        <DialogContent className="bg-card border-border max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">Илья Харитонов</DialogTitle>
          </DialogHeader>
          <p className="font-body text-muted-foreground leading-relaxed">
            Илья Харитонов — маркетолог, стратег, основатель проекта «Система» (systemarketing.ru). Более 15 лет занимается созданием и управлением маркетингом для ведущих бизнесов России. Автор уникального системного подхода в менеджменте, основанного на принципах Кармического Маркетинга.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed mt-4">
            Илья — практик, который доказал, что бизнес можно успешно строить из любой точки мира. Он построил 100% удаленный и эффективный бизнес, находясь в постоянных путешествиях. Илья прожил в Индии более 3 лет, два из которых (включая 6 месяцев непрерывно) — прямо здесь, в гималайской деревне Вашишт. В туре Илья поделится тем, как выстраивать систему в жизни и бизнесе, чтобы не откладывать жизнь на потом и зарабатывать, находясь в месте силы.
          </p>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default LeadersSection;
