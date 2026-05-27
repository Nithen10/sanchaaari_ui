"use client";

import { useState } from "react";
import Link from "next/link";
import type { Package } from "@/data/packages";
import BookingModal from "./BookingModal";
import { cn } from "@/lib/cn";

interface BookButtonProps {
  pkg: Package;
  variant?: "primary" | "gold" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  label?: string;
  /** When true, the button is a link to /tours/[slug]?book=1 (used on listing cards). */
  redirectToDetail?: boolean;
  /** When true, the modal opens immediately on mount (used by the detail page when ?book=1 is present). */
  defaultOpen?: boolean;
}

export default function BookButton({
  pkg,
  variant = "primary",
  size = "md",
  className,
  label = "Book Now",
  redirectToDetail = false,
  defaultOpen = false,
}: BookButtonProps) {
  const [open, setOpen] = useState(defaultOpen);

  const sizeClass = size === "lg" ? "btn--lg" : "";
  const variantClass =
    variant === "gold" ? "btn--gold" : variant === "ghost" ? "btn--ghost" : "btn--primary";

  if (redirectToDetail) {
    return (
      <Link
        href={`/tours/${pkg.slug}?book=1`}
        className={cn("btn", variantClass, sizeClass, className)}
        prefetch
      >
        {label}
      </Link>
    );
  }

  return (
    <>
      <button
        type="button"
        className={cn("btn", variantClass, sizeClass, className)}
        onClick={() => setOpen(true)}
      >
        {label}
      </button>
      <BookingModal pkg={pkg} open={open} onClose={() => setOpen(false)} />
    </>
  );
}
