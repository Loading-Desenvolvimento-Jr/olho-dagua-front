import type { Metadata } from "next";
import { Londrina_Solid, Livvic } from "next/font/google";
import "./globals.css";
import { TabBar } from "@/components/layout/TabBar";
import { Sidebar } from "@/components/layout/Sidebar";
import { NavBar } from "@/components/layout/NavBar";

const londrina = Londrina_Solid({ 
  weight: ['300','400', '900'],
  subsets: ['latin'],
  variable: '--font-londrina',
})

const livvic = Livvic({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-livvic',
})

export const metadata: Metadata = {
  title: "Olho D'água",
  description: "Created by Loading JR",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${londrina.variable} ${livvic.variable}`}>
      <body className="antialiased flex flex-col md:flex-row min-h-screen bg-white-custom text-black-custom">
        
        
        {/* Desktop Sidebar - Visible only on md screens and up */}
        <Sidebar/>
         {/* Mobile TabBar - Fixed at the bottom, hidden on desktop */}
        <NavBar/> {/* Top Bar in the mobile version, only for UI/UX */}
        {/* Main Content Area */}
        <main className="flex-1 pb-24 md:pb-0 overflow-y-auto">
          {children}
        </main>

        {/* Mobile TabBar - Fixed at the bottom, hidden on desktop */}
         <NavBar/> {/* Top Bar in the mobile version, only for UI/UX */}
        <nav className="md:hidden">
          <TabBar/>        
        </nav>  

      </body>
    </html>
  );
}