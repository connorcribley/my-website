import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center gap-5">
        <Image
          className="rounded-full"
          src="/me.jpg"
          alt="Next.js Logo"
          width={500}
          height={500}
        />
        <h1 className="text-2xl">Welcome to my website!</h1>
        <h1 className="font-bold text-7xl">Connor Cribley&apos;s Website</h1>
      </div>
    </div>
  );
}
