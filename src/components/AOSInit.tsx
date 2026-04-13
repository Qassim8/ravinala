"use client";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

export default function AOSInit() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      easing: "ease-out-quad",
      delay: 100,
      disableMutationObserver: false,
    });
  }, []);

  return null; // المكون ده وظيفته بس الـ Initialize مش بيفضل ظاهر
}
