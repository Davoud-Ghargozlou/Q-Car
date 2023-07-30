import CarsPage from '@/components/templates/CarsPage';
import carsData from '../../data/cars';
import SearchBar from '@/components/module/SearchBar';
import Categories from '@/components/module/Categories';

function Details() {
  return (
    <div>
      <SearchBar />
      <Categories />
      <CarsPage data={carsData} />
    </div>
  );
}

export default Details;
