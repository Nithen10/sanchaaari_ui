/**
 * Generate a booking reference of the form `SNCH-YYMMDD-XXXXXX`.
 * YYMMDD is today's date in IST, XXXXXX is six uppercase base-36 chars.
 * Stable for ~30 days; collisions are astronomically unlikely in our scale.
 */
export function generateBookingRef(date: Date = new Date()): string {
  const ist = new Date(date.getTime() + (5.5 * 60 - date.getTimezoneOffset()) * 60 * 1000);
  const yy = String(ist.getUTCFullYear()).slice(-2);
  const mm = String(ist.getUTCMonth() + 1).padStart(2, "0");
  const dd = String(ist.getUTCDate()).padStart(2, "0");
  const rand = Math.floor(Math.random() * 36 ** 6)
    .toString(36)
    .toUpperCase()
    .padStart(6, "0");
  return `SNCH-${yy}${mm}${dd}-${rand}`;
}
