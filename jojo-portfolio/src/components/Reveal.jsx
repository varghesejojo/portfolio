import { useReveal } from "../hooks/useReveal";

export function Reveal({ children, className = "", delay = 0, y = 32 }) {
  const [ref, visible] = useReveal();
  
  return (
    <div 
      ref={ref} 
      className={className} 
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : `translateY(${y}px)`,
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}