import { IWorkout } from '@/app/types/WorkType';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface iWorkProp{
    work:IWorkout
}





const WorkCard = ({work}:iWorkProp) => {
    return (
        <button>
        <Link href={`/works/${work.id}`}>
       <div className="overflow-hidden rounded-xl border border-[#292c32] bg-[#15171c] sm:rounded-2xl">

      {/* Image */}
      <Image
        src={work.image}
        alt={work.name}
        width={500}
        height={300}
        className="h-48 w-full object-cover sm:h-56"
      />

      {/* Content */}
      <div className="p-4 sm:p-6 md:p-7">

        {/* Muscle Groups */}
        <div className="mb-4 flex flex-wrap gap-2">
          {work.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-[#c6ff00] px-2.5 py-1 text-[10px] font-bold text-black sm:px-3 sm:text-xs"
            >
              {muscle.toUpperCase()}
            </span>
          ))}
        </div>

        {/* Name */}
        <h2 className="text-lg font-bold text-white sm:text-xl">
          {work.name.toUpperCase()}
        </h2>

        {/* Equipment */}
        <p className="mt-1 text-xs text-gray-400 sm:text-sm">
          {work.equipment}
        </p>

        {/* Divider */}
        <div className="my-4 border-t border-[#292c32] sm:my-5" />

        {/* Info */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 sm:gap-5 sm:text-sm">
          <span>◷ {work.duration} min</span>
          <span>♥ {work.caloriesBurned} kcal</span>
          <span>☆ {work.rating}</span>
        </div>

      </div>
    </div>
    </Link>
    </button>
    );
};

export default WorkCard;