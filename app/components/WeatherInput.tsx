import { KeyboardEvent } from "react";
import { CiSearch } from "react-icons/ci";

interface WeatherInputProps {
  setCity: (city: string) => void;
  handleKeyPress: (event: KeyboardEvent<HTMLInputElement>) => void;
  getWeather: () => void;
  loading: boolean;
}

function WeatherInput({
  setCity,
  handleKeyPress,
  getWeather,
  loading,
}: WeatherInputProps) {
  return (
    <div className="flex justify-between space-x-4 items-center">
      <input
        className="w-full p-3 rounded-2xl focus:outline-none text-black shadow-xl"
        placeholder="Cidade"
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKeyPress}
        disabled={loading}
      />
      <CiSearch
        className="w-8 h-8 hover:cursor-pointer"
        onClick={getWeather}
        aria-disabled={loading}
      />
    </div>
  );
}

export { WeatherInput };
