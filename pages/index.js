import { useEffect, useRef, useState } from "react";
import Seo from "./components/Seo";
import Dust from "./Dust";

export default function Home() {
  return (
    <div className="flex bg-gray-100 w-[100%] h-[100vh]">
      <Seo title="메인" />
    </div>
  );
}
