import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";

const ContactCTASection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl text-foreground mb-4"
        >
          Остались вопросы?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-body text-sm md:text-lg text-muted-foreground mb-10"
        >
          Не стесняйся — спрашивай, с радостью на все ответим.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://t.me/max_lapshin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-3 border border-primary text-primary font-body text-sm tracking-wider uppercase rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors w-full sm:w-auto justify-center"
          >
            <MessageCircle className="w-4 h-4" />
            Telegram
          </a>
          <a
            href="https://vk.com/im/convo/3768091"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-3 border border-primary text-primary font-body text-sm tracking-wider uppercase rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors w-full sm:w-auto justify-center"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M21.547 7H2.453A2.453 2.453 0 0 0 0 9.453v5.094A2.453 2.453 0 0 0 2.453 17h19.094A2.453 2.453 0 0 0 24 14.547V9.453A2.453 2.453 0 0 0 21.547 7zm-3.2 8.09h-1.6c-.6 0-.79-.48-1.87-1.57-1-.96-1.4-.96-1.64-.96-.34 0-.44.1-.44.56v1.43c0 .4-.13.54-1.15.54-1.7 0-3.58-1.03-4.9-2.95C5.1 9.6 4.6 8.1 4.6 7.74c0-.24.1-.46.56-.46h1.6c.42 0 .58.19.74.63.8 2.34 2.16 4.39 2.72 4.39.21 0 .3-.1.3-.64V9.67c-.06-1.12-.66-1.22-.66-1.62 0-.2.16-.4.43-.4h2.52c.36 0 .48.19.48.6v3.08c0 .36.16.48.26.48.21 0 .38-.12.78-.52 1.2-1.34 2.06-3.42 2.06-3.42.11-.24.3-.46.72-.46h1.6c.48 0 .59.25.48.6-.2.9-2.17 3.7-2.17 3.7-.17.28-.23.4 0 .7.17.22.72.7 1.1 1.12.7.78 1.22 1.44 1.36 1.9.15.46-.08.7-.52.7z"/></svg>
            ВКонтакте
          </a>
          <a
            href="tel:+79056639653"
            className="flex items-center gap-2 px-8 py-3 border border-primary text-primary font-body text-sm tracking-wider uppercase rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors w-full sm:w-auto justify-center"
          >
            <Phone className="w-4 h-4" />
            Позвонить
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTASection;
