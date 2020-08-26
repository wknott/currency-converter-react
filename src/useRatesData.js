import { useState, useEffect } from "react";
import axios from "axios";

export const useRatesData = () => {
  const [ratesData, setRatesData] = useState(
    {
      rates: [],
      loading: true,
      date: null,
      error: null,
    }
  );

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("https://api.exchangeratesapi.io/latest?base=PLN");
        const rates = Object.keys(response.data.rates).map(code => ({ code, rate: response.data.rates[code] }));
        setRatesData(
          {
            rates,
            loading: false,
            date: response.data.date,
            error: null,
          }
        );
      } catch (error) {
        setRatesData(
          {
            rates: [],
            loading: false,
            date: null,
            error: true,
          }
        );
      }
    }
    setTimeout(getData, 1000);
  }, []);

  return ratesData;
}
