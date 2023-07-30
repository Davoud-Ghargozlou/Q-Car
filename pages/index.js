import AllButton from '@/components/module/AllButton';
import SearchBar from '@/components/module/SearchBar';
import Categories from '@/components/module/categories';
import CarsPage from '@/components/templates/CarsPage';
import carsData from '@/data/cars';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Index() {
  const cars = carsData.slice(0, 3);
  return (
    <>
      <div>
        <SearchBar />
        <Categories />
        <AllButton />
        <CarsPage data={cars} />
      </div>
    </>
  );
}
