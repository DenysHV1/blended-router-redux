import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useFetchCountries } from 'hoocks';
const Home = () => {
  const { countries, isLoading, error } = useFetchCountries();
  console.log(countries);

  return (
    <Section>
      <Container>
        {error && <Heading title="Something went wrong!" bottom />}
        {isLoading && <Loader />}
        {countries.length > 0 && <CountryList countries={countries}/>}
      </Container>
    </Section>
  );
};

export default Home;
