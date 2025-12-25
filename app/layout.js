import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import Copyright from "@/components/copyright/copyright";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Copyright />
      </body>
    </html>
  );
}
