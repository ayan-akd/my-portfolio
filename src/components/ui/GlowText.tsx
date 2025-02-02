import React from 'react';

const GlowText = ({ 
  text,
  theme = 'light'
}: {text: string; theme?: 'light' | 'dark';}) => {
  // Variant-specific background colors
  const variantColors = {
    light: '#fff78a',
    dark: '#fff78b'
  };

  return (
    <div className="relative inline-block">
      {/* The actual text */}
      <span className="relative z-10">
        {text}
      </span>
      
      {/* The glow effect with responsive styles */}
      <span 
        className={`
          absolute z-[-1]
          
          /* Mobile styles (default) */
          top-[10%] left-[-8%]
          w-[110px] h-[50px]
          
          /* Tablet styles */
          sm:w-[130px] sm:h-[55px]
          sm:top-[2%] sm:left-[-8%]
          
          /* Desktop styles */
          lg:w-[170px] lg:h-[76px]
          lg:top-[2%] lg:left-[-8%]
          
          flex-shrink-0 rounded-[20px]
          blur-[7px] opacity-100
        `}
        style={{
          background: variantColors[theme]
        }}
      />
    </div>
  );
};export default GlowText;