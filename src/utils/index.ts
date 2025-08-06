import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatAmount(
  amount: number,
  {
    minimumFractionDigits,
    maximumFractionDigits,
  }: {
    minimumFractionDigits?: number | undefined;
    maximumFractionDigits?: number | undefined;
  } = {}
) {
  if (isNaN(amount)) return 0;
  const formatter = new Intl.NumberFormat(undefined, {
    style: "decimal",
    minimumFractionDigits,
    maximumFractionDigits,
  });

  return formatter.format(amount);
}
