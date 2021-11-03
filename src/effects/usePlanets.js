import { useEffect } from 'react';

export default function useFetch(callback) {
  useEffect(() => {
    callback();
  }, [callback]);
}
