import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByRegion } from 'service/countryApi';

export const useFetch = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useSearchParams();
  const region = search.get('region');
  useEffect(() => {
    if (!region) return;
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetchByRegion(region);
        setCountries(response);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [region]);
  const heandleSubmit = valua => {
    setSearch({ region: valua });
  };
  return { countries, isLoading, error, heandleSubmit };
};
