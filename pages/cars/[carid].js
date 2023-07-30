import { useRouter } from 'next/router';
import carsData from '../../data/cars';
import CarDetails from '@/components/templates/carDetails';

function CarDetail() {
  const router = useRouter();
  const { carid } = router.query;
  // console.log(carid);
  const carDetails = carsData[carid - 1];
  //   console.log(carDetails);
  return <CarDetails {...carDetails} />;
}

export default CarDetail;
