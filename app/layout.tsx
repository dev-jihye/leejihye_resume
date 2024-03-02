import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Leejihye Resume',
  description: '2년차 프론트엔드 개발자 이지혜의 이력서입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
