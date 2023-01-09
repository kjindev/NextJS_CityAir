import Link from "next/link";
import { BiHomeAlt, BiNotepad } from "react-icons/bi";
import { BsPinMapFill } from "react-icons/bs";

export default function NavBar() {
  return (
    <div className="fixed bg-gray-300 w-[5%] h-[100%]">
      <Link href="/">
        <BiHomeAlt size={30} className="w-[100%] hover:cursor-pointer mt-5" />
      </Link>
      <Link href="/Culture">
        <BiNotepad size={30} className="w-[100%] hover:cursor-pointer mt-5" />
      </Link>
    </div>
  );
}
