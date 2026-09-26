
"use client";

import React, { useContext, useState } from "react";
import Link from "next/link";

import { FitLogContext } from "../context/Workout";
import { IWorkout } from "../types/WorkType";

import TodayPlanCard from "../tabComponents/TodayPlanCard";
import SavedCard from "../tabComponents/SavedCard";

const MyPlanTab = () => {
    const { plan, saved } = useContext(FitLogContext);

    const [sortBy, setSortBy] = useState<
        "duration" | "calories" | "rating"
    >("duration");

    const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

    const sortWork = (works: IWorkout[]) => {
        const sortedWorks = [...works];

        if (sortBy === "duration") {
            sortedWorks.sort((a, b) => b.duration - a.duration);
        }

        if (sortBy === "calories") {
            sortedWorks.sort(
                (a, b) => b.caloriesBurned - a.caloriesBurned
            );
        }

        if (sortBy === "rating") {
            sortedWorks.sort((a, b) => b.rating - a.rating);
        }

        return sortedWorks;
    };

    const sortedPlan = sortWork(plan);
    const sortedSaved = sortWork(saved);

    return (
        <div>

       
            <div className="mb-4 mt-8 flex items-center justify-end gap-2 sm:mt-12">
                <span className="text-xs text-gray-400 sm:text-sm">
                    Sort By
                </span>

                <select
                    value={sortBy}
                    onChange={(e) =>
                        setSortBy(
                            e.target.value as
                                | "duration"
                                | "calories"
                                | "rating"
                        )
                    }
                    className="select select-sm bg-[#15171c] text-white border border-[#25272c] sm:select-md"
                >
                    <option value="duration">Duration</option>
                    <option value="calories">Calories</option>
                    <option value="rating">Rating</option>
                </select>
            </div>

         
            <div className="overflow-hidden rounded-xl border border-[#25272c]">

                <div className="flex border-b border-[#25272c]">

                  
                    <button
                        type="button"
                        onClick={() => setActiveTab("plan")}
                        className={`px-4 py-3 text-sm font-semibold transition sm:px-6 sm:py-4 ${
                            activeTab === "plan"
                                ? "border-b-2 border-white text-white"
                                : "text-gray-400 hover:text-white"
                        }`}
                    >
                        {`Today's Plan`}
                    </button>

                  
                    <button
                        type="button"
                        onClick={() => setActiveTab("saved")}
                        className={`px-4 py-3 text-sm font-semibold transition sm:px-6 sm:py-4 ${
                            activeTab === "saved"
                                ? "border-b-2 border-white text-white"
                                : "text-gray-400 hover:text-white"
                        }`}
                    >
                        Saved
                    </button>

                </div>

                <div className="bg-[#0d0e10] p-3 sm:p-6">

                    {/* Today's Plan */}
                    {activeTab === "plan" && (
                        <>
                            {sortedPlan.length > 0 ? (
                                <div className="flex flex-col gap-3">
                                    {sortedPlan.map((work) => (
                                        <TodayPlanCard
                                            key={work.id}
                                            work={work}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <div className="py-10 text-center">

                                    <h2 className="text-lg font-semibold uppercase text-white">
                                        NOTHING HERE YET
                                    </h2>

                                    <p className="mx-auto mt-1 max-w-md text-sm text-gray-400">
                                        Browse the library and add a lift to
                                        get today moving.
                                    </p>

                                    <Link
                                        href="/"
                                        className="mt-4 inline-block rounded-full bg-[#ccff00] px-5 py-2 text-sm font-semibold text-black transition hover:bg-lime-300"
                                    >
                                        Go to Workouts
                                    </Link>

                                </div>
                            )}
                        </>
                    )}

               
                    {activeTab === "saved" && (
                        <>
                            {sortedSaved.length > 0 ? (
                                <div className="flex flex-col gap-3">
                                    {sortedSaved.map((work) => (
                                        <SavedCard
                                            key={work.id}
                                            work={work}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <div className="py-10 text-center">

                                    <h2 className="text-lg font-semibold uppercase text-white">
                                        NOTHING HERE YET
                                    </h2>

                                    <p className="mx-auto mt-1 max-w-md text-sm text-gray-400">
                                        Browse the library and save a workout
                                        to get started.
                                    </p>

                                    <Link
                                        href="/"
                                        className="mt-4 inline-block rounded-full bg-[#ccff00] px-5 py-2 text-sm font-semibold text-black transition hover:bg-lime-300"
                                    >
                                        Go to Workouts
                                    </Link>

                                </div>
                            )}
                        </>
                    )}

                </div>
            </div>
        </div>
    );
};

export default MyPlanTab;

