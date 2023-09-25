import Image from 'next/image';
import beach from '@/public/images/20220728_171126.jpg';

export default async function Home() {
  return (
    <main className='relative h-screen'>
      <Image
        src='https://res.cloudinary.com/dujewkz0r/image/upload/v1695337125/hjdmnpw9p555jsrbueig.jpg'
        alt='beach'
        fill
        className='object-cover'
        
        quality={100}
      />
    </main>
  );
}
