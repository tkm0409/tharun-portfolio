"use client";
import React from "react";
import HeroSection from "./HeroSection";
import { SparklesCore } from "./sparkles.tsx";

export function SparklesPreview() {
  return (
    <div className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={150}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
    </div>
  );
}
