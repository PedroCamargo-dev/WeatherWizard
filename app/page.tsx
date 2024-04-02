"use client";

import { CgSpinnerTwoAlt } from "react-icons/cg";
import { useWeather } from "./hooks/useWeather";
import { WeatherInfo } from "./components/WeatherInfo";
import { WeatherInput } from "./components/WeatherInput";

export default function HomeWeather() {
  const { setCity, weather, loading, error, getWeather, handleKeyPress } =
    useWeather();

  return (
    <main className="flex w-full h-screen items-center justify-center bg-[url('/sky.jpg')] bg-cover bg-no-repeat">
      <div className="fixed backdrop-blur-lg w-full h-screen drop-shadow-2xl"></div>
      <div className="rounded-2xl backdrop-blur-xl w-80 h-[26rem] drop-shadow-2xl shadow-2xl">
        <div className="flex flex-col space-y-4 items-center h-full p-6">
          <div className="flex flex-col space-y-4 items-center">
            <h1 className="text-3xl font-bold">WeatherWizard</h1>
            <WeatherInput
              setCity={setCity}
              handleKeyPress={handleKeyPress}
              getWeather={getWeather}
              loading={loading}
            />
          </div>
          {loading && <CgSpinnerTwoAlt className="animate-spin w-8 h-8" />}
          {error && !loading && weather?.base !== "stations" && <p>{error}</p>}
          {weather && weather?.base === "stations" && !loading && (
            <WeatherInfo weather={weather} />
          )}
        </div>
      </div>
    </main>
  );
}
