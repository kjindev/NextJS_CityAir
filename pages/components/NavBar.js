import Link from "next/link";

export default function NavBar() {
  return (
    <div className="fixed z-[2] bg-gray-300 w-[100%] h-[50px] flex">
      <Link href="/">
        <div className="mx-3 hover:cursor-pointer">Home</div>
      </Link>
      <Link href="/Weather">
        <div className="mx-3 hover:cursor-pointer">Weather</div>
      </Link>
      <Link href="/Culture">
        <div className="mx-3 hover:cursor-pointer">Culture</div>
      </Link>
      <Link href="/Parking">
        <div className="mx-3 hover:cursor-pointer">Parking</div>
      </Link>{" "}
      <Link href="/Login">
        <div className="mx-3 hover:cursor-pointer">LOG IN</div>
      </Link>
    </div>
  );
}
