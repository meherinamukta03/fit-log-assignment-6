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
        "durations" | "calories" | "rating"
    >("durations");

    const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

    const sortWork = (works: IWorkout[]) => {
        const sortedWorks = [...works];

        if (sortBy === "durations") {
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

            {/* Sort */}
            <div className="mb-6 flex justify-end">
                <select
                    value={sortBy}
                    onChange={(e) =>
                        setSortBy(
                            e.target.value as
                                | "durations"
                                | "calories"
                                | "rating"
                        )
                    }
                    className="select select-success"
                >
                    <option value="durations">Durations</option>
                    <option value="calories">Calories</option>
                    <option value="rating">Rating</option>
                </select>
            </div>


            {/* Main Container */}
            <div className="overflow-hidden rounded-xl border border-[#25272c]">

                {/* Tabs */}
                <div className="flex border-b border-[#25272c]">

                    {/* Today's Plan */}
                    <button
                        onClick={() => setActiveTab("plan")}
                        className={`px-4 py-3 text-sm font-semibold transition sm:px-6 sm:py-4 ${
                            activeTab === "plan"
                                ? "border-b-2 border-white text-white"
                                : "text-gray-400 hover:text-white"
                        }`}
                    >
                       {`Today's Plan`}
                    </button>


                    {/* Saved */}
                    <button
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


                {/* Content */}
                <div className="bg-[#0d0e10] p-4 sm:p-6">


                    {/* ================= TODAY'S PLAN ================= */}

                    {activeTab === "plan" && (

                        <div>

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

                                    <h2 className="text-lg font-semibold text-white">
                                        Nothing here yet
                                    </h2>

                                    <p className="mt-1 text-sm text-gray-400">
                                        Browse the library and add a lift
                                        to get today moving
                                    </p>

                                    <Link href="/">
                                        <button className="mt-3 rounded-full bg-[#ccff00] px-5 py-2 text-sm font-semibold text-black">
                                            Go to Workouts
                                        </button>
                                    </Link>

                                </div>

                            )}

                        </div>

                    )}


                    {/* ================= SAVED ================= */}

                    {activeTab === "saved" && (

                        <div>

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

                                    <h2 className="text-lg font-semibold text-white">
                                        Nothing here yet
                                    </h2>

                                    <p className="mt-1 text-sm text-gray-400">
                                        Browse the library and save a workout
                                        to get started
                                    </p>

                                    <Link href="/">
                                        <button className="mt-3 rounded-full bg-[#ccff00] px-5 py-2 text-sm font-semibold text-black">
                                            Go to Workouts
                                        </button>
                                    </Link>

                                </div>

                            )}

                        </div>

                    )}

                </div>

            </div>

        </div>
    );
};

export default MyPlanTab;