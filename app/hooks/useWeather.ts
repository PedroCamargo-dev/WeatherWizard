import { useState } from "react";
import { IWeather } from "../interfaces/IWeather";

const useWeather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<IWeather>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getWeather = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pt_br&units=metric&appid=${process.env.NEXT_PUBLIC_API_KEY_WEATHER}`
      );
      const data = await response.json();
      if (data.cod === 401) {
        setError("API Key inválida!");
      } else if (data.cod === "404") {
        setError("Cidade não encontrada!");
      } else if (data.cod === "400") {
        setError("Cidade não informada!");
      }

      setWeather(data);
    } catch (error) {
      setError("Erro ao buscar dados!");
    }
    setLoading(false);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      getWeather();
    }
  };

  return { setCity, weather, loading, error, getWeather, handleKeyPress };
};

export { useWeather };
