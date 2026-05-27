"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { destinations, type Destination } from "@/data/destinations";
import Navbar from "./Navbar";
import SlideContent from "./SlideContent";
import DestinationCard from "./DestinationCard";
import Timeline from "./Timeline";

const AUTO_PLAY_INTERVAL = 5000; // 5 seconds per slide

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [contentKey, setContentKey] = useState(0);
  const [exitingDest, setExitingDest] = useState<Destination | null>(null);
  const [exitingKey, setExitingKey] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const total = destinations.length;

  // Get cards to display (the 2-3 cards for the right side, excluding current)
  const getVisibleCards = useCallback(() => {
    const cards = [];
    for (let i = 1; i <= 3; i++) {
      const idx = (currentSlide + i) % total;
      cards.push(destinations[idx]);
    }
    return cards;
  }, [currentSlide, total]);

  // Navigate to a specific slide
  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning || index === currentSlide) return;
      setIsTransitioning(true);

      // Snapshot the current destination so it can animate out
      setExitingDest(destinations[currentSlide]);
      setExitingKey(contentKey);

      // Trigger content re-mount for animations
      setContentKey((prev) => prev + 1);
      setCurrentSlide(index);

      setTimeout(() => {
        setIsTransitioning(false);
        setExitingDest(null);
      }, 1000);
    },
    [isTransitioning, currentSlide, contentKey]
  );

  // Next / Prev
  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % total);
  }, [currentSlide, total, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + total) % total);
  }, [currentSlide, total, goToSlide]);

  // Keep a ref to the latest nextSlide so autoplay can read it without re-mounting the interval
  const nextSlideRef = useRef(nextSlide);
  useEffect(() => {
    nextSlideRef.current = nextSlide;
  });

  // Single source of truth for the auto-play timer. The callback always
  // reads nextSlideRef.current so it never holds a stale closure.
  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (document.visibilityState === "visible") {
        nextSlideRef.current();
      }
    }, AUTO_PLAY_INTERVAL);
  }, []);

  useEffect(() => {
    startAutoPlay();
    const onVisible = () => {
      if (document.visibilityState === "visible") {
        startAutoPlay();
      }
    };
    document.addEventListener("visibilitychange", onVisible);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, [startAutoPlay]);

  // One-shot GSAP entrance timeline — fires once on initial mount only.
  // Subsequent slide changes use the existing SlideContent re-mount lifecycle.
  // Targets the stable .bg-slides wrapper (not .bg-slide.active img) so the
  // slider's active-class rotation can't strand any image at opacity 0.
  // gsap.context() + ctx.revert() restores inline styles on unmount, which
  // matters under React StrictMode (dev double-mount) — without revert, the
  // second mount's gsap.from() captures opacity:0 as the end state and the
  // tween becomes a no-op, leaving the hero blank.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".bg-slides", { opacity: 0, duration: 1.4 }, 0)
        .from("#location-label", { y: 30, opacity: 0, duration: 0.7 }, "-=0.6")
        .from("#star-rating", { y: 24, opacity: 0, duration: 0.5 }, "-=0.4")
        .from("#destination-title", { y: 50, opacity: 0, duration: 0.9 }, "-=0.3")
        .from("#destination-description", { y: 24, opacity: 0, duration: 0.7 }, "-=0.5")
        .from("#explore-btn", { y: 20, opacity: 0, duration: 0.6 }, "-=0.4");
    });
    return () => ctx.revert();
  }, []);

  const handlePrev = () => {
    prevSlide();
    startAutoPlay();
  };

  const handleNext = () => {
    nextSlide();
    startAutoPlay();
  };

  const handleDotClick = (index: number) => {
    goToSlide(index);
    startAutoPlay();
  };

  // Current destination
  const currentDestination = destinations[currentSlide];

  // Cards to show
  const visibleCards = getVisibleCards();

  // Progress bar width
  const progressWidth = ((currentSlide + 1) / total) * 100;

  return (
    <div className="hero-wrapper" id="hero-wrapper">
      {/* Background images */}
      <div className="bg-slides" id="bg-slides">
        {destinations.map((dest, index) => (
          <div
            key={dest.id}
            className={`bg-slide ${index === currentSlide ? "active" : ""}`}
            id={`bg-slide-${dest.id}`}
          >
            <Image
              src={dest.bgImage}
              alt={dest.name}
              fill
              sizes="100vw"
              style={{ objectFit: "cover" }}
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Left-side vertical timeline */}
      <Timeline
        currentSlide={currentSlide}
        total={total}
        onDotClick={handleDotClick}
      />

      {/* Main content area */}
      <div className="main-content" id="main-content">
        {/* Left: Slide content (stacked for enter+exit animations) */}
        <div className="slide-content-stack">
          {exitingDest && (
            <SlideContent
              destination={exitingDest}
              slideKey={exitingKey}
              exiting
            />
          )}
          <SlideContent
            destination={currentDestination}
            slideKey={contentKey}
          />
        </div>

        {/* Right: Destination cards */}
        <div className="cards-section" id="cards-section">
          <div className="destination-cards" key={contentKey}>
            {visibleCards.map((card, i) => (
              <DestinationCard
                key={`${contentKey}-${card.id}`}
                destination={card}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Previous destination ghost label */}
      <div className="prev-destination-label" id="prev-destination-label">
        {currentDestination.name}
      </div>

      {/* Bottom controls */}
      <div className="bottom-controls" id="bottom-controls">
        {/* Slide counter */}
        <div className="slide-counter" id="slide-counter">
          <span className="current">
            {String(currentSlide + 1).padStart(2, "0")}
          </span>
          <span> / {String(total).padStart(2, "0")}</span>
        </div>

        {/* Navigation arrows */}
        <div className="nav-arrows" id="nav-arrows">
          <button
            className="nav-arrow"
            onClick={handlePrev}
            aria-label="Previous slide"
            id="nav-prev"
          >
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>
          <button
            className="nav-arrow"
            onClick={handleNext}
            aria-label="Next slide"
            id="nav-next"
          >
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </button>
        </div>

        {/* Scroll affordance: tells the user there's content below the hero */}
        <a className="scroll-hint" href="#home-below" aria-label="See more below">
          <span>Scroll for more</span>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 16l-6-6 1.41-1.41L12 13.17l4.59-4.58L18 10z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default HeroSlider;
