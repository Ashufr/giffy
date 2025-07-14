'use client';

import { StrictMode } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import Head from 'next/head';
import './globals.css';

const metadata = {
  title: 'GIF Collage Gallery',
  description: 'A gallery of GIFs with download functionality',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const colors = {
    primary: '#1e3a8a',    // Deep Blue
    secondary: '#9333ea',  // Vibrant Purple
    tertiary: '#facc15',   // Bright Yellow
    background: '#f1f5f9', // Light Slate
    text: '#1f2937',       // Dark Gray
  };

  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/@mui/material@5.11.0/dist/css/material-ui.min.css"
          rel="stylesheet"
        />
      </Head>
      <body>
        <StrictMode>
          <AppBar position="fixed" sx={{ background: colors.primary, boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <Toolbar>
              <Typography variant="h6" sx={{ flexGrow: 1, color: 'white', fontWeight: 700 }}>
                GIF Gallery
              </Typography>
              <IconButton sx={{ color: colors.tertiary, mr: 1 }} href="/">
                <HomeIcon />
              </IconButton>
              <Button sx={{ color: 'white', fontWeight: 500 }} href="/about">
                About
              </Button>
            </Toolbar>
          </AppBar>
          <div style={{ minHeight: '100vh', background: colors.background, paddingTop: '5rem' }}>
            {children}
          </div>
        </StrictMode>
      </body>
    </html>
  );
}