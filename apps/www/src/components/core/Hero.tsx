"use client";

import { useState, useEffect, useCallback } from "react";
//import { motion, AnimatePresence } from "framer-motion";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

interface Slide {
  id: number;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage: string;
  imageAlt?: string;
}

interface HeroSliderProps {
  autoPlay?: boolean;
  interval?: number;
  slides?: Slide[];
}

const defaultSlides: Slide[] = [
  {
    id: 1,
    title: "Premium Media Production",
    description:
      "Creating compelling content that captivates audiences and delivers results. From concept to completion, we bring stories to life.",
    buttonText: "View Our Work",
    buttonLink: "/portfolio",
    backgroundImage: "/Slider1.jpg",
    imageAlt: "Film production team working on set",
  },
  {
    id: 2,
    title: "Digital Storytelling Experts",
    description:
      "Harnessing the power of digital platforms to tell stories that resonate with your audience and amplify your brand's message.",
    buttonText: "Our Services",
    buttonLink: "/services",
    backgroundImage: "/Slider1.jpg",
    imageAlt: "Digital content creation team brainstorming",
  },
  {
    id: 3,
    title: "Innovative Media Solutions",
    description:
      "Blending creativity with technology to deliver cutting-edge media experiences that engage, inform, and inspire action.",
    buttonText: "Learn More",
    buttonLink: "/solutions",
    backgroundImage: "/Slider1.jpg",
    imageAlt: "High-tech media production equipment",
  },
];

export default function Hero({
  autoPlay = true,
  interval = 5000,
  slides = defaultSlides,
}: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

  // Preload all images on component mount
  useEffect(() => {
    const preloadImages = slides.map((slide) => {
      const img =
        typeof window !== "undefined"
          ? new window.Image()
          : document.createElement("img");
      img.src = slide.backgroundImage;
      img.onload = () => {
        setLoadedImages((prev) => ({ ...prev, [slide.id]: true }));
      };
      img.onerror = () => {
        console.error(`Failed to load image: ${slide.backgroundImage}`);
        setLoadedImages((prev) => ({ ...prev, [slide.id]: false }));
      };
      return img;
    });

    return () => {
      preloadImages.forEach((img) => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, [slides]);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setIsLoading(!loadedImages[slides[(currentSlide + 1) % slides.length].id]);
  }, [slides, currentSlide, loadedImages]);

  const prevSlide = () => {
    setDirection(0);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setIsLoading(
      !loadedImages[
        slides[currentSlide === 0 ? slides.length - 1 : currentSlide - 1].id
      ]
    );
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : 0);
    setCurrentSlide(index);
    setIsLoading(!loadedImages[slides[index].id]);
  };

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(timer);
  }, [currentSlide, autoPlay, interval, nextSlide]);

  // Fixed slide variants with proper typing
  const slideVariants: Variants = {
    hidden: (dir: number) => ({
      x: dir === 1 ? "100%" : "-100%",
      opacity: 0,
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
    exit: (dir: number) => ({
      x: dir === 1 ? "-100%" : "100%",
      opacity: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    }),
  };

  const contentVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.3 + i * 0.2,
        duration: 0.6,
      },
    }),
  };

  return (
    <div className="relative w-full h-[700px] overflow-hidden bg-gray-900">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={slides[currentSlide].id}
          custom={direction}
          variants={slideVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="absolute w-full h-[700px] flex items-center justify-center text-center"
        >
          <Image
            src={slides[currentSlide].backgroundImage}
            alt={slides[currentSlide].imageAlt || slides[currentSlide].title}
            fill
            className="object-cover object-center"
            priority={currentSlide === 0}
            quality={80}
            onLoadingComplete={() => {
              setIsLoading(false);
            }}
            onError={(e) => {
              console.error(
                "Failed to load image:",
                slides[currentSlide].backgroundImage,
                e
              );
              setIsLoading(false);
            }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
          />

          {/* Glass overlay effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 backdrop-blur-[2px]" />

          {/* Additional subtle gradient for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10" />

          <div className="relative z-10 max-w-4xl px-6 text-white">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-shadow"
              custom={0}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
            >
              {slides[currentSlide].title}
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8 text-shadow"
              custom={1}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
            >
              {slides[currentSlide].description}
            </motion.p>
            <motion.a
              href={slides[currentSlide].buttonLink}
              className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              custom={2}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
            >
              {slides[currentSlide].buttonText}
            </motion.a>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/30 backdrop-blur-sm text-white rounded-full hover:bg-black/50 transition-all focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Previous slide"
      >
        <FaChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/30 backdrop-blur-sm text-white rounded-full hover:bg-black/50 transition-all focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Next slide"
      >
        <FaChevronRight size={24} />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-white w-6 scale-110 backdrop-blur-sm"
                : "bg-white/50 hover:bg-white/70 hover:scale-105"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentSlide ? "true" : "false"}
          />
        ))}
      </div>

      {/* Loading indicator */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-30 bg-black/20">
          <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
}
