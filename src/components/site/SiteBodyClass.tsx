"use client";

import { useEffect } from "react";

/**
 * Adds `is-site` to the <body> while any inner-site page is mounted, so all
 * inner-site styles in globals.css apply. Cleans up on unmount (i.e. when
 * the user navigates back to the home route, which adds `is-home` instead).
 */
export default function SiteBodyClass() {
  useEffect(() => {
    const body = document.body;
    body.classList.add("is-site");
    body.classList.remove("is-home");
    return () => {
      body.classList.remove("is-site");
    };
  }, []);
  return null;
}
