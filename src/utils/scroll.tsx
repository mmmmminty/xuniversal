import { useRef } from "react";

export default function HorizontalScrollContainer({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const onWheel = (e: React.WheelEvent) => {
    if (containerRef.current) {
      e.preventDefault();

      const maxStep = 100; 
      let delta = e.deltaY * 2;
      if (delta > maxStep) delta = maxStep;
      if (delta < -maxStep) delta = -maxStep;

      containerRef.current.scrollTo({
        left: delta += containerRef.current.scrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div
      ref={containerRef}
      onWheel={onWheel}
      className="flex flex-nowrap absolute top-0 left-0 overflow-x-scroll"
      style={{ scrollbarWidth: 'none'}}
    >
      {children}
    </div>
  );
}
