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

  // Atualizado: Agora retorna os gradientes com as cores hexadecimais passadas
  const getThemeColor = () => {
    if (pathname === '/quality' || pathname.includes('quality')) {
      return 'bg-gradient-to-b from-[#13E984] to-[#036430]';
    }
    if (pathname === '/ombudsman' || pathname.includes('ombudsman')) {
      return 'bg-gradient-to-b from-[#C978FF] to-[#401E56]';
    }
    return 'bg-gradient-to-b from-[#67CCFA] to-[#0255BC]'; // Default (Home/Temperature)
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
        "hidden md:flex flex-col w-72 h-screen sticky top-0 transition-colors duration-500 ease-in-out p-8",
        currentBgClass 
      )}
    >
      {/* --- Logo Section --- */}
      <div className="flex justify-center mb-12 w-full">
        <div className="relative inline-flex items-center justify-center p-4">


          {/* Main Horizontal Logo */}
          <Image 
            src="/assets/logo_horizontal.svg" 
            alt="Olho D'água Logo" 
            width={160} 
            height={80} 
            className="object-contain relative z-20"
            priority 
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

    </aside>
  );
}
function SidebarItem({ 
  link, 
  isActive,  
}: { 
  link: {
    label: string;
    href: string;
    icon: LucideIcon;
  }; 
  isActive: boolean;
  activeTextColor: string;
}) {
  const Icon = link.icon;

  const getThemeColors = (path: string) => {
    if (path === '/quality' || path.includes('quality')) {
      return {
        text: 'text-[#09C168]', // Verde vibrante
        gradient: 'bg-gradient-to-b from-[#7FE4B4] to-[#1C8250]'
      };
    }
    if (path === '/ombudsman' || path.includes('ombudsman')) {
      return {
        text: 'text-[#9A55CA]', // Roxo vibrante
        gradient: 'bg-gradient-to-r from-[#A4A1C3] to-[#7228A4]'
      };
    }
    return {
      text: 'text-[#17A1FA]', // Azul vibrante
      gradient: 'bg-gradient-to-b from-[#67CCFA] to-[#0255BC]'
    };
  };

  const theme = getThemeColors(link.href);

  return (
    <Link
      href={link.href}
      className={cn(
        // 1. REMOVI O `font-title` DAQUI! 
        // 3. ADICIONADO `transform-gpu` para forçar renderização suave e corrigir serrilhado
        "relative flex items-center gap-5 px-6 py-3 rounded-2xl transition-all duration-300 overflow-hidden transform-gpu",
        isActive 
          ? "bg-white-custom shadow-lg ring-1 ring-black/5" // ADICIONADO `ring-1` para disfarçar pixels na borda
          : "hover:bg-white/10"         
      )}
    >
      {/* O círculo/pílula de degradê */}
      <div 
        className={cn(
          "absolute -left-10 rounded-r-full transition-all duration-300 ease-out z-0",
          theme.gradient,
          // ADICIONADO `shadow-[0_0_2px_rgba(0,0,0,0.1)]` para suavizar a curva contra o fundo branco
          isActive ? "w-26 h-26 opacity-100 shadow-[0_0_2px_rgba(0,0,0,0.1)]" : "w-0 opacity-0"
        )} 
      />

      {/* Ícone */}
      <div className="relative z-10 flex items-center justify-center">
        <Icon 
          size={28} 
          strokeWidth={isActive ? 2.5 : 2} 
          className="text-white-custom" 
        />
      </div>
      
      {/* Texto */}
      <span className={cn(
        // 2. ADICIONEI `font-sans` e um peso `font-medium` aqui junto com o seu text-paragrafo
        "relative z-10 transition-colors duration-300 text-paragrafo font-sans font-bold", 
        isActive ? theme.text : "text-white-custom"
      )}>
        {link.label}
      </span>
    </Link>
  );
}