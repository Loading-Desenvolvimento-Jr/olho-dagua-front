import { ThermometerSnowflake, GlassWater, MessageCircleHeart } from 'lucide-react';

/**
 * Navigation links with their specific branding colors
 * Used to dynamically style the TabBar and Sidebar
 */

export const NAV_LINKS = [
  { 
    label: 'Temperatura', 
    href: '/', 
    icon: ThermometerSnowflake,
    activeColor: 'bg-blue-dark',
    activeIconColor: 'text-blue-dark' 
  },
  { 
    label: 'Status do Filtro', 
    href: '/quality', 
    icon: GlassWater,
    activeColor: 'bg-green-dark',
    activeIconColor: 'text-green-dark'
  },
  { 
    label: 'Ouvidoria', 
    href: '/ombudsman', 
    icon: MessageCircleHeart,
    activeColor: 'bg-purple-dark',
    activeIconColor: 'text-orange-dark'
  },
];