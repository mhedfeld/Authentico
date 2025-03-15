// components/ui/luxury-pattern.tsx
export function LuxuryPattern({ opacity = 5, className = "" }) {
    return (
      <div 
        className={`absolute inset-0 bg-[url('/logos/luxury-pattern-light.png')] bg-repeat ${className}`}
        style={{ opacity: opacity / 100 }}
      ></div>
    );
  }
  