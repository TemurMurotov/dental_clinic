import { MessageCircle, Send } from 'lucide-react';
import { siteConfig } from '@/content/site-config';

export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href={`https://wa.me/${siteConfig.whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-110"
      >
        <MessageCircle size={26} />
      </a>
      <a
        href={`https://t.me/${siteConfig.telegramUsername}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Telegram"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#229ED9] text-white shadow-lg shadow-black/20 transition-transform hover:scale-110"
      >
        <Send size={24} />
      </a>
    </div>
  );
}
