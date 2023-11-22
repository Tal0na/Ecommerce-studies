import { Poppins, Roboto } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

const customFontPoppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ["400", "500"],
});

const customFontRoboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500"],
});


export const metadata = {
  title: "Talona",
  description: "Portifolio Talona",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${customFontPoppins.variable} ${customFontRoboto.variable}`}>
      <body>
      
        {children}
      </body>
    </html>
  );
}
