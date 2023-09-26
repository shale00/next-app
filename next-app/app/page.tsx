import Image from 'next/image';
import beach from '@/public/images/20220728_171126.jpg';
import Link from 'next/link';
import ProductCard from './components/ProductCard';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className='relative h-screen'>
      <h1>Hello{session && <span>, {session.user!.name}!</span>}</h1>
      <Link href='/users'>Users</Link>
      <ProductCard></ProductCard>

      {/* <Image
        src='https://res.cloudinary.com/dujewkz0r/image/upload/v1695337125/hjdmnpw9p555jsrbueig.jpg'
        alt='beach'
        fill
        className='object-cover'
        
        quality={100}
      /> */}
    </main>
  );
}
