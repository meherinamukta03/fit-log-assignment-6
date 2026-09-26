"use client";

import Image from "next/image";
import { FaRegClock, FaFire, FaStar } from "react-icons/fa6";

import { IWorkout } from "@/app/types/WorkType";



import ViewDetailsButton from "./ViewDetailsButton";
import RemoveButton from "./RemoveButton";

interface IProps {
    work: IWorkout;
}

const SavedCard = ({ work }: IProps) => {
    return (
        <div className="flex w-full items-center gap-3 rounded-xl border border-[#25272c] bg-[#15171c] p-3">

            {/* Image */}
            <div className="relative h-[65px] w-[95px] shrink-0 overflow-hidden rounded-lg">
                <Image
                    src={work.image}
                    alt={work.name}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Info */}
            <div className="flex-1">

                <h3 className="text-xs font-bold uppercase text-white">
                    {work.name}
                </h3>

                <p className="text-[10px] text-gray-500">
                    {work.equipment}
                </p>

                <div className="mt-2 flex gap-3 text-[10px] text-gray-300">

                    <span className="flex items-center gap-1">
                        <FaRegClock className="text-[#ccff00]" />
                        {work.duration} min
                    </span>

                    <span className="flex items-center gap-1">
                        <FaFire className="text-[#ccff00]" />
                        {work.caloriesBurned} kcal
                    </span>

                    <span className="flex items-center gap-1">
                        <FaStar className="text-[#ccff00]" />
                        {work.rating}
                    </span>

                </div>
            </div>

            {/* Buttons */}
            <div className="mt-3 flex w-full items-center justify-end gap-2 border-t border-[#25272c] pt-3">
                <ViewDetailsButton id={work.id} />

                <RemoveButton
                    id={work.id}
                    type="saved"
                />
            </div>

        </div>
    );
};

export default SavedCard;