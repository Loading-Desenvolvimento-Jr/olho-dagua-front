"use client";

import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Image from 'next/image';

/**
 * Mobile Headbar 
*/
export function NavBar() {
  const pathname = usePathname();

  const getThemeColor = () => {
    if (pathname === '/quality') return 'bg-green-light';
    if (pathname === '/ombudsman') return 'bg-orange-dark';
    if (pathname === '/ombudsman') return 'bg-blue-light'; 
    if (pathname.includes('quality')) return 'bg-green-light';
    if (pathname.includes('ombudsman')) return 'bg-orange-light';
    return 'bg-blue-light';
  };



  const currentBgClass = getThemeColor();

  return (
    <header 
      className={cn(
        "flex md:hidden flex-row w-full h-24  top-0 transition-colors p-8",
        currentBgClass // Applies the dynamic background color
      )}
    >
      {/* --- Logo Section --- */}
      <div className="flex justify-end items-center  align-middle w-full ">      

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
