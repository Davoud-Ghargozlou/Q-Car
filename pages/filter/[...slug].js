import carsData from '@/data/cars';
import { useRouter } from 'next/router';
import CarsList from '@/components/templates/CarsList';

export default function FilteredCards() {
  const router = useRouter();
  const [min, max] = router.query.slug || [];
  //   console.log(filters);
  const filteredData = carsData.filter((i) => i.price > min && i.price < max);
  if (!filteredData.length) return <h3>Not Found</h3>;
  return <CarsList data={filteredData} />;
}
