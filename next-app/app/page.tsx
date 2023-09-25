import Image from "next/image";
import beach from '@/public/images/20220728_171126.jpg';


export default async function Home() {

  return (
    <main>
      <Image src={beach} alt='beach' />
      
    </main>
  );
}
