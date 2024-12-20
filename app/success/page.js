import Image from "next/image";
import Link from "next/link";

export default function CancelPage() {
  return (
    <div className="text-center  f">
      <div className="flex w-full justify-center animate-bounce">
        <img
          src="/success.png"
          alt="success emoji"
          width="200px"
          height="40px"
        />
      </div>
      <h1 className="text-3xl font-black">YaaY! Donation Succeed 💥</h1>
      <p className="mb-4">You can donate again if u want 😊</p>
      <Link
        href="/"
        className="bg-red-500 text-white px-5 py-2 font-bold text-xl my-4 rounded-xl"
      >
        Go To Home!
      </Link>
    </div>
  );
}
