"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '../constants/navigation';
import { type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

/**
 * Desktop Sidebar Navigation
 * Changes background color entirely based on the active route
 */
export function Sidebar() {
  const pathname = usePathname();

  // Default to blue (Home) if no match found
  const getThemeColor = () => {
    if (pathname === '/quality') return 'bg-green-light';
    if (pathname === '/ombudsman') return 'bg-orange-dark';
    if (pathname.includes('quality')) return 'bg-green-light';
    if (pathname.includes('ombudsman')) return 'bg-orange-light';
    return 'bg-blue-light'; // Default (Home/Temperature)
  };

  const getTextColor = (path: string) => {
     if (path === '/') return 'text-blue-light';
     if (path === '/quality') return 'text-green-light';
     if (path === '/ombudsman') return 'text-orange-light';
     return 'text-blue-light';
  };

  const currentBgClass = getThemeColor();

  return (
    <aside 
      className={cn(
        "hidden md:flex flex-col w-80 h-screen sticky top-0 transition-colors duration-500 ease-in-out p-8",
        currentBgClass 
      )}
    >
      {/* --- Logo Section --- */}
      <div className="flex justify-center mb-12 w-full">
        <div className="relative inline-flex items-center justify-center p-4">

          {/* Top-Left Stars */}
          <Image 
            src="/assets/stars_left.svg" 
            alt="Decorative stars" 
            width={40} 
            height={40} 
            className="absolute -top-2 -left-6 z-10 " 
          />

          {/* Main Horizontal Logo */}
          <Image 
            src="/assets/logo_horizontal.svg" 
            alt="Olho D'água Logo" 
            width={160} 
            height={80} 
            className="object-contain relative z-20"
            priority 
          />

          {/* Bottom-Right Stars */}
          <Image 
            src="/assets/stars_right.svg" 
            alt="Decorative stars" 
            width={40} 
            height={40} 
            className="absolute -bottom-2 -right-6 z-10"
          />
          
        </div>
      </div>

      {/* --- Navigation Groups --- */}
      <nav className="flex-1 flex flex-col gap-8">

        <div>
          <h3 className="text-white-custom/80 font-sans text-sm uppercase tracking-widest mb-4 pl-4">
            Monitoramento
          </h3>
          <div className="flex flex-col gap-3">
            {NAV_LINKS.slice(0, 2).map((link) => (
              <SidebarItem 
                key={link.href} 
                link={link} 
                isActive={pathname === link.href}
                activeTextColor={getTextColor(link.href)}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-white-custom/80 font-sans text-sm uppercase tracking-widest mb-4 pl-4">
            Saiba mais
          </h3>
          <div className="flex flex-col gap-3">
             <SidebarItem 
                link={NAV_LINKS[2]} 
                isActive={pathname === NAV_LINKS[2].href}
                activeTextColor={getTextColor(NAV_LINKS[2].href)}
              />
          </div>
        </div>

      </nav>

      {/* / Loading Indicator */}
      <div className="mt-auto">
        <p className="text-white-custom text-center text-sm mb-2 opacity-80">Loading...</p>
        <div className="w-full h-2 bg-white/30 overflow-hidden">
          <div className="h-full w-2/3 bg-white-custom " />
        </div>
      </div>

    </aside>
  );
}

// --- Helper Component for individual items ---
function SidebarItem({ 
  link, 
  isActive, 
  activeTextColor 
}: { 
  // We define the specific shape of the 'link' object here
  link: {
    label: string;
    href: string;
    icon: LucideIcon;
  }; 
  isActive: boolean;
  activeTextColor: string;
}) {
  const Icon = link.icon;
  return (
    <Link
      href={link.href}
      className={cn(
        "flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-300 font-title text-xl",
        isActive 
          ? `bg-white-custom shadow-lg ${activeTextColor}` // Active: White bg, colored text
          : "text-white-custom hover:bg-white/10"          // Inactive: White text, transparent bg
      )}
    >
      <Icon size={28} strokeWidth={isActive ? 2.5 : 2} />
      <span>{link.label}</span>
    </Link>
  );
}