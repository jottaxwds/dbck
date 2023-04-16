import React from "react";
import { countriesLookup } from "../constants";

const useCountry = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    const preference = localStorage.getItem('countryPreference');
    if (preference && Object.values(countriesLookup).includes(preference)) {
      const country = Object.values(countriesLookup).find((value) => value === preference);
      window.location.replace(`/${country}`);
      return;
    }
    setIsLoading(false);
  }, []);

  return { isLoading };
};

export default useCountry;