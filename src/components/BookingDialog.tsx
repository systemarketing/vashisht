import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { MessageCircle, Phone } from "lucide-react";
import { Instagram } from "lucide-react";

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BookingDialog = ({ open, onOpenChange }: BookingDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-card/95 backdrop-blur-xl border-border/50 max-w-lg p-0 overflow-hidden rounded-xl">
        <img
          src="https://storage.yandexcloud.net/systemarketing-media/maks.jpg"
          alt="Макс Лапшин"
          className="w-full h-64 object-cover object-top"
        />
        <div className="px-8 pb-8 pt-4">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl text-foreground text-center">
              Свяжись с нами удобным способом
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-3 mt-6">
            <a
              href="https://t.me/max_lapshin?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A3%20%D0%BC%D0%B5%D0%BD%D1%8F%20%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81%20%D0%BF%D0%BE%20%D1%82%D1%83%D1%80%D1%83%20%D0%B2%20%D0%93%D0%B8%D0%BC%D0%B0%D0%BB%D0%B0%D0%B8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-secondary text-secondary-foreground rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors font-body"
            >
              <MessageCircle className="w-5 h-5" />
              Telegram
            </a>
            <a
              href="https://m.vk.com/write3768091"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-secondary text-secondary-foreground rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors font-body"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 16.09c.2.36-.04.54-.33.54h-1.37c-.28 0-.54-.22-.54-.22s-1.07-1.1-1.9-1.1c-.16 0-.33.06-.33.4v.72c0 .28-.2.38-.6.38-1.46 0-3.08-.88-4.24-2.54-1.72-2.48-2.18-4.34-2.18-4.72 0-.16.06-.32.38-.32h1.38c.32 0 .42.14.54.42.6 1.7 1.78 3.58 2.14 3.58.16 0 .24-.08.24-.5V10.3c-.04-.86-.5-.94-.5-1.24 0-.14.12-.3.32-.3h2.18c.26 0 .36.14.36.4v2.68c0 .22.1.32.18.32.16 0 .28-.1.6-.42 1.02-1.14 1.74-2.92 1.74-2.92.08-.18.24-.36.54-.36h1.38c.42 0 .5.22.42.44-.2.7-1.84 3.16-1.84 3.16-.14.22-.18.34 0 .58l1.49 1.6z"/></svg>
              Vkontakte
            </a>
            <a
              href="tel:+79056639653"
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-secondary text-secondary-foreground rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors font-body"
            >
              <Phone className="w-5 h-5" />
              Позвонить
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
