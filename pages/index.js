import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `http://openAPI.seoul.go.kr:8088/${process.env.NEXT_PUBLIC_API_KEY}/json/RealtimeCityAir/1/25/`
      );
      const result = await response.json();
      console.log(result.RealtimeCityAir.row);
    }
    getData();
  });
  return (
    <div>
      <object
        data="seoul.svg"
        type="image/svg+xml"
        onMouseDown={(event) => console.log(event.target)}
      ></object>
    </div>
  );
}
