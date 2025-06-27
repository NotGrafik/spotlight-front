import router from '@/router';
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function goToPage(page: string) {
    router.push(`/${page}`);
    localStorage.setItem('lastVisitedPage', page);
};
