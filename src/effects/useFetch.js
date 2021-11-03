import { useEffect } from 'react';

export default function useFetch(callback) {
  // const [loading, setLoading] = useState(false);
  useEffect(() => {
    // setLoading(true);
    callback();
    // setLoading(false);
  }, [callback]);
}
