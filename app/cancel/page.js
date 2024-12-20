import Image from "next/image";
import Link from "next/link";

export default function CancelPage() {
  return (
    <div className="text-center  f">
      <div className="flex w-full justify-center animate-spin">
        <img src="/failed.webp" alt="failed emoji" width="40px" height="40px" />
      </div>
      <h1 className="text-3xl font-black">Oops! Donation Canceled T_T</h1>
      <p className="mb-4">You can try again at any time! 😊</p>
      <Link
        href="/"
        className="bg-red-500 text-white px-5 py-2 font-bold text-xl my-4 rounded-xl"
      >
        Go To Donate!
      </Link>
    </div>
  );
}
