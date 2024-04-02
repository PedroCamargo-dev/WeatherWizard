import Image from "next/image";
import { TbWind } from "react-icons/tb";
import { WiHumidity } from "react-icons/wi";
import { IMain, IWind, Weather } from "../interfaces/IWeather";

interface WeatherInfoProps {
  weather: {
    base: string;
    name: string;
    main: IMain;
    weather: Weather[];
    wind: IWind;
  };
}

function WeatherInfo({ weather }: WeatherInfoProps) {
  return (
    <div className="flex justify-center items-center text-center flex-col space-y-6 h-full w-full">
      <div className="flex justify-center items-center">
        <span className="font-bold text-2xl">
          {weather?.name}, {parseInt(weather.main.temp.toString())}º C
        </span>
      </div>
      <span className="flex items-center space-x-4">
        <p>{weather.weather[0].description}</p>
        <Image
          alt="asd"
          src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}.png`}
          width={32}
          height={32}
        />
      </span>
      <div className="flex w-full justify-between">
        <span className="font-medium text-lg flex items-center space-x-2">
          <p>{parseInt(weather.main.humidity.toString())}</p>
          <WiHumidity size={32} />
        </span>
        <span className="font-medium text-lg flex items-center space-x-2">
          <TbWind size={24} /> <p>{weather.wind.speed} km/h</p>
        </span>
      </div>
    </div>
  );
}

export { WeatherInfo };
