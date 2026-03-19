import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ООО ВОЛГА-АВТО — Яндекс Карты',
  description: 'ООО ВОЛГА-АВТО, Тольятти, ул. Маршала Жукова, д. 54, этаж 1 офис 1 ком. 3 — отзывы, фото, время работы, телефон и адрес на карте',
  icons: {
    icon: [
      { url: '/yandex-icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.png', type: 'image/png' },
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
    shortcut: '/yandex-icon.svg',
    apple: '/apple-touch-icon.png',
  },
};

export default function MapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
