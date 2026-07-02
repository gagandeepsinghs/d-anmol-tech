import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'D Anmol Tech - Enterprise Digital Solutions';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to right, #0a192f, #112240)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '4rem',
        }}
      >
        <h1
          style={{
            fontSize: 80,
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '1rem',
            textAlign: 'center',
            lineHeight: 1.1,
          }}
        >
          D Anmol Tech
        </h1>
        <p
          style={{
            fontSize: 40,
            color: '#ff6b00',
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          Enterprise Digital Solutions
        </p>
      </div>
    ),
    {
      ...size,
    }
  );
}
