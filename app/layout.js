import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from './component/Footer'
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sayed Ayman",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body {...inter.className }>
          <div >
          <Navbar/>
          {children}
          <Footer/>
          </div>
        
        </body>
    </html>
  );
}
