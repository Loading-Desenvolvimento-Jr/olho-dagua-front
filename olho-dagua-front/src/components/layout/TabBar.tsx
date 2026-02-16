"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '../constants/navigation'
import { cn } from '../../lib/utils'

/**
 * Mobile Bottom Navigation Bar
 * Features a pill-shape design with active state highlighting
 */
export function TabBar() {
  const pathname = usePathname();

  return (
    // Container: Floating pill shape, fixed at bottom, centered
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-center gap-12 bg-white-custom px-4 py-3 rounded-full shadow-xl border border-black-custom/5">
        
        {NAV_LINKS.map((link) => {
          const Icon = link.icon;
          // Check if this link is the current active page
          const isActive = pathname === link.href;

          return (
            <Link 
              key={link.href} 
              href={link.href}
              className="relative flex items-center justify-center group"
            >
              {/* Icon Container 
                - Active: Solid background color (Blue/Green/Orange), White icon, scaled up slightly
                - Inactive: Transparent background, Gray icon
              */}
              <div 
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ease-out",
                  isActive 
                    ? `${link.activeColor} text-white scale-110 shadow-md` 
                    : "bg-transparent text-gray-400 hover:bg-gray-100"
                )}
              >
                <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              </div>

            
            </Link>
          );
        })}

      </nav>
    </div>
  );
}