import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
      const [data, setData] = useState({});

      useEffect(() => {
            let url = `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`;
            fetch(url)
                  .then((response) => response.json())
                  .then((response) => setData(response[currency]));
      }, [currency]);

      return data;
}

export default useCurrencyInfo;
