import Navbar from "@/components/Navbar";
import "./globals.css";
import { Roboto } from "next/font/google";
import Footer from "@/components/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: "audiophile",
  description: "Your one-stop shop for high-quality audio products",
  icons: {
    icon: "/favicon-32x32.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" webcrx="">
      <body className={`${roboto.className} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1 pt-16 md:pt-20">{children}</main>
        </div>
      </body>
    </html>
  );
}
