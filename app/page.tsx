'use client';
// import { Metadata } from 'next';
import { useState } from 'react';


export default function Home() {

  return (
    <main>
      <h1>Hello World</h1>
      <button onClick={async () => {
        const _ = (await import('lodash')).default;

        const users = [
          {name: 'c'},
          {name: 'b'},
          {name: 'a'}
        ];

       const sorted =  _.orderBy(users, ['name'])
       console.log('sorted array of users', sorted);
      }}>Show</button>
      
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
