import Image from "next/image";
import banner from "@/assets/banner.png";

const Hero = () => {
  return (
    <section className="bg-[#0d0e10] px-1 pt-8 sm:px-4">
      <div className="flex w-full items-center gap-3 rounded-xl border border-[#25272c] bg-[#1c1e22] p-4 sm:p-4">

        {/* Left Side */}
        <div className="px-8">
          <p className="mb-3 text-[9px] font-bold tracking-widest text-lime-400 sm:text-[10px]">
            WORKOUT LIBRARY
          </p>

          <h1 className="text-2xl font-black uppercase leading-tight text-white sm:text-3xl md:text-5xl">
            TRAIN WITH INTENT. LOG
            <br />
            EVERY SET.
          </h1>

          <p className="mt-3 max-w-[430px] text-xs leading-5 text-gray-400 sm:text-sm sm:leading-6">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today plan, and watch the weeks work add up.
          </p>

          <button className="mt-4 rounded-md bg-lime-400 px-4 py-2 text-[9px] font-bold uppercase text-black hover:bg-lime-300 sm:text-[10px]">
            Browse Workouts
          </button>
        </div>

        {/* Right Side */}
        <div className="ml-auto w-24 shrink-0 sm:w-32 md:w-44 lg:w-52">
          <Image
            src={banner}
            alt="Workout"
            width={260}
            height={260}
            className="h-auto w-full"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;