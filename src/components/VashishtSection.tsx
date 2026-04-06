import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = Array.from({ length: 15 }, (_, i) => {
  const n = i + 1;
  const prefix = n <= 6 ? "Vashiht" : "vashiht";
  const num = String(n).padStart(2, "0");
  return `https://storage.yandexcloud.net/systemarketing-media/${prefix}${num}.jpg`;
});

const SCROLL_AMOUNT = 400;

const VashishtSection = () => {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const posRef = useRef(0);
  const pausedRef = useRef(false);

  const loopedImages = [...galleryImages, ...galleryImages, ...galleryImages];

  const getSingleSetWidth = useCallback(() => {
    const el = scrollRef.current;
    return el ? el.scrollWidth / 3 : 0;
  }, []);

  const normalizePos = useCallback(() => {
    const w = getSingleSetWidth();
    if (w > 0) {
      while (posRef.current >= w * 2) posRef.current -= w;
      while (posRef.current < 0) posRef.current += w;
    }
  }, [getSingleSetWidth]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const speed = 0.4;
    const step = () => {
      if (!pausedRef.current) {
        posRef.current += speed;
        normalizePos();
        el.scrollLeft = posRef.current;
      }
      animRef.current = requestAnimationFrame(step);
    };
    posRef.current = getSingleSetWidth();
    el.scrollLeft = posRef.current;
    animRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animRef.current);
  }, [normalizePos, getSingleSetWidth]);

  const pause = useCallback(() => { pausedRef.current = true; }, []);
  const resume = useCallback(() => {
    const el = scrollRef.current;
    if (el) posRef.current = el.scrollLeft;
    pausedRef.current = false;
  }, []);

  const scrollBy = useCallback((dir: number) => {
    const el = scrollRef.current;
    if (!el) return;
    pausedRef.current = true;
    el.scrollTo({ left: el.scrollLeft + dir * SCROLL_AMOUNT, behavior: "smooth" });
    setTimeout(() => {
      posRef.current = el.scrollLeft;
      normalizePos();
      el.scrollLeft = posRef.current;
      pausedRef.current = false;
    }, 500);
  }, [normalizePos]);

  const touchStartX = useRef(0);
  const touchScrollStart = useRef(0);
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    pausedRef.current = true;
    touchStartX.current = e.touches[0].clientX;
    touchScrollStart.current = scrollRef.current?.scrollLeft ?? 0;
  }, []);
  const onTouchMove = useCallback((e: React.TouchEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollLeft = touchScrollStart.current + (touchStartX.current - e.touches[0].clientX);
  }, []);
  const onTouchEnd = useCallback(() => {
    const el = scrollRef.current;
    if (el) posRef.current = el.scrollLeft;
    normalizePos();
    if (el) el.scrollLeft = posRef.current;
    pausedRef.current = false;
  }, [normalizePos]);

  return (
    <div className="mb-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl text-foreground text-center mb-6"
        >
          Вашишт: там, где Рама обрел силу
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="font-body text-muted-foreground text-sm md:text-lg text-center max-w-3xl mx-auto leading-relaxed mb-12"
        >
          Деревня Вашишт (2100 м) — это не просто точка на карте Гималаев, это живая легенда. Именно здесь, великий мудрец Васиштха обучал царя Раму искусству йоги и законам мироздания. Сердце деревни — древний каменный храм, на территории которого тысячелетиями бьют целебные горячие сероводородные источники, подаренные богами.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <ul className="font-body text-muted-foreground text-sm md:text-lg space-y-3">
            <li className="flex gap-3"><span className="text-primary">✦</span> <span><strong>Источники:</strong> Ежедневное омовение в целебных водах после практики для глубокого расслабления тела.</span></li>
            <li className="flex gap-3"><span className="text-primary">✦</span> <span><strong>Водопад Йогини:</strong> Трекинг по живописной тропе к мощному водопаду сквозь яблоневые сады.</span></li>
            <li className="flex gap-3"><span className="text-primary">✦</span> <span><strong>Аутентичность:</strong> Традиционная гималайская архитектура и атмосфера глубинной Индии.</span></li>
          </ul>
        </motion.div>
      </div>

      {/* Infinite gallery — full width */}
      <div className="relative overflow-hidden group">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <button
          onClick={() => scrollBy(-1)}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 items-center justify-center rounded-full bg-background/30 backdrop-blur-md border border-white/10 text-foreground/60 hover:text-foreground hover:bg-background/50 transition-all opacity-0 group-hover:opacity-100"
          aria-label="Назад"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => scrollBy(1)}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 items-center justify-center rounded-full bg-background/30 backdrop-blur-md border border-white/10 text-foreground/60 hover:text-foreground hover:bg-background/50 transition-all opacity-0 group-hover:opacity-100"
          aria-label="Вперёд"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div
          ref={scrollRef}
          className="flex items-center gap-4 overflow-x-hidden py-4"
          style={{ scrollBehavior: "auto" }}
          onMouseEnter={pause}
          onMouseLeave={resume}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {loopedImages.map((src, i) => {
            const idx = i % galleryImages.length;
            const isFeatured = idx % 3 === 1;
            return (
              <div
                key={i}
                onClick={() => setLightboxSrc(src)}
                className={`flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-2xl ${
                  isFeatured
                    ? "h-[280px] md:h-[380px] w-[320px] md:w-[440px]"
                    : "h-[220px] md:h-[300px] w-[260px] md:w-[350px]"
                }`}
              >
                <img
                  src={src}
                  alt={`Вашишт ${idx + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VashishtSection;
