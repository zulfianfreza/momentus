import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 *
 * @param inputs
 * @returns
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Disable right click
 * @param e
 */
export const disableRightClick = (
  e: React.MouseEvent<HTMLDivElement, MouseEvent>,
) => {
  e.preventDefault();
};
