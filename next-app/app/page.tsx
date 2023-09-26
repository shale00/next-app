'use client';
// import { Metadata } from 'next';
import { useState } from 'react';
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(
  () => import('./components/HeavyComponent'));

export default function Home() {
  const [isVisible, setVisible] = useState(false);

  return (
    <main>
      <h1>Hello World</h1>
      <button onClick={() => setVisible(true)}>Show</button>
      {isVisible && <HeavyComponent />}
    </main>
  );
}

// Custom metadata for each file example:
// export const metadata: Metadata = {
//   title: '...'
// }

// To generate metadata dyncamically (for a product):
// export async function generateMetadata(): Promise<Metadata> {
//   const product = await fetch('');

//   return {
//     title: 'product.title',
//     description: 'product.description',
//   };
// }
