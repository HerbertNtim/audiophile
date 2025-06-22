import Navbar from "@/components/Navbar";
import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ['300', '400', '500', '700'],
})

export const metadata = {
  title: "audiophile",
  description: "Your one-stop shop for high-quality audio products",
  icons: {
    icon: '/favicon-32x32.png',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" webcrx="">
      <body
        className={`${roboto.className} antialiased h-full`}
      >
        <main className="flex flex-col">
          <Navbar />
          <div className="flex-1">
            {children}
          </div>
          <p>Footer</p>
        </main>
      </body>
    </html>
  );
}
