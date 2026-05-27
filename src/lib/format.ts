/** Format a price in Indian Rupees with the Indian number system (lakh/crore commas). */
export function formatINR(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

/** Format a duration like "5 Nights · 6 Days". */
export function formatDuration(nights: number, days: number): string {
  return `${nights} Night${nights === 1 ? "" : "s"} · ${days} Day${
    days === 1 ? "" : "s"
  }`;
}
