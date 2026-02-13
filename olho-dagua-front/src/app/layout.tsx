import type { Metadata } from "next";
import { Londrina_Solid, Livvic } from "next/font/google";
import "./globals.css";

const londrina = Londrina_Solid({ 
  weight: ['400', '900'],
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
        <aside className="hidden md:flex w-64 border-r border-black-custom/10">
          {/* <Sidebar /> will be called here later */}
          <div className="p-4 font-title text-titulo">Desktop Menu</div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 pb-24 md:pb-0 overflow-y-auto">
          {children}
        </main>

        {/* Mobile TabBar - Fixed at the bottom, hidden on desktop */}
        <nav className="fixed bottom-0 w-full md:hidden bg-white-custom border-t border-black-custom/10">
          {/* <TabBar /> will be called here later */}
          <div className="h-20 flex items-center justify-center font-title">Mobile TabBar</div>
        </nav>

      </body>
    </html>
  );
}