import React from "react";
import { countriesLookup } from "../constants";

const useCountry = () => {
  React.useEffect(() => {
    const preference = localStorage.getItem('countryPreference');
    if (preference && Object.values(countriesLookup).includes(preference)) {
      const country = Object.values(countriesLookup).find((value) => value === preference);
      window.location.replace(`/${country}`);
    }
  }, []);
};

export default useCountry;