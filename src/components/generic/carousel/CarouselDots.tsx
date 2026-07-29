import React from "react";

interface CarouselDotsProps {
  slides: string[];
  selectedIndex: number;
}

const CarouselDots: React.FC<CarouselDotsProps> = ({ slides, selectedIndex }) => {
  // Dots container style
  const dotsContainerStyle: React.CSSProperties = {
    position: "absolute",
    bottom: "16px",
    left: "0",
    right: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    zIndex: 100,
    pointerEvents: "none",
  };

  // Dot style
  const getDotStyle = (isSelected: boolean): React.CSSProperties => ({
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    backgroundColor: isSelected ? "var(--accent-9)" : "var(--gray-12)",
    transition: "background-color 0.3s ease",
  });

  return (
    <div style={dotsContainerStyle}>
      {slides.map((_, index) => (
        <div
          key={index}
          style={getDotStyle(index === selectedIndex)}
          aria-label={`Slide ${index + 1} of ${slides.length}`}
        />
      ))}
    </div>
  );
};

export default CarouselDots;
