import { Metadata } from 'next';

export default async function Home() {
  return (
    <main>
      <h1>Hello World</h1>
    </main>
  );
}

// Custom metadata for each file example:
// export const metadata: Metadata = {
//   title: '...'
// }

// To generate metadata dyncamically (for a product):
export async function generateMetadata(): Promise<Metadata> {
  const product = await fetch('');

  return {
    title: 'product.title',
    description: 'product.description',
  };
}
