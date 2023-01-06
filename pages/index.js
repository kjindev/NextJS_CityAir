import { useEffect, useLayoutEffect, useRef } from "react";

export default function Home() {
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `http://openAPI.seoul.go.kr:8088/${process.env.NEXT_PUBLIC_API_KEY}/json/RealtimeCityAir/1/25/`
      );
      const result = await response.json();
      //console.log(result.RealtimeCityAir.row);
    }
    getData();
  });
  const objectRef = useRef();
  /* useLayoutEffect(() => {
    if (
      objectRef.current.contentWindow.document.getElementById("CD11110") !==
      null
    ) {
      console.log(
        objectRef.current.contentWindow.document.getElementById("CD11110")
      );
    }
  }, [objectRef.current]);
*/
  return (
    <div>
      <div>서울시 실시간 대기환경 정보</div>
      <div>
        <object
          data="seoul.svg"
          type="image/svg+xml"
          ref={objectRef}
          onClick={(event) => console.log(event.target)}
        ></object>
      </div>
    </div>
  );
}
