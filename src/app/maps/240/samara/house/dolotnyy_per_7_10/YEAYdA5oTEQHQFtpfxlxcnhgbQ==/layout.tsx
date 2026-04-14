import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ООО «АВТОМИГ» — Яндекс Карты',
  description: 'ООО «АВТОМИГ», 443065, Самарская область, г. Самара, Долотный пер., д.7, 10 — отзывы, фото, время работы, телефон и адрес на карте',
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
