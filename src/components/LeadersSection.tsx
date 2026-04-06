import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Send, ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
const maxImg = "https://storage.yandexcloud.net/systemarketing-media/maks%20(2).jpg";
const ilyaImg = "https://storage.yandexcloud.net/systemarketing-media/KharitonovRUS.jpg";

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
              <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                Авторизованный преподаватель Аштанга-йоги (KPJAYI, 2-й уровень). 13 лет ежедневной практики. Основатель Аштанга йога шалы в Н.Новгороде. Свой первый тур в Вашишт провел еще в 2019 году.
              </p>
              <div className="flex items-center gap-4 mb-6">
                <a href="https://www.instagram.com/max_lapshin/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://t.me/max_lapshin_ashtaga" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Send className="w-5 h-5" />
                </a>
                <a href="https://m.vk.com/write3768091" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 16.09c.2.36-.04.54-.33.54h-1.37c-.28 0-.54-.22-.54-.22s-1.07-1.1-1.9-1.1c-.16 0-.33.06-.33.4v.72c0 .28-.2.38-.6.38-1.46 0-3.08-.88-4.24-2.54-1.72-2.48-2.18-4.34-2.18-4.72 0-.16.06-.32.38-.32h1.38c.32 0 .42.14.54.42.6 1.7 1.78 3.58 2.14 3.58.16 0 .24-.08.24-.5V10.3c-.04-.86-.5-.94-.5-1.24 0-.14.12-.3.32-.3h2.18c.26 0 .36.14.36.4v2.68c0 .22.1.32.18.32.16 0 .28-.1.6-.42 1.02-1.14 1.74-2.92 1.74-2.92.08-.18.24-.36.54-.36h1.38c.42 0 .5.22.42.44-.2.7-1.84 3.16-1.84 3.16-.14.22-.18.34 0 .58l1.49 1.6z"/></svg>
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
              <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                Маркетолог, бизнес-консультант крупных российских брендов, основатель проекта «Система» и адепт подхода кармического маркетинга. Жил в Гималаях и выстроил 100% удаленный системный бизнес.
              </p>
              <div className="flex items-center gap-4 mb-6">
                <a href="https://systemarketing.ru/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
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
        <DialogContent className="bg-card border-border max-w-3xl max-h-[90vh] overflow-y-auto [&>button]:top-2 [&>button]:right-2 [&>button]:bg-card/80 [&>button]:rounded-full [&>button]:p-1">
          <img src={maxImg} alt="Макс Лапшин" className="w-full h-64 object-cover object-top rounded-md" />
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">Макс Лапшин</DialogTitle>
          </DialogHeader>
          <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
            Макс Лапшин — авторизованный преподаватель Аштанга-йоги 2-го уровня по Шарату Джойсу в традиции Шри К. Паттабхи Джойса. Основатель школы аштанга-йоги в Нижнем Новгороде и online Аштанга-шалы, ведущий преподаватель школы HotYoga36 в Санкт-Петербурге. Практикует более 13 лет.
          </p>
          <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
            Макс получил авторизацию (официальное право на преподавание) после нескольких лет интенсивного обучения в Индии (Майсор). Долина Куллу и Вашишт — его любимые места на планете. Свой первый йога-тур сюда он привез еще в 2012 году. Главный принцип его преподавания: «Практика — главный учитель, но живой учитель сократит тебе дорогу в несколько раз». В этом туре Макс щедро делится не только правками на коврике, но и местом, которое его вдохновляет.
          </p>
        </DialogContent>
      </Dialog>

      <Dialog open={ilyaOpen} onOpenChange={setIlyaOpen}>
        <DialogContent className="bg-card border-border max-w-3xl max-h-[90vh] overflow-y-auto [&>button]:top-2 [&>button]:right-2 [&>button]:bg-card/80 [&>button]:rounded-full [&>button]:p-1">
          <img src={ilyaImg} alt="Илья Харитонов" className="w-full h-64 object-cover object-top rounded-md" />
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">Илья Харитонов</DialogTitle>
          </DialogHeader>
          <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
            Илья Харитонов — маркетолог, стратег, основатель проекта «Система» (systemarketing.ru). Более 15 лет занимается созданием и управлением маркетингом для ведущих бизнесов России. Автор уникального системного подхода в менеджменте, основанного на принципах Кармического Маркетинга.
          </p>
          <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
            Илья — практик, который доказал, что бизнес можно успешно строить из любой точки мира. Он построил 100% удаленный и эффективный бизнес, находясь в постоянных путешествиях. Илья прожил в Индии более 3 лет, два из которых (включая 6 месяцев непрерывно) — прямо здесь, в гималайской деревне Вашишт. В туре Илья поделится тем, как выстраивать систему в жизни и бизнесе, чтобы не откладывать жизнь на потом и зарабатывать, находясь в месте силы.
          </p>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default LeadersSection;
