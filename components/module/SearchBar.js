import { useRouter } from 'next/router';
import styles from './SearchBar.module.css';
import { useState } from 'react';

export default function SearchBar() {
  const router = useRouter();
  const [min, setmin] = useState('');
  const [max, setmax] = useState('');
  const searchHandler = () => {
    if (min && max) {
      router.push(`/filter/${min}/${max}`);
    } else {
      alert('Please Enter minimum and maximum price!');
    }
  };
  return (
    <div className={styles.container}>
      <div>
        <input
          placeholder="Inter min-price"
          value={min}
          onChange={(e) => setmin(e.target.value)}
        />
        <input
          placeholder="Inter max-price"
          value={max}
          onChange={(e) => setmax(e.target.value)}
        />
      </div>
      <button onClick={searchHandler}>Search</button>
    </div>
  );
}
