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
            href="https://m.vk.com/write3768091"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-3 border border-primary text-primary font-body text-sm tracking-wider uppercase rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors w-full sm:w-auto justify-center"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 16.09c.2.36-.04.54-.33.54h-1.37c-.28 0-.54-.22-.54-.22s-1.07-1.1-1.9-1.1c-.16 0-.33.06-.33.4v.72c0 .28-.2.38-.6.38-1.46 0-3.08-.88-4.24-2.54-1.72-2.48-2.18-4.34-2.18-4.72 0-.16.06-.32.38-.32h1.38c.32 0 .42.14.54.42.6 1.7 1.78 3.58 2.14 3.58.16 0 .24-.08.24-.5V10.3c-.04-.86-.5-.94-.5-1.24 0-.14.12-.3.32-.3h2.18c.26 0 .36.14.36.4v2.68c0 .22.1.32.18.32.16 0 .28-.1.6-.42 1.02-1.14 1.74-2.92 1.74-2.92.08-.18.24-.36.54-.36h1.38c.42 0 .5.22.42.44-.2.7-1.84 3.16-1.84 3.16-.14.22-.18.34 0 .58l1.49 1.6z"/></svg>
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
