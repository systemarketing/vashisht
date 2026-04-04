import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import heroImg from "@/assets/hero-mountains.jpg";
import yogaImg from "@/assets/yoga-practice.jpg";
import trekkingImg from "@/assets/1fc30b43-4878-4f53-8ded-827bc83c3003.jpg";
import workshopImg from "@/assets/workshop.png";
import vashishtImg from "@/assets/f76ffcd9-e8aa-4715-be29-70ed55955a48.jpg";
import retreatImg from "@/assets/8d695d8c-7d49-4cd1-9384-c13fa9051f9b.jpg";
import roomImg from "@/assets/86a39685-2e43-4c2e-b21f-cc9c91bd8410.jpg";
import dussehraImg from "@/assets/dussehra.jpg";

const photos = [heroImg, yogaImg, trekkingImg, vashishtImg, workshopImg, retreatImg, roomImg, dussehraImg];

const GallerySection = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const navigate = (dir: number) => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + dir + photos.length) % photos.length);
  };

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl text-foreground text-center mb-16"
        >
          Атмосфера тура
        </motion.h2>

        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {photos.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setLightboxIndex(i)}
              className="flex-shrink-0 cursor-pointer overflow-hidden rounded-lg"
            >
              <img src={src} alt={`Фото ${i + 1}`} loading="lazy" className="h-[40vh] md:h-[50vh] w-auto object-cover hover:scale-105 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center"
            onClick={() => setLightboxIndex(null)}
          >
            <button onClick={() => setLightboxIndex(null)} className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors">
              <X className="w-8 h-8" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigate(-1); }}
              className="absolute left-4 text-foreground hover:text-primary transition-colors"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigate(1); }}
              className="absolute right-4 text-foreground hover:text-primary transition-colors"
            >
              <ChevronRight className="w-10 h-10" />
            </button>
            <img
              src={photos[lightboxIndex]}
              alt=""
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
