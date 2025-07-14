'use client';

import React from 'react';

const colors = {
  primary: '#1e3a8a',    // Deep Blue
  secondary: '#9333ea',  // Vibrant Purple
  tertiary: '#facc15',   // Bright Yellow
  background: '#f1f5f9', // Light Slate
  text: '#1f2937',       // Dark Gray
};

export default function About() {
  return (
    <>
      <style>{`
        .about-container {
          min-height: 100vh;
          padding: 2rem 1rem;
          background: ${colors.background};
        }
        .content-wrapper {
          max-width: 1280px;
          margin: 0 auto;
        }
        .title {
          font-size: 2.5rem;
          font-weight: 800;
          text-align: center;
          color: ${colors.text};
          margin-bottom: 2rem;
        }
        .content {
          font-size: 1.125rem;
          line-height: 1.75;
          color: ${colors.text};
          max-width: 800px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        .highlight {
          color: ${colors.secondary};
          font-weight: 600;
        }
        @media (min-width: 640px) {
          .content {
            padding: 0 2rem;
          }
        }
      `}</style>

      <main className="about-container">
        <div className="content-wrapper">
          <h1 className="title">About GIF Collage Gallery</h1>
          <div className="content">
            <p>
              Hello! I'm a <span className="highlight">memer and creator</span> with a passion for crafting unique, fun, and expressive GIFs. This platform is my personal showcase, where I publish my GIFs across different platforms so that people everywhere can enjoy and use them.
            </p>
            <p>
              The <span className="highlight">GIF Collage Gallery</span> is a space designed to celebrate creativity and humor. Whether you're looking for the perfect reaction, a funny moment, or just something to spice up your messages, you’ll find a variety of expressive animations here.
            </p>
            <p>
              I built this site to make it easier for everyone to explore and enjoy the content I create. Your support and enjoyment mean everything, and I hope these GIFs bring you as much laughter as they brought me while making them.
            </p>
            <p>
              Thank you for visiting and being part of this growing community. Keep sharing, keep laughing, and stay animated!
            </p>
          </div>
        </div>
      </main>
    </>
  );
}