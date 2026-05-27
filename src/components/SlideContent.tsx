"use client";

import React from "react";
import Link from "next/link";
import type { Destination } from "@/data/destinations";

interface SlideContentProps {
  destination: Destination;
  slideKey: number;
  exiting?: boolean;
}

const SlideContent: React.FC<SlideContentProps> = ({ destination, slideKey, exiting }) => {
  return (
    <div className={`slide-content ${exiting ? "exiting" : ""}`} id={exiting ? undefined : "slide-content"}>
      <div className="slide-content-inner" key={slideKey}>
        {/* Location label */}
        <div className="location-label" id="location-label">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
          <span>{destination.location}</span>
        </div>

        {/* Star rating */}
        <div className="star-rating" id="star-rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <div
              key={star}
              className={`star ${star <= destination.rating ? "" : "empty"}`}
            />
          ))}
        </div>

        {/* Destination title */}
        <h1 className="destination-title" id="destination-title">
          {destination.name}
        </h1>

        {/* Description */}
        <p className="destination-description" id="destination-description">
          {destination.description}
        </p>

        {/* Explore button: links to the state detail page for the active slide */}
        <Link
          href={`/states/${destination.slug}`}
          className="explore-btn"
          id="explore-btn"
        >
          Explore {destination.name}
          <span className="arrow">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default SlideContent;
