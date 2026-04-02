"use client";

import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Image from 'next/image';

/**
 * Mobile Headbar 
*/
export function NavBar() {
  const pathname = usePathname();

  // Função atualizada usando as mesmas cores vibrantes da Sidebar.
  // Usamos 'to-r' (para a direita) para o degradê fluir horizontalmente.
  const getThemeColor = () => {
    if (pathname === '/quality' || pathname.includes('quality')) {
      return 'bg-gradient-to-r from-[#13E984] to-[#036430]';
    }
    if (pathname === '/ombudsman' || pathname.includes('ombudsman')) {
      return 'bg-gradient-to-r from-[#C978FF] to-[#401E56]';
    }
    return 'bg-gradient-to-r from-[#67CCFA] to-[#0255BC]'; // Default (Home/Temperature)
  };

  const currentBgClass = getThemeColor();

  return (
    <header 
      className={cn(
        // Adicionei shadow-md, sticky e z-50 para ele flutuar sobre o conteúdo no scroll
        "flex md:hidden flex-row w-full h-24 sticky top-0 z-50 p-8 shadow-md",
        currentBgClass 
      )}
    >
      {/* --- Logo Section --- */}
      <div className="flex justify-end items-center align-middle w-full">      

          {/* Main Horizontal Logo */}
          <Image 
            src="/assets/logo_horizontal.svg" 
            alt="Olho D'água Logo" 
            width={120} 
            height={90} 
            className="object-contain"
            priority 
          />

      </div>
    </header>
  );
}