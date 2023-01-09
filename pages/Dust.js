import { useEffect, useRef, useState } from "react";
import {
  BsEmojiSmile,
  BsEmojiNeutral,
  BsEmojiFrown,
  BsEmojiDizzy,
} from "react-icons/bs";
import { AiOutlineBarChart } from "react-icons/ai";

export default function Dust() {
  const [dataIndex, setDataIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const dataRef = useRef();
  const [data, setData] = useState();

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `http://openAPI.seoul.go.kr:8088/${process.env.NEXT_PUBLIC_API_KEY}/json/RealtimeCityAir/1/25/`
      );
      const result = await response.json();
      setData(result.RealtimeCityAir.row);
    }
    getData();
  }, []);

  useEffect(() => {
    if (loading === false) {
      for (let i = 0; i < 25; i++) {
        dataRef.current.children[0].children[i + 1].classList.remove(
          "styleColor-0",
          "styleColor-1",
          "styleColor-2",
          "styleColor-3"
        );
        if (data[i].PM10 > 0 && data[i].PM10 <= 30) {
          dataRef.current.children[0].children[i + 1].classList.add(
            "styleColor-0"
          );
        } else if (data[i].PM10 > 30 && data[i].PM10 <= 80) {
          dataRef.current.children[0].children[i + 1].classList.add(
            "styleColor-1"
          );
        } else if (data[i].PM10 > 80 && data[i].PM10 <= 150) {
          dataRef.current.children[0].children[i + 1].classList.add(
            "styleColor-2"
          );
        } else if (data[i].PM10 > 150) {
          dataRef.current.children[0].children[i + 1].classList.add(
            "styleColor-3"
          );
        }
      }
    }
  }, [loading]);

  useEffect(() => {
    if (data !== undefined) {
      setLoading(false);
    }
  }, [data]);

  const handleMapClick = (event) => {
    for (let i = 0; i < 25; i++) {
      if (event.target.dataset.name === data[i].MSRSTE_NM) {
        setDataIndex(i);
      }
    }
  };

  const handleBtnClick = (event) => {
    if (event.target.innerText === "미세먼지 농도" && loading === false) {
      for (let i = 0; i < 25; i++) {
        dataRef.current.children[0].children[i + 1].classList.remove(
          "styleColor-0",
          "styleColor-1",
          "styleColor-2",
          "styleColor-3"
        );
        if (data[i].PM10 > 0 && data[i].PM10 <= 30) {
          dataRef.current.children[0].children[i + 1].classList.add(
            "styleColor-0"
          );
        } else if (data[i].PM10 > 30 && data[i].PM10 <= 80) {
          dataRef.current.children[0].children[i + 1].classList.add(
            "styleColor-1"
          );
        } else if (data[i].PM10 > 80 && data[i].PM10 <= 150) {
          dataRef.current.children[0].children[i + 1].classList.add(
            "styleColor-2"
          );
        } else if (data[i].PM10 > 150) {
          dataRef.current.children[0].children[i + 1].classList.add(
            "styleColor-3"
          );
        }
      }
    } else if (
      event.target.innerText === "초미세먼지 농도" &&
      loading === false
    ) {
      for (let i = 0; i < 25; i++) {
        dataRef.current.children[0].children[i + 1].classList.remove(
          "styleColor-0",
          "styleColor-1",
          "styleColor-2",
          "styleColor-3"
        );
        if (data[i].PM25 > 0 && data[i].PM25 <= 15) {
          dataRef.current.children[0].children[i + 1].classList.add(
            "styleColor-0"
          );
        } else if (data[i].PM25 > 15 && data[i].PM25 <= 35) {
          dataRef.current.children[0].children[i + 1].classList.add(
            "styleColor-1"
          );
        } else if (data[i].PM25 > 35 && data[i].PM25 <= 75) {
          dataRef.current.children[0].children[i + 1].classList.add(
            "styleColor-2"
          );
        } else if (data[i].PM25 > 75) {
          dataRef.current.children[0].children[i + 1].classList.add(
            "styleColor-3"
          );
        }
      }
    } else if (event.target.innerText === "오존 농도" && loading === false) {
      for (let i = 0; i < 25; i++) {
        dataRef.current.children[0].children[i + 1].classList.remove(
          "styleColor-0",
          "styleColor-1",
          "styleColor-2",
          "styleColor-3"
        );
        if (data[i].O3 > 0 && data[i].O3 <= 0.03) {
          dataRef.current.children[0].children[i + 1].classList.add(
            "styleColor-0"
          );
        } else if (data[i].O3 > 0.03 && data[i].O3 <= 0.09) {
          dataRef.current.children[0].children[i + 1].classList.add(
            "styleColor-1"
          );
        } else if (data[i].O3 > 0.09 && data[i].O3 <= 0.15) {
          dataRef.current.children[0].children[i + 1].classList.add(
            "styleColor-2"
          );
        } else if (data[i].O3 > 0.15) {
          dataRef.current.children[0].children[i + 1].classList.add(
            "styleColor-3"
          );
        }
      }
    }
  };

  return (
    <div className="pl-[5%] w-[95%] bg-gray-50">
      <div className="text-5xl"></div>
      <div className="flex justify-center">
        <div
          onClick={handleMapClick}
          ref={dataRef}
          className="w-[60%] drop-shadow-xl"
        >
          <svg height="656" width="800" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="dropshadow">
                <feGaussianBlur in="SourceAlpha" stdDeviation="7" />
                <feOffset dx="0" dy="0" result="offsetblur" />
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="dropshadow2">
                <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" />
                <feOffset dx="1" dy="1" result="offsetblur" />
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path
              id="CD11140"
              data-name="중구"
              className="style"
              d="M 477 316 l 0 9 5 5 -1 3 -4 5 -4 5 -5 4 -4 7 -3 4 -4 3 -4 10 -2 -1 -3 -7 -2 -5 -2 1 -1 0 -2 -1 -3 1 0 0 -3 1 -4 2 -5 -5 -6 -3 -10 -3 -4 -1 -3 -1 -2 2 -4 -1 -3 -1 -9 0 -2 2 -4 3 0 -7 1 -4 -2 -2 0 -1 6 -3 6 -4 -1 -2 -2 -5 2 -3 4 -3 9 -1 10 1 9 2 9 -1 8 -1 9 -1 8 0 11 -1 z "
            />
            <path
              id="CD11110"
              data-name="종로구"
              className="style"
              d="M 455 297 l 4 -2 1 0 1 0 3 -1 4 5 7 3 2 6 0 8 -11 2 -11 1 -8 0 -9 1 -8 1 -9 1 -9 -2 -10 -1 -9 1 -4 3 -2 3 -6 -6 -3 -4 -5 -6 -4 -5 -2 -5 5 -3 0 -6 0 -10 0 -9 1 -9 -3 -4 -2 0 -2 0 -1 -4 0 -9 -5 -9 1 -10 -1 -11 -1 -6 2 -6 5 -2 7 -3 10 -2 2 -1 3 0 1 0 4 -2 8 -1 3 6 4 1 3 8 3 10 1 6 3 5 0 9 0 7 -1 5 -6 3 -6 4 -1 5 6 4 5 3 5 4 9 1 10 0 4 4 3 4 5 10 1 3 z "
            />
            <path
              id="CD11170"
              data-name="용산구"
              className="style"
              d="M 394 349 l 3 1 4 1 2 -2 3 1 4 1 10 3 6 3 5 5 4 -2 3 -1 0 0 3 -1 2 1 1 0 2 -1 2 5 3 7 2 1 5 9 6 2 2 9 -4 5 -4 5 -5 6 -3 4 -5 4 -5 5 -5 4 -5 3 -8 8 -5 8 -7 3 -7 -1 -10 -4 -3 -1 -6 -3 -6 -5 -5 -3 -6 -3 -9 -3 1 -5 0 -10 -2 -8 -6 -11 5 -2 4 -1 5 -4 5 -6 2 -5 3 -6 6 -5 0 -3 -2 -3 4 -3 2 -2 z "
            />
            <path
              id="CD11380"
              data-name="은평구"
              className="style"
              d="M 368 148 l 3 2 1 3 2 11 2 9 2 8 3 5 0 5 -3 3 -5 5 -7 3 -5 2 -2 6 1 6 1 11 -1 10 -7 6 -4 3 -4 7 0 7 -5 2 -9 4 -4 4 -3 5 -3 7 -5 4 -3 4 -8 -1 0 -3 -1 0 -3 -2 -3 2 -4 5 -4 5 -5 5 -1 5 -9 -8 -12 -9 -1 -2 -6 -6 -4 -5 6 -9 1 2 -2 5 2 5 8 0 9 -1 3 -6 1 -4 2 -5 -1 -9 2 -8 -2 -10 2 -10 4 -7 3 -4 2 -6 2 -9 -1 -10 5 -4 0 -1 -1 -5 1 -4 1 -4 0 -5 -5 -3 -5 -5 0 -1 1 1 5 3 6 4 11 -1 10 -3 3 -3 4 -2 9 -4 4 -5 3 -5 5 -2 6 -2 3 4 z "
            />
            <path
              id="CD11410"
              data-name="서대문구"
              className="style"
              d="M 365 255 l 1 4 2 0 2 0 3 4 -1 9 0 9 0 10 0 6 -5 3 2 5 4 5 5 6 3 4 6 6 2 5 1 2 -6 4 -6 3 -3 3 -8 0 -10 1 -11 1 -7 2 -10 -4 -7 -6 -2 -10 -6 -3 -6 -2 -4 -2 -8 -4 -5 -5 -7 -5 1 -5 5 -5 4 -5 4 -5 3 -2 3 2 1 0 0 3 8 1 3 -4 5 -4 3 -7 3 -5 4 -4 9 -4 5 -2 0 -7 4 -7 4 -3 7 -6 5 9 z "
            />
            <path
              id="CD11440"
              data-name="마포구"
              className="style"
              d="M 263 289 l 12 9 9 8 7 5 5 5 8 4 4 2 6 2 6 3 2 10 7 6 10 4 7 -2 11 -1 10 -1 8 0 3 -3 0 1 2 2 -1 4 0 7 2 3 0 3 -6 5 -3 6 -2 5 -5 6 -5 4 -4 1 -5 2 -7 -4 -5 -4 -5 -3 -5 -2 -4 1 -4 2 -6 -4 -11 0 -12 0 -5 -2 -6 -7 -6 -6 -8 -4 -8 -4 -5 -4 -5 -3 -11 -7 -8 -5 -4 -2 -6 -4 -4 -4 -4 -3 -6 -6 -1 -3 8 -4 4 -2 4 -2 10 -2 10 -2 3 -2 0 -1 -1 -6 0 -5 4 -5 5 -4 4 5 6 6 z "
            />
            <path
              id="CD11215"
              data-name="광진구"
              className="style"
              d="M 605 315 l 1 1 -1 4 -1 7 -2 9 3 6 4 4 3 -3 9 -1 3 3 -4 10 -2 10 -2 5 -2 4 -4 5 -5 5 -5 4 -11 12 -3 3 -3 2 -8 5 -6 3 -5 1 -5 -1 -5 -1 -6 -2 -12 -5 -7 -4 13 -27 5 -12 3 -5 5 -20 3 -8 4 -5 4 -9 7 1 11 3 9 -3 4 -3 4 -2 z "
            />
            <path
              id="CD11200"
              data-name="성동구"
              className="style"
              d="M 511 315 l 7 4 6 6 4 4 6 5 2 0 15 3 4 0 -5 20 -3 5 -5 12 -3 7 -10 20 -7 -4 -5 -3 -4 -4 -10 -3 -10 0 -7 0 -12 0 -8 4 -2 -9 -6 -2 -5 -9 4 -10 4 -3 3 -4 4 -7 5 -4 4 -5 4 -5 1 -3 -5 -5 0 -9 6 1 11 -1 5 -2 2 -1 6 0 z "
            />
            <path
              id="CD11260"
              data-name="중랑구"
              className="style"
              d="M 621 218 l 5 3 1 6 0 10 2 8 -3 8 -3 5 0 3 3 4 -1 6 -4 2 -5 9 0 5 -4 6 -4 3 -4 5 -3 10 -4 2 -4 3 -9 3 -11 -3 -7 -1 -3 -5 -1 -11 -2 -3 -3 -6 -3 -9 -1 -6 -2 -9 3 -6 2 -5 -2 -10 0 -8 2 -11 6 -3 4 -1 9 -4 9 1 10 1 6 -2 9 -1 z "
            />
            <path
              id="CD11230"
              data-name="동대문구"
              className="style"
              d="M 554 245 l 2 10 -2 5 -3 6 2 9 1 6 3 9 3 6 2 3 1 11 3 5 -4 9 -4 5 -3 8 -4 0 -15 -3 -2 0 -6 -5 -4 -4 -6 -6 -7 -4 -4 -2 -6 0 -2 1 -5 2 -11 1 -6 -1 0 -8 -2 -6 6 -4 6 -5 4 -6 3 -4 4 -5 2 -3 6 -8 4 -2 8 -3 4 -5 7 -1 7 -2 4 -6 7 -2 z "
            />
            <path
              id="CD11290"
              data-name="성북구"
              className="style"
              d="M 455 297 l -3 -2 -1 -3 -5 -10 -3 -4 -4 -4 -10 0 -9 -1 -5 -4 -5 -3 -6 -4 1 -5 6 -4 6 -3 1 -5 0 -7 0 -9 -3 -5 -1 -6 -3 -10 -3 -8 -4 -1 -3 -6 9 -5 4 -3 4 1 5 4 6 4 3 2 4 5 5 5 7 3 5 2 -1 3 0 0 0 2 1 3 5 6 9 3 4 3 5 3 8 -1 6 4 9 -4 4 -6 4 -4 4 -4 4 -6 4 -3 5 4 4 5 5 5 5 4 9 0 9 -2 -2 11 0 8 -7 1 -7 2 -4 6 -7 2 -7 1 -4 5 -8 3 -4 2 -6 8 -2 3 -4 5 -3 4 -4 6 -6 5 -6 4 -7 -3 -4 -5 -3 1 -1 0 -1 0 z "
            />
            <path
              id="CD11320"
              data-name="도봉구"
              className="style"
              d="M 463 157 l -2 -4 0 -4 1 -5 2 -8 2 -9 2 -6 2 -4 -1 -2 -3 -5 -4 -7 -4 -5 -3 -7 -1 -9 0 -8 4 -11 8 -8 10 1 9 0 3 4 1 6 3 5 9 -1 4 -2 4 -1 4 4 5 0 5 13 0 9 -1 5 -4 12 0 8 3 9 2 9 3 10 1 9 2 7 -2 13 -3 -4 -2 -3 -2 3 -5 5 -1 6 -4 9 -1 7 -6 -6 -3 -7 -5 -4 -2 -6 -7 -6 -3 -3 -7 -5 -3 -2 -2 1 -3 0 z "
            />
            <path
              id="CD11305"
              data-name="강북구"
              className="style"
              d="M 448 87 l 2 0 1 0 0 0 4 4 3 7 4 5 4 7 3 5 1 2 -2 4 -2 6 -2 9 -2 8 -1 5 0 4 2 4 5 3 3 0 2 -1 3 2 7 5 3 3 7 6 2 6 5 4 3 7 6 6 7 6 3 6 -4 3 -4 6 -4 4 -4 4 -4 6 -9 4 -6 -4 -8 1 -5 -3 -4 -3 -9 -3 -4 -6 -2 -3 0 -2 0 0 1 -3 -5 -2 -7 -3 -5 -5 -4 -5 -3 -2 -6 -4 -5 -4 -4 -1 3 -4 0 -6 -3 -4 1 -3 2 -3 -2 -4 -3 -7 -4 -9 4 -1 7 -7 4 -8 6 -4 2 -5 0 -13 -1 -7 2 -5 6 -5 7 -2 z "
            />
            <path
              id="CD11350"
              data-name="노원구"
              className="style"
              d="M 619 183 l 1 7 -3 7 -6 5 -3 7 1 8 -9 1 -6 2 -10 -1 -9 -1 -9 4 -4 1 -6 3 -9 2 -9 0 -5 -4 -5 -5 -4 -5 -5 -4 -3 -6 -7 -6 1 -7 4 -9 1 -6 5 -5 2 -3 2 3 3 4 2 -13 -2 -7 -1 -9 -3 -10 -2 -9 -3 -9 0 -8 4 -12 1 -5 0 -9 6 -4 5 -2 4 -4 4 -6 6 0 3 1 4 0 5 -1 4 -2 7 -1 5 8 5 5 5 0 3 -1 5 4 -3 10 -2 7 -1 2 1 3 3 7 2 8 -2 11 -2 5 -3 4 0 4 2 6 1 6 0 10 3 5 7 0 5 -2 5 0 4 4 4 3 z "
            />
            <path
              id="CD11500"
              data-name="강서구"
              className="style"
              d="M 134 254 l 3 3 6 4 4 4 4 6 4 3 6 4 5 4 6 4 5 3 4 4 6 5 3 2 6 5 9 6 1 3 6 6 4 3 4 4 6 4 4 2 8 5 11 7 -4 8 3 9 -8 1 -8 -2 -5 -4 -5 -2 -2 8 0 10 1 9 0 7 -1 8 -7 2 -11 1 -7 2 -12 -1 -3 -4 -3 -7 -3 -9 -2 -6 -5 -5 -1 -6 -5 2 -3 7 -10 2 -9 -1 -7 -4 -3 -2 0 1 -9 5 -2 5 -6 2 -2 -6 -4 -5 -5 -4 -7 -2 -9 -2 -7 -4 -4 1 -1 -2 -2 -2 1 -1 -3 -2 -2 -7 8 -4 2 -5 6 -2 -1 -5 -2 -5 0 -3 2 1 0 1 5 -3 3 -3 -1 -2 2 -1 1 -5 8 -4 1 -1 1 1 2 -5 2 -6 1 3 1 2 2 -9 2 -4 2 2 1 -4 5 -5 0 -6 -3 -5 -1 -6 0 -5 3 -4 4 -6 4 2 z "
            />
            <path
              id="CD11530"
              data-name="구로구"
              className="style"
              d="M 245 419 l 6 7 4 4 5 2 4 4 4 9 -1 9 2 9 1 6 1 5 3 7 5 5 4 3 -3 5 -4 5 -10 1 -7 -3 -4 -5 -5 -4 -5 -3 -2 0 -2 1 -3 -5 -4 -2 3 -2 0 -1 -3 0 -3 2 -1 -5 -2 -6 -2 1 -1 1 1 1 -4 4 -5 3 -4 5 -4 4 -6 6 -9 2 -2 4 -1 10 -6 0 -8 -1 -5 -4 -4 0 -4 2 -9 0 -5 1 -8 1 2 -4 4 -5 2 -8 2 -5 3 -4 -2 -5 -3 -1 -8 -5 -1 -7 6 -3 4 -6 2 -4 2 -6 5 -6 4 2 4 4 4 5 3 1 5 -1 4 -3 7 -3 4 -4 8 -2 8 1 4 5 6 2 10 2 4 2 1 1 2 -6 1 -8 4 -6 2 -7 z "
            />
            <path
              id="CD11560"
              data-name="영등포구"
              className="style"
              d="M 249 345 l 5 3 5 4 8 4 8 4 6 6 6 7 5 2 12 0 11 0 6 4 4 -2 4 -1 5 2 5 3 5 4 7 4 6 11 2 8 0 10 -1 5 -11 2 -8 1 -9 1 -8 2 -2 5 -3 8 -2 3 -3 10 -2 8 -9 2 -3 1 -4 7 -4 5 -3 5 -4 6 -4 -3 -5 -5 -3 -7 -1 -5 -1 -6 -2 -9 1 -9 -4 -9 -4 -4 -5 -2 -4 -4 -6 -7 2 -12 3 -4 5 -4 8 -3 0 -2 -2 -2 2 -3 -4 -9 -4 -8 -2 -5 -5 -5 -3 -9 z "
            />
            <path
              id="CD11590"
              data-name="동작구"
              className="style"
              d="M 367 426 l 6 3 5 3 6 5 6 3 3 1 10 4 7 1 -3 4 0 0 4 5 2 8 -2 11 0 6 -1 11 0 8 0 9 -5 -2 -14 0 -3 -2 -5 -4 -6 -10 0 -11 -2 -6 -7 3 -3 1 -2 -2 -7 -3 -9 1 -7 0 -11 -2 -6 -1 -6 7 -6 1 -10 4 -4 3 -2 1 -12 3 4 -6 3 -5 4 -5 4 -7 3 -1 9 -2 2 -8 3 -10 2 -3 3 -8 2 -5 8 -2 9 -1 8 -1 11 -2 z "
            />
            <path
              id="CD11620"
              data-name="관악구"
              className="style"
              d="M 323 470 l 6 1 11 2 7 0 9 -1 7 3 2 2 3 -1 7 -3 2 6 0 11 6 10 5 4 3 2 14 0 5 2 2 8 4 6 3 4 0 11 1 5 -9 4 -7 2 -3 1 -5 4 -5 7 -8 5 -2 7 -1 5 -5 2 -9 2 -9 1 -10 2 -4 2 -2 0 -3 -5 -2 -6 -5 -4 -5 -7 -4 -4 -2 -6 -5 -4 -3 -4 -8 -3 -4 -8 -1 -6 -3 -6 -3 -6 3 -8 -3 -10 -6 -1 -11 1 4 -5 3 -5 12 -3 2 -1 4 -3 10 -4 6 -1 z "
            />
            <path
              id="CD11545"
              data-name="금천구"
              className="style"
              d="M 241 486 l 2 -1 2 0 5 3 5 4 4 5 7 3 10 -1 11 -1 6 1 3 10 -3 8 3 6 3 6 1 6 4 8 8 3 3 4 5 4 2 6 -7 7 -2 5 -3 6 -8 1 -5 4 -4 7 -9 -1 -4 -4 -3 -4 -2 -9 -3 -5 -2 -3 1 -3 -1 -3 -3 -4 -6 -3 -4 -6 -1 -9 -4 -4 -1 -4 2 -2 -2 -3 -3 -5 -4 -6 -2 -4 -4 -9 -3 -8 -1 -4 1 -2 z "
            />
            <path
              id="CD11470"
              data-name="양천구"
              className="style"
              d="M 240 363 l 8 -1 5 5 2 5 4 8 4 9 -2 3 2 2 0 2 -8 3 -5 4 -3 4 -2 12 0 4 -2 7 -4 6 -1 8 -2 6 -1 -1 -4 -2 -10 -2 -6 -2 -4 -5 -8 -1 -8 2 -4 4 -7 3 -4 3 -5 1 -3 -1 -4 -5 -4 -4 -4 -2 -3 -12 2 -9 1 -7 4 -5 0 -4 -4 -4 -4 -6 -2 -11 4 -7 3 -7 5 -2 1 6 5 5 2 6 3 9 3 7 3 4 12 1 7 -2 11 -1 7 -2 1 -8 0 -7 -1 -9 0 -10 2 -8 5 2 5 4 z "
            />
            <path
              id="CD11680"
              data-name="강남구"
              className="style"
              d="M 503 387 l 10 3 4 4 5 3 7 4 7 4 12 5 0 10 0 4 1 13 1 6 1 10 6 2 7 1 6 2 3 2 12 4 5 2 5 3 6 3 5 4 5 5 3 6 3 5 3 5 4 7 2 2 5 10 3 4 4 5 -10 11 -2 6 -4 0 -3 -4 -9 -2 -4 0 0 2 -1 1 -3 3 -11 3 -1 -7 -4 -4 -2 -7 -5 -6 -2 -3 -4 -8 -11 0 -2 2 -5 3 -8 4 -9 2 -6 1 -4 0 -6 2 -3 -5 -7 -13 -4 -9 -1 -3 -5 -5 -6 1 -7 -10 -6 -17 -5 -13 -5 -15 -3 -9 0 -1 -1 -6 -6 -9 -2 3 -1 0 -7 -6 5 -6 4 -5 4 -5 8 -4 12 0 7 0 z "
            />
            <path
              id="CD11650"
              data-name="서초구"
              className="style"
              d="M 460 413 l 1 0 2 -3 6 9 1 6 0 1 3 9 5 15 5 13 6 17 7 10 6 -1 5 5 1 3 4 9 7 13 3 5 6 -2 4 0 6 -1 9 -2 8 -4 5 -3 2 -2 11 0 4 8 2 3 5 6 2 7 4 4 1 7 -5 8 -6 10 0 6 -6 4 -4 4 -5 0 -4 -1 -4 0 -2 6 -2 8 -1 4 -1 2 1 3 -4 0 -10 2 -9 0 -8 0 -7 -4 -4 -6 -5 -5 -4 -2 -5 -4 1 -5 2 -4 -1 -8 0 -5 -2 -4 2 -5 0 -1 -3 -4 -2 -9 -2 -6 -5 0 -2 7 -3 6 -6 4 -8 2 -4 1 -2 0 -6 -3 -3 -3 0 0 -1 -2 -3 -6 -2 -8 -8 -2 -5 3 1 3 0 1 -4 4 -6 3 -4 3 -1 -5 0 -11 -3 -4 -4 -6 -2 -8 0 -9 0 -8 1 -11 0 -6 2 -11 -2 -8 -4 -5 0 0 3 -4 7 -3 5 -8 8 -8 5 -3 5 -4 5 -5 5 -4 3 -4 z "
            />
            <path
              id="CD11710"
              data-name="송파구"
              className="style"
              d="M 621 374 l 6 2 4 2 4 4 0 8 -2 5 -1 3 0 7 5 2 8 5 5 3 8 4 3 2 5 3 5 2 -4 3 0 6 -3 10 4 5 5 3 10 0 9 3 5 5 -1 4 -2 7 -3 9 -4 3 -5 4 -5 5 -2 6 -3 7 -5 5 -10 0 -6 0 0 8 -4 5 -6 -2 -2 -1 -1 4 -4 -5 -3 -4 -5 -10 -2 -2 -4 -7 -3 -5 -3 -5 -3 -6 -5 -5 -5 -4 -6 -3 -5 -3 -5 -2 -12 -4 -3 -2 -6 -2 -7 -1 -6 -2 -1 -10 -1 -6 -1 -13 0 -4 0 -10 6 2 5 1 5 1 5 -1 6 -3 8 -5 3 -2 3 -3 11 -12 5 -4 5 -5 4 -5 z "
            />
            <path
              id="CD11740"
              data-name="강동구"
              className="style"
              d="M 726 320 l 1 7 3 9 0 9 1 9 1 10 1 5 -1 -1 -5 -1 -3 0 -4 2 -11 0 -8 1 -5 6 -4 5 -4 6 -2 4 -1 8 -4 7 -3 2 1 1 -1 2 -6 7 -1 8 -5 -2 -5 -3 -3 -2 -8 -4 -5 -3 -8 -5 -5 -2 0 -7 1 -3 2 -5 0 -8 -4 -4 -4 -2 -6 -2 -7 0 2 -4 2 -5 2 -10 4 -10 1 -1 4 -6 7 -6 5 -3 6 -3 8 -3 4 -1 5 0 11 0 9 -4 7 -5 8 -6 11 -6 11 0 0 7 3 6 z "
            />

            <text id="LCD11110" className="TEXT" x="399" y="282">
              종로구
            </text>
            <text id="LCD11140" className="TEXT" x="433" y="340">
              중구
            </text>
            <text id="LCD11170" className="TEXT" x="407" y="395">
              용산구
            </text>
            <text id="LCD11200" className="TEXT" x="505" y="356">
              성동구
            </text>
            <text id="LCD11215" className="TEXT" x="577" y="365">
              광진구
            </text>
            <text id="LCD11230" className="TEXT" x="523" y="297">
              동대문구
            </text>
            <text id="LCD11260" className="TEXT" x="589" y="270">
              중랑구
            </text>
            <text id="LCD11290" className="TEXT" x="466" y="258">
              성북구
            </text>
            <text id="LCD11305" className="TEXT" x="459" y="181">
              강북구
            </text>
            <text id="LCD11320" className="TEXT" x="494" y="125">
              도봉구
            </text>
            <text id="LCD11350" className="TEXT" x="560" y="153">
              노원구
            </text>
            <text id="LCD11380" className="TEXT" x="323" y="218">
              은평구
            </text>
            <text id="LCD11410" className="TEXT" x="335" y="305">
              서대문구
            </text>
            <text id="LCD11440" className="TEXT" x="293" y="342">
              마포구
            </text>
            <text id="LCD11470" className="TEXT" x="209" y="421">
              양천구
            </text>
            <text id="LCD11500" className="TEXT" x="156" y="334">
              강서구
            </text>
            <text id="LCD11530" className="TEXT" x="195" y="470">
              구로구
            </text>
            <text id="LCD11545" className="TEXT" x="279" y="537">
              금천구
            </text>
            <text id="LCD11560" className="TEXT" x="295" y="413">
              영등포구
            </text>
            <text id="LCD11590" className="TEXT" x="361" y="455">
              동작구
            </text>
            <text id="LCD11620" className="TEXT" x="353" y="529">
              관악구
            </text>
            <text id="LCD11650" className="TEXT" x="481" y="515">
              서초구
            </text>
            <text id="LCD11680" className="TEXT" x="525" y="464">
              강남구
            </text>
            <text id="LCD11710" className="TEXT" x="624" y="448">
              송파구
            </text>
            <text id="LCD11740" className="TEXT" x="675" y="358">
              강동구
            </text>
          </svg>
        </div>
        {loading === true ? (
          <div>Loading...</div>
        ) : (
          <div className="w-[40%] h-[40vh]">
            <div className="w-[100%] h-[20%] text-center text-3xl">
              {data[dataIndex].MSRSTE_NM}
            </div>
            <div className="flex flex-wrap justify-center w-[100%] h-[100%]">
              <div className="w-[40%] h-[60%] bg-white p-5 rounded-3xl text-center flex flex-col items-center drop-shadow-md m-2">
                <div className="font-bold text-lg">미세먼지</div>
                <div className="mb-5">{data[dataIndex].PM10}㎍/m³</div>
                {data[dataIndex].PM10 > 0 && data[dataIndex].PM10 <= 30 && (
                  <BsEmojiSmile size={50} color="green" />
                )}
                {data[dataIndex].PM10 > 30 && data[dataIndex].PM10 <= 80 && (
                  <BsEmojiNeutral size={50} color="yellow" />
                )}
                {data[dataIndex].PM10 > 80 && data[dataIndex].PM10 <= 150 && (
                  <BsEmojiFrown size={50} color="orange" />
                )}
                {data[dataIndex].PM10 > 150 && (
                  <BsEmojiDizzy size={50} color="red" />
                )}
              </div>
              <div className="w-[40%] h-[60%] bg-white p-5 rounded-3xl text-center flex flex-col items-center drop-shadow-md m-2">
                <div className="font-bold text-lg">초미세먼지</div>
                <div className="mb-5">{data[dataIndex].PM25}㎍/㎥</div>
                {data[dataIndex].PM25 > 0 && data[dataIndex].PM25 <= 15 && (
                  <BsEmojiSmile size={50} color="green" />
                )}
                {data[dataIndex].PM25 > 15 && data[dataIndex].PM25 <= 35 && (
                  <BsEmojiNeutral size={50} color="yellow" />
                )}
                {data[dataIndex].PM25 > 35 && data[dataIndex].PM25 <= 75 && (
                  <BsEmojiFrown size={50} color="orange" />
                )}
                {data[dataIndex].PM25 > 75 && (
                  <BsEmojiDizzy size={50} color="red" />
                )}
              </div>
              <div className="w-[40%] h-[60%] bg-white p-5 rounded-3xl text-center flex flex-col items-center drop-shadow-md m-2">
                <div className="font-bold text-lg">오존</div>
                <div className="mb-5">{data[dataIndex].O3}㎍/㎥</div>
                {data[dataIndex].O3 > 0 && data[dataIndex].O3 <= 0.03 && (
                  <BsEmojiSmile size={50} color="green" />
                )}
                {data[dataIndex].O3 > 0.03 && data[dataIndex].O3 <= 0.09 && (
                  <BsEmojiNeutral size={50} color="yellow" />
                )}
                {data[dataIndex].O3 > 0.09 && data[dataIndex].O3 <= 0.15 && (
                  <BsEmojiFrown size={50} color="orange" />
                )}
                {data[dataIndex].O3 > 0.15 && (
                  <BsEmojiDizzy size={50} color="red" />
                )}
              </div>
              <div className="w-[40%] h-[60%] bg-white p-5 rounded-3xl text-center drop-shadow-md m-2">
                <div className="font-bold text-lg">통합대기환경등급</div>
                <div className="h-[100%] text-lg my-[20%]">
                  {data[dataIndex].IDEX_NM}
                </div>
              </div>
              <div className="w-[80%] h-[50%] p-7">
                <AiOutlineBarChart size={30} />
                <div
                  className="hover:cursor-pointer p-5 bg-white rounded-2xl"
                  onClick={handleBtnClick}
                >
                  미세먼지 농도
                </div>
                <div
                  className="hover:cursor-pointer p-5 bg-white rounded-2xl"
                  onClick={handleBtnClick}
                >
                  초미세먼지 농도
                </div>
                <div
                  className="hover:cursor-pointer p-5 bg-white rounded-2xl"
                  onClick={handleBtnClick}
                >
                  오존 농도
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
