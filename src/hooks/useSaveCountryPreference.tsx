import React from "react";

const useSaveCountryPreference = (country: string) => {
    React.useEffect(() => {
        if (!country) {
            return;
        }
        localStorage.setItem('countryPreference', country);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}

export default useSaveCountryPreference;