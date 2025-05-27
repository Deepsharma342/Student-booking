// src/components/PhotoGallery.js
import React from 'react';

const photos = [
  '/src/sk1.png',
  '/src/sk2.png',
  '/src/sk3.png',
  '/src/sk4.png',
  '/src/sk5.png',
  '/src/sk6.png',
];

export default function PhotoGallery() {
  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ marginBottom: '10px' }}>📸 School Memories</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '15px'
      }}>
        {photos.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`school-${idx}`}
            style={{
              width: '100%',
              height: '150px',
              objectFit: 'cover',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
            }}
          />
        ))}
      </div>
    </div>
  );
}
