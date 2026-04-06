import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  "https://storage.yandexcloud.net/systemarketing-media/Vasihtha_yoga_dom%20(1).jpg",
  "https://storage.yandexcloud.net/systemarketing-media/Vasihtha_yoga_dom%20(2).jpg",
  "https://storage.yandexcloud.net/systemarketing-media/Vasihtha_yoga_dom%20(3).jpg",
  "https://storage.yandexcloud.net/systemarketing-media/Vasihtha_yoga_dom%20(4).jpg",
  "https://storage.yandexcloud.net/systemarketing-media/Vasihtha_yoga_dom%20(5).jpg",
  "https://storage.yandexcloud.net/systemarketing-media/Vasihtha_yoga_dom%20(6).jpg",
  "https://storage.yandexcloud.net/systemarketing-media/Vasihtha_yoga_dom%20(7).jpg",
  "https://storage.yandexcloud.net/systemarketing-media/Vasihtha_yoga_dom%20(8).jpg",
  "https://storage.yandexcloud.net/systemarketing-media/Vasihtha_yoga_dom%20(9).jpg",
  "https://storage.yandexcloud.net/systemarketing-media/Vasihtha_yoga_dom%20(10).jpg",
];

const SCROLL_AMOUNT = 400;

const AccommodationSection = () => {
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
    const singleSetWidth = getSingleSetWidth();
    if (singleSetWidth > 0) {
      while (posRef.current >= singleSetWidth * 2) posRef.current -= singleSetWidth;
      while (posRef.current < 0) posRef.current += singleSetWidth;
    }
  }, [getSingleSetWidth]);

  // Auto-scroll
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

    // Start from middle set
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

  // Arrow click scroll
  const scrollBy = useCallback((dir: number) => {
    const el = scrollRef.current;
    if (!el) return;
    pausedRef.current = true;
    const target = el.scrollLeft + dir * SCROLL_AMOUNT;
    el.scrollTo({ left: target, behavior: "smooth" });
    setTimeout(() => {
      posRef.current = el.scrollLeft;
      normalizePos();
      el.scrollLeft = posRef.current;
      pausedRef.current = false;
    }, 500);
  }, [normalizePos]);

  // Touch swipe support
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
    const delta = touchStartX.current - e.touches[0].clientX;
    el.scrollLeft = touchScrollStart.current + delta;
  }, []);

  const onTouchEnd = useCallback(() => {
    const el = scrollRef.current;
    if (el) posRef.current = el.scrollLeft;
    normalizePos();
    if (el) el.scrollLeft = posRef.current;
    pausedRef.current = false;
  }, [normalizePos]);

  return (
    <section id="accommodation" className="py-24 bg-section-light">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl text-section-light-foreground text-center mb-6"
        >
          Где будем жить и практиковать?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="font-body text-section-light-foreground/70 text-sm md:text-lg text-center max-w-3xl mx-auto leading-relaxed mb-16 whitespace-pre-line"
        >
          Наш лагерь — это уютный ретрит-центр «Васиштха йога дом»,
          расположенный прямо в деревне Вашишт.
          Это пространство, специально созданное для практиков. Простые, но чистые и светлые номера выполнены в экологичном гималайском стиле с обилием дерева.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <ul className="font-body text-section-light-foreground/70 text-sm md:text-lg space-y-3">
            <li className="flex gap-3"><span className="text-primary">✦</span> <span><strong>Практика:</strong> Просторный зал для йоги с панорамными окнами на долину Куллу и снежные пики.</span></li>
            <li className="flex gap-3"><span className="text-primary">✦</span> <span><strong>Размещение:</strong> Одно- и двухместные номера. У каждого номера балкон или терраса для встречи рассветов.</span></li>
            <li className="flex gap-3"><span className="text-primary">✦</span> <span><strong>Атмосфера:</strong> Никакого городского шума — только звуки горных водопадов, пение птиц и чистый воздух.</span></li>
          </ul>
        </motion.div>
      </div>

      {/* Infinite scrolling gallery */}
      <div className="relative overflow-hidden group">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-section-light to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-section-light to-transparent z-10 pointer-events-none" />

        {/* Arrow buttons — desktop only */}
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
            const originalIndex = i % galleryImages.length;
            const isFeatured = originalIndex % 3 === 1;

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
                  alt={`Васиштха йога дом ${originalIndex + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxSrc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/90 backdrop-blur-sm flex items-center justify-center"
            onClick={() => setLightboxSrc(null)}
          >
            <button
              onClick={() => setLightboxSrc(null)}
              className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={lightboxSrc}
              alt=""
              className="max-h-[60vh] max-w-[60vw] object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AccommodationSection;
