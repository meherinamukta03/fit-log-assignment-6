
"use client";

import { useContext } from "react";
import { FitLogContext } from "@/app/context/Workout";

const ExercisesCard = () => {
    const { plan } = useContext(FitLogContext);

    const exercises = plan.length;

    const minutes = plan.reduce(
        (acc, curr) => acc + (curr.duration || 0),
        0
    );

    const calories = plan.reduce(
        (acc, curr) => acc + (curr.caloriesBurned || 0),
        0
    );

    return (
        <div className="mt-4 flex w-full items-stretch rounded-2xl border border-gray-800 bg-[#0f1117] p-4 sm:p-5 text-white">

            {/* Exercises */}
            <div className="flex-1">
                <p className="text-[10px] sm:text-xs text-gray-400">
                    Exercises
                </p>

                <p className="text-2xl sm:text-3xl font-bold text-[#ccff00]">
                    {exercises}
                </p>
            </div>

            {/* Divider */}
            <div className="border-l border-gray-800"></div>

            {/* Minutes */}
            <div className="flex-1 pl-4 sm:pl-6 md:pl-10">
                <p className="text-[10px] sm:text-xs text-gray-400">
                    Minutes
                </p>

                <p className="text-2xl sm:text-3xl font-bold">
                    {minutes}
                </p>
            </div>

            {/* Divider */}
            <div className="border-l border-gray-800"></div>

            {/* Calories */}
            <div className="flex-1 pl-4 sm:pl-6 md:pl-10">
                <p className="text-[10px] sm:text-xs text-gray-400">
                    Calories
                </p>

                <p className="text-2xl sm:text-3xl font-bold">
                    {calories}
                </p>
            </div>

        </div>
    );
};

export default ExercisesCard;
