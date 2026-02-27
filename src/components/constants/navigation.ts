import { ThermometerSnowflake, GlassWater, MessageCircleHeart } from 'lucide-react';

/**
 * Navigation links with their specific branding colors
 * Used to dynamically style the TabBar and Sidebar
 */

export const NAV_LINKS = [
  { 
    label: 'Temperature', 
    href: '/', 
    icon: ThermometerSnowflake,
    activeColor: 'bg-blue-dark',
    activeIconColor: 'text-blue-dark' 
  },
  { 
    label: 'Water Quality', 
    href: '/quality', 
    icon: GlassWater,
    activeColor: 'bg-green-dark',
    activeIconColor: 'text-green-dark'
  },
  { 
    label: 'Ombudsman', 
    href: '/ombudsman', 
    icon: MessageCircleHeart,
    activeColor: 'bg-orange-dark',
    activeIconColor: 'text-orange-dark'
  },
];