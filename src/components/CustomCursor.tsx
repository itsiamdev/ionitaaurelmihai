import { useEffect, useState, useRef, useCallback } from "react";

const CustomCursor = () => {
  const [dotPosition, setDotPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
  const isVisibleRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentDotRef = useRef({ x: 0, y: 0 });

  const animate = useCallback(() => {
    const dotSpeed = 0.5;

    // Dot follows target (mouse)
    currentDotRef.current = {
      x: currentDotRef.current.x + (targetRef.current.x - currentDotRef.current.x) * dotSpeed,
      y: currentDotRef.current.y + (targetRef.current.y - currentDotRef.current.y) * dotSpeed,
    };

    setDotPosition({ ...currentDotRef.current });

    animationFrameRef.current = requestAnimationFrame(animate);
  }, []);

  const onMouseMove = useCallback((e: MouseEvent) => {
    targetRef.current = { x: e.clientX, y: e.clientY };
    
    if (!isVisibleRef.current) {
      isVisibleRef.current = true;
      setIsVisible(true);
      currentDotRef.current = { x: e.clientX, y: e.clientY };
    }
  }, []);

  const onMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const isInteractive =
      target.tagName === "A" ||
      target.tagName === "BUTTON" ||
      target.closest("a") ||
      target.closest("button") ||
      target.classList.contains("hover-trigger") ||
      target.classList.contains("cursor-pointer");
    setIsHovering(!!isInteractive);
  }, []);

  const onMouseLeave = useCallback(() => {
    setIsVisible(false);
    isVisibleRef.current = false;
  }, []);

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseleave", onMouseLeave);
    
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseleave", onMouseLeave);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [onMouseMove, onMouseOver, onMouseLeave, animate]);

  if (!isVisible) return null;

  return (
    <div className="custom-cursor">
      <div
        className={`cursor-dot ${isHovering ? "hovering" : ""}`}
        style={{
          left: dotPosition.x,
          top: dotPosition.y,
        }}
      />
    </div>
  );
};

export default CustomCursor;
