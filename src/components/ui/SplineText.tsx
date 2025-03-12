'use client';

import { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';

interface SplineTextProps {
  className?: string;
}

export function SplineText({ className = "" }: SplineTextProps) {
  const [loading, setLoading] = useState(true);

  return (
    <div className={`w-full h-[300px] ${className}`}>
      {loading && (
        <div className="flex items-center justify-center h-full">
          <div className="text-amber-500 text-xl">Loading 3D Text...</div>
        </div>
      )}
      <Spline
        scene="https://prod.spline.design/YOUR_SCENE_ID/scene.splinecode"
        onLoad={() => setLoading(false)}
        style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.5s' }}
      />
    </div>
  );
}
