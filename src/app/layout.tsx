import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";

export const metadata: Metadata = {
  title: "Currículo Online Augusto Azevedo",
  description: "Profissional qualificado em Data Science e inovação digital",
  icons: {
    icon: '/images/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <ClientBody>
        {children}
      </ClientBody>
    </html>
  );
}
