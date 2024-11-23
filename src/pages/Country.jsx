import {
  Container,
  CountryInfo,
  GoBackBtn,
  Heading,
  Loader,
  Section,
} from 'components';
import { useFetchCountry } from 'hoocks';
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';

const Country = () => {
  const { country, isLoading, error } = useFetchCountry();
  const location = useLocation();
  console.log(location);
  const goBack = useRef(location?.state ?? '/');
  return (
    <Section>
      <Container>
        <GoBackBtn path={goBack.current}>Go back</GoBackBtn>
        {error && <Heading title="Something went wrong!" bottom />}
        {isLoading && <Loader />}
        {country && <CountryInfo {...country} />}
      </Container>
    </Section>
  );
};

export default Country;
