import carsData from '../../data/cars';
import CarsList from '@/components/templates/CarsList';

function Sport() {
  const sportCars = carsData.filter((car) => car.category === 'sport');
  return <CarsList data={sportCars} />;
}

export default Sport;
