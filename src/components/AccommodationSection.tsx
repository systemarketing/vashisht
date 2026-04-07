import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import BookingDialog from "./BookingDialog";

interface SliderProps {
  images: string[];
  altPrefix: string;
}

const ImageSlider = ({ images, altPrefix }: SliderProps) => {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);

  const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), [images.length]);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);
  const onTouchEnd = useCallback((e: React.TouchEvent) => {
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) delta > 0 ? next() : prev();
  }, [next, prev]);

  return (
    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden group/slider">
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current]}
          alt={`${altPrefix} ${current + 1}`}
          loading="lazy"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 w-full h-full object-cover"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        />
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-background/30 backdrop-blur-md border border-white/10 text-foreground/60 hover:text-foreground hover:bg-background/50 transition-all opacity-0 group-hover/slider:opacity-100"
            aria-label="Назад"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-background/30 backdrop-blur-md border border-white/10 text-foreground/60 hover:text-foreground hover:bg-background/50 transition-all opacity-0 group-hover/slider:opacity-100"
            aria-label="Вперёд"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-white scale-125" : "bg-white/40"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const section1Images = [
  "https://storage.yandexcloud.net/systemarketing-media/Vasihtha_yoga_dom%20(9).jpg",
  "https://storage.yandexcloud.net/systemarketing-media/Vasihtha_yoga_dom%20(8).jpg",
  "https://storage.yandexcloud.net/systemarketing-media/Vasihtha_yoga_dom%20(10).jpg",
];

const section2Images = [
  "https://storage.yandexcloud.net/systemarketing-media/Vasihtha_yoga_dom%20(2).jpg",
  "https://storage.yandexcloud.net/systemarketing-media/Vasihtha_yoga_dom%20(3).jpg",
  "https://storage.yandexcloud.net/systemarketing-media/Vasihtha_yoga_dom%20(4).jpg",
  "https://storage.yandexcloud.net/systemarketing-media/Vasihtha_yoga_dom%20(5).jpg",
  "https://storage.yandexcloud.net/systemarketing-media/Vasihtha_yoga_dom%20(1).jpg",
];

const section3Images = [
  "https://storage.yandexcloud.net/systemarketing-media/Vasihtha_yoga_dom%20(6).jpg",
  "https://storage.yandexcloud.net/systemarketing-media/Vasihtha_yoga_dom%20(7).jpg",
];

const AccommodationSection = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <section id="accommodation" className="py-24 bg-section-light">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl text-section-light-foreground text-center mb-20"
        >
          Где будем жить и практиковать?
        </motion.h2>

        {/* Section 1: Slider left, text right */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-8 md:gap-12 items-center mb-20"
        >
          <div className="w-full md:w-1/2">
            <ImageSlider images={section1Images} altPrefix="Ретрит-центр" />
          </div>
          <div className="w-full md:w-1/2">
            <p className="font-body text-section-light-foreground/80 text-sm md:text-base leading-relaxed mb-4">
              Мы разместимся в уютном ретрит-центр «Васиштха йогадом», который расположенн прямо в деревне Вашишт, в окружении яблоневого сада с видом на заснеженные пики Гималаев.
            </p>
            <p className="font-body text-section-light-foreground/80 text-sm md:text-base leading-relaxed">
              Это пространство, специально созданное для практиков.
              <br />Никакого городского шума — только звуки горных водопадов, пение птиц и чистый воздух.
            </p>
          </div>
        </motion.div>

        {/* Section 2: Text left, slider right (reversed Z) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row-reverse gap-8 md:gap-12 items-center mb-20"
        >
          <div className="w-full md:w-1/2">
            <ImageSlider images={section2Images} altPrefix="Номера" />
          </div>
          <div className="w-full md:w-1/2">
            <p className="font-body text-section-light-foreground/80 text-sm md:text-base leading-relaxed mb-4">
              Мы будем жить уютных комнатах в эко-стиле, с деревянной мебелью и панорамными окнами с видом на долину.
            </p>
            <p className="font-body text-section-light-foreground/80 text-sm md:text-base leading-relaxed mb-4">
              Есть одноместное размещение и двуместное с разделенными постелями. В каждом номере деревянные полы, туалет и душ с горячей водой, постельные принадлежности, полотенца, одеяла.
            </p>
            <p className="font-body text-section-light-foreground/80 text-sm md:text-base leading-relaxed">
              В проживание включен вегетарианский завтрак в индийском или европейском стиле
            </p>
          </div>
        </motion.div>

        {/* Section 3: Slider left, text right */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-8 md:gap-12 items-center mb-20"
        >
          <div className="w-full md:w-1/2">
            <ImageSlider images={section3Images} altPrefix="Зал для практик" />
          </div>
          <div className="w-full md:w-1/2">
            <p className="font-body text-section-light-foreground/80 text-sm md:text-base leading-relaxed mb-4">
              Практиковать и проводить воркшопы будем в специальном зале с деревянными полами, панорамными окнами, оборудованном музыкальной системой, проектором и экраном.
            </p>
            <p className="font-body text-section-light-foreground/80 text-sm md:text-base leading-relaxed">
              Для персональных занятий на открытом воздухе будет открыт большой йога-зал, с навесом от дождя и специальным настилом
            </p>
          </div>
        </motion.div>

        {/* Full-width bottom text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-12"
        >
          <p className="font-body text-section-light-foreground/70 text-sm md:text-base leading-relaxed mb-4">
            Также в ретрит центре доступен широкий спектр оздоровительных процедур: классический, тайский, шиатсу, аювердический масляный массаж, звуковой массаж с тибетскими поющими чашами, лимфодреннажный массаж и палсинг-терапия.
          </p>
          <p className="font-body text-section-light-foreground/70 text-sm md:text-base leading-relaxed">
            Мы можем помочь забронировать размещение, если вы захотите приехать раньше или остаться в Вашишите после основной программы тура.
          </p>
        </motion.div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={() => setBookingOpen(true)}
            className="font-body text-sm md:text-base px-8 py-3 border border-foreground/30 rounded-full text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
          >
            Забронировать номер
          </button>
        </div>
      </div>

      <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} />
    </section>
  );
};

export default AccommodationSection;
