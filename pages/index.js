import { useEffect, useRef, useState } from "react";
import Seo from "./components/Seo";
import Dust from "./Dust";
export default function Home() {
  /*
  const [weatherData, setWeatherData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=37.5637584&lon=126.9975517&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
      );
      const result = await response.json();
      setWeatherData(result);
      setLoading(false);
    }
    getData();
  }, []);
*/
  /*
  useEffect(() => {
    if (loading === false) {
      console.log(weatherData.weather[0].main);
      console.log(weatherData.main.temp);
      console.log(weatherData.wind.speed);
    }
  }, [loading]);
*/
  return (
    <div className="flex bg-gray-100 w-[100%] h-[100vh]">
      <Seo title="홈" />
      <Dust />
    </div>
  );
}
