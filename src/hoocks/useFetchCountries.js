import { useEffect, useState } from "react"
import { getCountries } from "service/countryApi";

export const useFetchCountries = () => {
	const [countries, setCountries] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true)
			try {
				const response = await getCountries()
				setCountries(response)
			} catch (error) {
				setError(error)
			}finally{
				setIsLoading(false)
			}
		}
		fetchData()
	}, [])
  return {countries, isLoading, error}
}