"use client";
import { useEffect } from "react";
import "aos/dist/aos.css";

export default function AOSInit() {
  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import("aos")).default;
      AOS.init({
        duration: 1000,
        once: true,
      });
    };

    initAOS();
  }, []);

  return null;
}
