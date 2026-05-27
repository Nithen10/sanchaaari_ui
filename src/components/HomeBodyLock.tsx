"use client";

import { useEffect } from "react";

/**
 * Marks the home route with `is-home` and proactively strips `is-site`
 * from the body. The strip is defensive: if the user navigates here from
 * an inner page whose cleanup hasn't yet run, we never want the heritage
 * type cascade to reach (and darken) the hero text. `.is-site` lives only
 * on the `.home-below` div on this route.
 */
export default function HomeBodyLock() {
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    html.classList.add("is-home");
    body.classList.add("is-home");
    body.classList.remove("is-site");
    return () => {
      html.classList.remove("is-home");
      body.classList.remove("is-home");
    };
  }, []);
  return null;
}
