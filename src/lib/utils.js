// utils.js

import { clsx } from "clsx";  // Import clsx for conditional classnames
import { twMerge } from "tailwind-merge";  // Import tailwind-merge to merge class names

// Function to join class names conditionally and merge them for Tailwind
export function cn(...inputs) {
  return twMerge(clsx(...inputs));
}
