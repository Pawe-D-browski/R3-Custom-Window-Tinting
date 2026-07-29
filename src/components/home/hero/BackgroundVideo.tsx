"use client";

import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import { AssetPath } from "@/paths/AssetPath";

export default function BackgroundVideo() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement || !mounted) return;

    let playPromise: Promise<void> | undefined;

    const safePlay = () => {
      if (videoElement) {
        playPromise = videoElement.play();

        if (playPromise !== undefined) {
          playPromise.catch(() => {});
        }
      }
    };

    safePlay();

    const handleVideoEnd = () => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        safePlay();
      }
    };

    videoElement.addEventListener("ended", handleVideoEnd);

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("ended", handleVideoEnd);

        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              if (videoElement.paused === false) {
                videoElement.pause();
              }
            })
            .catch(() => {});
        }
      }
    };
  }, [mounted, resolvedTheme]);

  if (!mounted) return null;

  const videoSrc = new AssetPath("background-fluid.mp4").toString();

  const videoProps = {
    muted: true,
    playsInline: true,
    disablePictureInPicture: true,
    preload: "auto",
  };

  const videoKey = `${resolvedTheme}`;

  const baseVideoStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "var(--radius-6)",
  };

  const conditionalVideoStyle = resolvedTheme === "light" ? { filter: "invert(100%) hue-rotate(180deg)" } : {};

  const videoStyle = { ...baseVideoStyle, ...conditionalVideoStyle };

  return (
    <video {...videoProps} ref={videoRef} key={videoKey} style={videoStyle} tabIndex={-1}>
      <source src={videoSrc} type="video/mp4" />
    </video>
  );
}
