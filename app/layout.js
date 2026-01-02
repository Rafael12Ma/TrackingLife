'use client'

import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import Copyright from "@/components/copyright/copyright";
import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 2000,
            style: {
              fontFamily: "serif",
            },
          }}
        />
        {children}
        <Copyright />
      </body>
    </html>
  );
}
