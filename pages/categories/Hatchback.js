import carsData from '../../data/cars';
import CarsList from '@/components/templates/CarsList';

function Hatchback() {
  const hatchbackCars = carsData.filter((car) => car.category === 'hatchback');
  return <CarsList data={hatchbackCars} />;
}

export default Hatchback;
