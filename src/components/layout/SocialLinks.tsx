import React from 'react';

type SocialItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

const socialItems: SocialItem[] = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5Zm8.9 2.6a1.2 1.2 0 1 1 0 2.4a1.2 1.2 0 0 1 0-2.4ZM12 7a5 5 0 1 1 0 10a5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7Z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.2 8.1a2.1 2.1 0 1 1 0-4.2a2.1 2.1 0 0 1 0 4.2Zm-1.8 2h3.5v10H4.4v-10Zm5.3 0h3.3v1.4h.05c.46-.87 1.58-1.8 3.26-1.8c3.48 0 4.12 2.23 4.12 5.12v5.28h-3.5v-4.68c0-1.12-.02-2.56-1.6-2.56c-1.6 0-1.84 1.2-1.84 2.48v4.76h-3.5v-10Z" />
      </svg>
    ),
  },
  {
    label: 'Twitter',
    href: 'https://x.com/',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.9 3h3L15.35 10.5L23 21h-6l-4.72-6.4L6.52 21H3.5l7.02-7.78L1 3h6.15l4.27 5.86L18.9 3Zm-1.05 16.2h1.66L6.24 4.72H4.46L17.85 19.2Z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13.4 21v-7h2.35l.4-2.8h-2.75V9.45c0-.8.25-1.35 1.43-1.35h1.52V5.6c-.27-.03-1.19-.1-2.26-.1c-2.24 0-3.77 1.3-3.77 3.7v2.1H8v2.8h2.32v7h3.08Z" />
      </svg>
    ),
  },
];

type Props = {
  className?: string;
};

const SocialLinks: React.FC<Props> = ({ className }) => {
  const containerClassName = className ? `social-links ${className}` : 'social-links';

  return (
    <div className={containerClassName} aria-label="Social links">
      {socialItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={item.label}
          title={item.label}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
