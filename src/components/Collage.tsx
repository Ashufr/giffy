'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const imageUrls = [
  '/images/gif1.gif',
  '/images/gif2.gif',
  '/images/gif3.gif',
  '/images/gif4.gif',
  '/images/gif5.gif',
  '/images/gif6.gif',
  '/images/gif7.gif',
  '/images/gif8.gif',
];

const colors = {
  primary: `#1e3a8a`,    // Deep Blue
  secondary: `#9333ea`,  // Vibrant Purple
  tertiary: `#facc15`,   // Bright Yellow
  background: `#f1f5f9`, // Light Slate
  text: `#1f2937`,       // Dark Gray
};
export default function Collage() {
  const handleDownload = async (url: string) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = url.split('/').pop() || 'gif-download.gif';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Failed to download the GIF. Please try again.');
    }
  };

  return (
    <>
      <style>{`
        .collage-container {
          min-height: 100vh;
          padding: 1rem;
          background: ${colors.background};
        }
        .content-wrapper {
          max-width: 1280px;
          margin: 0 auto;
          padding-top: 1rem;
        }
        .title {
          font-size: 2.5rem;
          font-weight: 800;
          text-align: center;
          color: ${colors.text};
          margin-bottom: 2rem;
        }
        .image-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        .image-card {
          position: relative;
          overflow: hidden;
          border-radius: 0.75rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: box-shadow 0.3s ease;
          cursor: pointer;
        }
        .image-card:hover {
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }
        .image-card img {
          width: 100%;
          height: 16rem;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .image-card:hover img {
          transform: scale(1.05);
        }
        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0);
          transition: background 0.3s ease;
        }
        .image-card:hover .overlay {
          background: rgba(${parseInt(colors.secondary.slice(1, 3), 16), parseInt(colors.secondary.slice(3, 5), 16), parseInt(colors.secondary.slice(5, 7), 16)}, 0.2);
        }
        .no-results {
          text-align: center;
          color: ${colors.text};
          font-size: 1.125rem;
          grid-column: span 1;
        }
        @media (min-width: 640px) {
          .image-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 768px) {
          .image-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .image-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `}</style>

      <main className="collage-container">
        <div className="content-wrapper">
          <h1 className="title">GIF Collage Gallery</h1>

          <div className="image-grid">
            {imageUrls.length > 0 ? (
              imageUrls.map((src, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className="image-card"
                  onClick={() => handleDownload(src)}
                >
                  <Image src={src} alt={`GIF ${index + 1}`} loading="lazy" />
                  <div className="overlay" />
                </motion.div>
              ))
            ) : (
              <p className="no-results">No GIFs available.</p>
            )}
          </div>
        </div>
      </main>
    </>
  );
}