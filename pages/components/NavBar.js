import Link from "next/link";
import { BiHomeAlt, BiBarChart } from "react-icons/bi";
import { BsFillCloudSunFill } from "react-icons/bs";

export default function NavBar() {
  return (
    <div className="fixed bg-gray-300 w-[5%] h-[100%]">
      <Link href="/">
        <BiHomeAlt size={30} className="w-[100%] hover:cursor-pointer mt-5" />
      </Link>
      <Link href="/Weather">
        <BsFillCloudSunFill
          size={30}
          className="w-[100%] hover:cursor-pointer mt-5"
        />
      </Link>
      <Link href="/Dust">
        <BiBarChart size={30} className="w-[100%] hover:cursor-pointer mt-5" />
      </Link>
    </div>
  );
}
