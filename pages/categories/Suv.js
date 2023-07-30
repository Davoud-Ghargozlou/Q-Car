import carsData from '../../data/cars';
import CarsList from '@/components/templates/CarsList';

function Suv() {
  const suvCars = carsData.filter((car) => car.category === 'suv');
  return <CarsList data={suvCars} />;
}

export default Suv;
