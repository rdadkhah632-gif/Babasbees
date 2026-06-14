import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function ArrowIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path d="M4 10h11M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path d="m4 10 4 4 8-9" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function LeafIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M19.5 4.5C12 4.7 6.6 8.2 6.4 14.1c-.1 3.5 2.6 5.5 5.5 4.6 5.1-1.6 7.4-7.6 7.6-14.2Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path d="M4.5 20c2.4-4.1 5.7-7.3 10.3-9.6" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function QuoteIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 30 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M0 24V13.8C0 4.9 5.1.7 13 0v4.7c-4.5.7-6.7 3-6.7 6.6H13V24H0Zm17 0V13.8C17 4.9 22.1.7 30 0v4.7c-4.5.7-6.7 3-6.7 6.6H30V24H17Z" />
    </svg>
  );
}
