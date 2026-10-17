import React from 'react';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { useLanguage } from '../../context/LanguageContext';

export default function WhatsAppFloatingButton() {
  const { t, isTamil } = useLanguage();
  const textMsg = isTamil 
    ? 'வணக்கம் JKR Mattress! மெத்தைகள் மற்றும் விலை விபரம் பற்றி அறிய விரும்புகிறேன்.'
    : 'Hello JKR Mattress! I would like to enquire about your mattresses and custom comfort offerings.';
  const waUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(textMsg)}`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 p-3.5 sm:p-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center group"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300">
        {t('common.whatsapp')}
      </span>
    </a>
  );
}
