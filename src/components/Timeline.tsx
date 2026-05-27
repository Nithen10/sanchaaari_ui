"use client";

import React from "react";

interface TimelineProps {
  currentSlide: number;
  total: number;
  onDotClick: (index: number) => void;
}

const Timeline: React.FC<TimelineProps> = ({ currentSlide, total, onDotClick }) => {
  return (
    <div className="timeline" id="timeline">
      <div className="timeline-line" />
      <ul className="timeline-nodes">
        {Array.from({ length: total }).map((_, i) => (
          <li key={i}>
            <button
              type="button"
              onClick={() => onDotClick(i)}
              className={`timeline-node ${i === currentSlide ? "active" : ""}`}
              aria-label={`Go to slide ${i + 1}`}
            >
              {i === currentSlide ? i + 1 : ""}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
