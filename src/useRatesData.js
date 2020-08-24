import { useState, useEffect } from "react";
import axios from "axios";

export const useRatesData = () => {
  const [rates, setRates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("https://api.exchangeratesapi.io/latest?base=PLN");
        const rates = Object.keys(response.data.rates).map(code => ({ code, rate: response.data.rates[code] }));
        console.log(rates);
        await setRates(rates);
        await setLoading(false);
        await setDate(response.data.date);
      } catch (error) {
        console.error(error)
      }
    })()
  }, []);

  return [rates, loading, date]
}
