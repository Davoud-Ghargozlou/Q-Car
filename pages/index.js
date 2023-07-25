import CarsPage from '@/components/templates/CarsPage';
import cars from '@/data/cars';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <div>
        <CarsPage data={cars} />
      </div>
    </>
  );
}
