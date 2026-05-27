"use client";

import React from "react";
import Image from "next/image";
import type { Destination } from "@/data/destinations";

interface DestinationCardProps {
  destination: Destination;
  index: number;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination, index }) => {
  return (
    <div
      className="destination-card"
      id={`destination-card-${destination.id}`}
      style={{
        animationDelay: `${0.3 + index * 0.15}s`,
      }}
    >
      <div className="card-header">
        <div className="card-title">{destination.location}</div>
        <div className="card-dots">
          {[0, 1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className={`dot ${i === 0 ? "active" : ""}`}
            />
          ))}
        </div>
      </div>
      <div className="card-image-wrap">
        <Image
          src={destination.cardImage}
          alt={destination.name}
          fill
          sizes="(max-width: 640px) 70vw, (max-width: 1024px) 30vw, 24rem"
          style={{ objectFit: "cover" }}
          priority={index < 2}
        />
        <div className="card-overlay" />
      </div>
    </div>
  );
};

export default DestinationCard;
