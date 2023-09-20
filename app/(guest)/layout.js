import "../globals.css";
import { Montserrat } from "next/font/google";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavBar from "@/components/Navigation/MainNav";
import Footer from "@/components/Footer/Footer";
import { Analytics } from '@vercel/analytics/react';

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Azure Voyages - Embarking on an Oceanic Escape",
  description:
    "Embark on an oceanic adventure with our brand that offers unparalleled luxury and comfort in every voyage. Get ready to delve into the azure waters and discover hidden gems around the world.",
  canonical: "www.example.com",
  keywords: ["Cruise Ship", "Booking", "Reservation", "Summer Vacation"],
  creator: "Madison Li",
  publisher: "Commonwealth Institute of Technology",
  category: "technology",
  type: "website",
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={montserrat.className}>
        <ThemeProvider>
          <NavBar />
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
