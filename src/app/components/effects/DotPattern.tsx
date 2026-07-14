'use client';

export function DotPattern() {
  return (
    <div className="absolute inset-0 -z-10">
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="dots"
            patternUnits="userSpaceOnUse"
            width="50"
            height="50"
          >
            <circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.1)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
    </div>
  );
}
