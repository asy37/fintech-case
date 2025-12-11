import React from 'react'

export const MenuIcon = React.forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement>
>((props, ref) => (
  <svg
    ref={ref}
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path
        d="M20 7L4 7"
        stroke="#363A3F"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
      <path
        d="M20 12L4 12"
        stroke="#363A3F"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
      <path
        d="M20 17L4 17"
        stroke="#363A3F"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
    </g>
  </svg>
))
MenuIcon.displayName = 'MenuIcon'
