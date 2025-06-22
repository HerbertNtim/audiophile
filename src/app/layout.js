import Navbar from "@/components/Navbar";
import "./globals.css";
import { Roboto } from "next/font/google";
import StateWrapper from "./StateWrapper";

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
    <html lang="en">
      <body className={roboto.className}>
        <StateWrapper>
          <Navbar />
          {children}
        </StateWrapper>
      </body>
    </html>
  );
}
