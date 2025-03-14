'use client';

import { useState } from 'react';
import Spline from '@splinetool/react-spline';

export function SplinePriceCards() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  return (
    <div className="w-full relative" style={{ height: '600px' }}>
      {/* Loading indicator */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-amber-500 flex flex-col items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500 mb-4"></div>
            <p>Loading 3D Pricing Cards...</p>
          </div>
        </div>
      )}
      
      <Spline 
        scene="https://prod.spline.design/uemcHwrtrPwUxqo8/scene.splinecode"
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}
