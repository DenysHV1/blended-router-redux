import {
  Container,
  CountryList,
  Heading,
  Loader,
  SearchForm,
  Section,
} from 'components';
import { useFetch } from 'hoocks';

const SearchCountry = () => {
  const { countries, isLoading, error, heandleSubmit } = useFetch();
  return (
    <Section>
      <Container>
        <SearchForm onSubmit={heandleSubmit} />
        {error && <Heading title="Something went wrong!" bottom />}
        {isLoading && <Loader />}
        {countries.length > 0 && <CountryList countries={countries} />}
      </Container>
    </Section>
  );
};

export default SearchCountry;
