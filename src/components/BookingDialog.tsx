import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { MessageCircle, Phone } from "lucide-react";

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BookingDialog = ({ open, onOpenChange }: BookingDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-card border-border max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl text-foreground text-center">
            Забронировать можно напрямую у Макса
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-3 mt-4">
          <a
            href="https://t.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors font-body"
          >
            <MessageCircle className="w-5 h-5" />
            Написать в Telegram
          </a>
          <a
            href="https://vk.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors font-body"
          >
            <MessageCircle className="w-5 h-5" />
            Написать в VKontakte
          </a>
          <a
            href="tel:+71234567890"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors font-body"
          >
            <Phone className="w-5 h-5" />
            Позвонить
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
