import React from 'react'

export const HoverUnderlineIcon = React.forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement>
>((props, ref) => (
  <svg
    ref={ref}
    width="45"
    height="8"
    viewBox="0 0 45 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0.901001 6.5C7.47045 1.56444 34.4948 -1.70074 43.901 6.49999"
      stroke="currentColor"
      strokeWidth="3"
    />
  </svg>
))
HoverUnderlineIcon.displayName = 'HoverUnderlineIcon'

