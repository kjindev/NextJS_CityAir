import { useEffect, useState } from "react";
import Seo from "./components/Seo";

export default function Parking() {
  const [data, setData] = useState();

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `http://openapi.seoul.go.kr:8088/${process.env.NEXT_PUBLIC_API_KEY}/json/GetParkInfo/1/5/`
      );
      const result = await response.json();
      setData(result);
      console.log(result);
    }
    getData();
  }, []);

  return (
    <div className="pt-[50px]">
      <Seo title="주차" />
      <div> Hello</div>
    </div>
  );
}
