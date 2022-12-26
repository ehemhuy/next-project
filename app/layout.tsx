import '@/styles/globals.css';
import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>My portfolio</title>
      </head>
      <body className="overflow-y-auto">{children}</body>
    </html>
  );
}
