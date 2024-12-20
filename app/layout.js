import { Toaster } from "react-hot-toast";
import "./globals.css";

export const metadata = {
  title: "Donate Me 👾",
  description: "A Simple Payment Integration",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased flex flex-col justify-center items-center h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
