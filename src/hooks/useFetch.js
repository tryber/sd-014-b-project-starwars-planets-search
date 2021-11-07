import React, { useState } from 'react';

const useFetchs = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const request = React.useCallback(async (url) => {
    let response;
    let json;
    try {
      setError(null);
      setLoading(true);
      response = await fetch(url);
      json = await response.json();
      if (response.ok === false) throw new Error(json.message);
    } catch (err) {
      json = null;
      setError(err.message);
    } finally {
      setLoading(false);
      setData(json);
    }
  }, []);

  return { data, loading, error, request };
};

export default useFetchs;