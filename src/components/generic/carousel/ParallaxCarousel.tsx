"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel, { UseEmblaCarouselType } from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";
import styles from "./ParallaxCarousel.module.css";
import { Box } from "@radix-ui/themes";
import Logo from "@/components/brand/Logo";
import CarouselDots from "./CarouselDots";
import { AssetPath } from "@/paths/AssetPath";

const TWEEN_FACTOR = 0.2;

interface LoopPoint {
  index: number;
  target: () => number;
}

interface EmblaEngine {
  options: { loop: boolean };
  slideLooper: { loopPoints: LoopPoint[] };
  slideRegistry: number[][];
}

interface ParallaxCarouselProps {
  slides: string[];
}

const ParallaxCarousel = ({ slides }: ParallaxCarouselProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const autoScrollOptions = {
    speed: 1.5,
    startDelay: 5000,
    stopOnInteraction: false,
  };

  const autoScrollRef = useRef(AutoScroll(autoScrollOptions));

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, skipSnaps: true }, [autoScrollRef.current]);

  const handleInteraction = useCallback(() => {
    const autoScroll = autoScrollRef.current;
    if (autoScroll) {
      autoScroll.reset();
    }
  }, []);

  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLDivElement[]>([]);

  const setTweenNodes = useCallback((emblaApi: UseEmblaCarouselType[1]) => {
    if (!emblaApi) return;

    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(`.${styles.emblaParallaxLayer}`) as HTMLDivElement;
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi: UseEmblaCarouselType[1]) => {
    if (!emblaApi) return;

    tweenFactor.current = TWEEN_FACTOR * emblaApi.scrollSnapList().length;
  }, []);

  const tweenParallax = useCallback((emblaApi: UseEmblaCarouselType[1], eventName?: string) => {
    if (!emblaApi) return;

    const engine = emblaApi.internalEngine() as unknown as EmblaEngine;
    const scrollProgress = emblaApi.scrollProgress();
    const slidesInView = emblaApi.slidesInView();
    const isScrollEvent = eventName === "scroll";

    emblaApi.scrollSnapList().forEach((scrollSnap: number, snapIndex: number) => {
      let diffToTarget = scrollSnap - scrollProgress;
      const slidesInSnap = engine.slideRegistry[snapIndex];

      slidesInSnap.forEach((slideIndex: number) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem: LoopPoint) => {
            const target = loopItem.target();

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target);
              if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
              if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
            }
          });
        }

        const translate = diffToTarget * (-1 * tweenFactor.current) * 100;
        const tweenNode = tweenNodes.current[slideIndex];
        if (tweenNode) tweenNode.style.transform = `translateX(${translate}%)`;
      });
    });
  }, []);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenParallax(emblaApi);
    onSelect();

    const onPointerDown = () => {
      handleInteraction();
    };

    emblaApi
      .on("select", onSelect)
      .on("reInit", onSelect)
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenParallax)
      .on("scroll", tweenParallax)
      .on("slideFocus", tweenParallax)
      .on("pointerDown", onPointerDown);

    return () => {
      if (emblaApi) emblaApi.destroy();
    };
  }, [emblaApi, onSelect, setTweenNodes, setTweenFactor, tweenParallax, handleInteraction]);

  return (
    <Box
      width={{ initial: "100%", md: "50%" }}
      style={{
        position: "relative",
        borderRadius: "var(--radius-4)",
        overflow: "hidden",
        minHeight: "350px",
      }}
    >
      <div className={styles.logoOverlay}>
        <Logo size={40} />
      </div>

      <CarouselDots slides={slides} selectedIndex={selectedIndex} />

      <div className={styles.carouselContainer}>
        <div className={styles.embla}>
          <div className={styles.emblaViewport} ref={emblaRef}>
            <div className={styles.emblaContainer}>
              {slides.map((filename, index) => (
                <div className={styles.emblaSlide} key={index}>
                  <div className={styles.emblaParallax}>
                    <div className={styles.emblaParallaxLayer}>
                      <Image
                        className={styles.emblaSlideImg}
                        src={new AssetPath(filename).toString()}
                        alt={""}
                        fill
                        priority={index === 0}
                        style={{ userSelect: "none" }}
                        sizes="(max-width: 1024px) 100vw, (max-width: 1640px) 50vw, 33vw"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default ParallaxCarousel;
