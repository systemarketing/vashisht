import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const photos = [
  "https://storage.yandexcloud.net/systemarketing-media/yoga%20shala.jpg",
  "https://storage.yandexcloud.net/systemarketing-media/obshaya%20galery/12.jpg",
  "https://storage.yandexcloud.net/systemarketing-media/obshaya%20galery/122.jpg",
  "https://storage.yandexcloud.net/systemarketing-media/obshaya%20galery/13.jpg",
  "https://storage.yandexcloud.net/systemarketing-media/obshaya%20galery/14.jpg",
  "https://storage.yandexcloud.net/systemarketing-media/obshaya%20galery/15.jpg",
  "https://storage.yandexcloud.net/systemarketing-media/obshaya%20galery/16.jpg",
  "https://storage.yandexcloud.net/systemarketing-media/obshaya%20galery/17.jpg",
  "https://storage.yandexcloud.net/systemarketing-media/obshaya%20galery/22.jpg",
  "https://storage.yandexcloud.net/systemarketing-media/obshaya%20galery/33.jpg",
  "https://storage.yandexcloud.net/systemarketing-media/obshaya%20galery/333.jpg",
  "https://storage.yandexcloud.net/systemarketing-media/obshaya%20galery/44.jpg",
  "https://storage.yandexcloud.net/systemarketing-media/obshaya%20galery/55.png",
  "https://storage.yandexcloud.net/systemarketing-media/May_Vashisht/vashisht_may%20(1).jpg",
  "https://storage.yandexcloud.net/systemarketing-media/May_Vashisht/vashisht_may%20(2).jpg",
  "https://storage.yandexcloud.net/systemarketing-media/May_Vashisht/vashisht_may%20(3).jpg",
  "https://storage.yandexcloud.net/systemarketing-media/May_Vashisht/vashisht_may%20(4).jpg",
  "https://storage.yandexcloud.net/systemarketing-media/May_Vashisht/vashisht_may%20(5).jpg",
  "https://storage.yandexcloud.net/systemarketing-media/May_Vashisht/vashisht_may%20(6).jpg",
  "https://storage.yandexcloud.net/systemarketing-media/May_Vashisht/vashisht_may%20(7).jpg",
  "https://storage.yandexcloud.net/systemarketing-media/May_Vashisht/vashisht_may%20(8).jpg",
];

const GallerySection = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const navigate = (dir: number) => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + dir + photos.length) % photos.length);
  };

  return (
    <section className="py-24 bg-[hsl(30,15%,90%)]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='0.6' fill='%23c4b5a3' fill-opacity='0.15'/%3E%3C/svg%3E\")" }}>
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl text-center text-primary-foreground md:text-6xl"
        >
          Атмосфера тура
        </motion.h2>
      </div>

      {/* Masonry columns — без обрезки и белых пропусков */}
      <div className="px-2 md:px-4">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-2 md:gap-3">
          {photos.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (i % 8) * 0.04, duration: 0.5 }}
              onClick={() => setLightboxIndex(i)}
              className="mb-2 md:mb-3 break-inside-avoid cursor-pointer overflow-hidden rounded-xl group block"
            >
              <img
                src={src}
                alt={`Атмосфера тура ${i + 1}`}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox — 80% экрана */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 text-foreground/60 hover:text-foreground transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigate(-1); }}
              className="absolute left-4 text-foreground/60 hover:text-foreground transition-colors z-10"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigate(1); }}
              className="absolute right-4 text-foreground/60 hover:text-foreground transition-colors z-10"
            >
              <ChevronRight className="w-10 h-10" />
            </button>
            <img
              src={photos[lightboxIndex]}
              alt=""
              className="max-h-[80vh] max-w-[80vw] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
