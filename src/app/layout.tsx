//LAYOUT PARA A HOMEPAGE
import "./globals.css";
import { inter } from './fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
