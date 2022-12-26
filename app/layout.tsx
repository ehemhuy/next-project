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
        <meta charSet="utf-8" />
        <meta name="title" content="ehemhuy portfolio" />
        <meta name="description" content="ehemhuy portfolio" />
        <meta name="keywords" content="ehemhuy portfolio huy100699" />
        <meta name="author" content="huy100699" />
        <meta name="geo.region" content="VN-HN" />
        <meta name="geo.placename" content="Hà Nội" />
        <meta name="geo.position" content="21.03012;105.782613" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="overflow-y-auto">{children}</body>
    </html>
  );
}
