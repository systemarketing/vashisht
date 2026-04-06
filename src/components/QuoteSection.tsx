import { motion } from "framer-motion";

const QuoteSection = () => {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://storage.yandexcloud.net/systemarketing-media/Vashist_Manali_end.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-2xl md:text-4xl text-white/90 leading-relaxed tracking-wide"
        >
          Место. Время. Практика.
          <br />
          Всё совпало.
          <br />
          <span className="text-white/70 text-xl md:text-3xl">
            Ждем только тебя.
          </span>
        </motion.p>
      </div>
    </section>
  );
};

export default QuoteSection;
