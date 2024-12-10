"use client";
import BaseButton from "@/components/BaseButton";

export default function Home() {
  const handleClick = () => {
    console.log("Start Ordering is clicked !");
  };
  return (
    <div className=" bg-slate-100 h-screen flex justify-start items-center text-3xl relative">
      <img
        src="/assets/cover-1.jpg"
        alt="Cover"
        className="w-full object-cover"
      />
      <div className="w-full h-full absolute flex justify-center items-center flex-col gap-12">
        <h2 className="text-4xl ">Explore the world of deliciousness</h2>
        <BaseButton
          text="Start Ordering"
          colorType="secondary"
          styleType="outline"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
