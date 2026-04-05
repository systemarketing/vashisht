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
              href="https://t.me/max_lapshin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-secondary text-secondary-foreground rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors font-body"
            >
              <MessageCircle className="w-5 h-5" />
              Telegram
            </a>
            <a
              href="https://vk.com/im/convo/3768091"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-secondary text-secondary-foreground rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors font-body"
            >
              <MessageCircle className="w-5 h-5" />
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
