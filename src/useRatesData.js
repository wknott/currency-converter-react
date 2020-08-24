import { useState, useEffect } from "react";
import axios from "axios";

export const useRatesData = () => {
  const [rates, setRates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("https://api.exchangeratesapi.io/latest?base=PLN");
        const rates = Object.keys(response.data.rates).map(code => ({ code, rate: response.data.rates[code] }));
        setRates(rates);
        setDate(response.data.date);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    setInterval(getData, 1000);
  }, []);

  return [rates, loading, date, error]
}
