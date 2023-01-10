import Seo from "./components/Seo";
import Main from "./Main";
import firebaseFunction from "../common/firebaseFunction";

export default function Home() {
  return (
    <div className="w-[100%]">
      <Seo title="홈" />
      <Main />
    </div>
  );
}
