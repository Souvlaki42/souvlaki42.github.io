import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Souvlaki42",
  description: "Generated by souvlaki42",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
        {/* <footer>
          © Souvlaki42 {new Date().getFullYear()} -{" "}
          <Link href={"/credits"}>Credits</Link>
        </footer> */}
      </body>
    </html>
  );
}
