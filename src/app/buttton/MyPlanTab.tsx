
"use client";

import React, { useContext, useState } from "react";
import { FitLogContext } from "../context/Workout";
import { IWorkout } from "../types/WorkType";
import TabCard from "../component/card/TabCard";
import Link from "next/link";

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
        } else if (sortBy === "calories") {
            sortedWorks.sort(
                (a, b) => b.caloriesBurned - a.caloriesBurned
            );
        } else if (sortBy === "rating") {
            sortedWorks.sort((a, b) => b.rating - a.rating);
        }

        return sortedWorks;
    };

    const sortedPlan = sortWork(plan);
    const sortedSaved = sortWork(saved);

    return (
        <div>
            {/* Sort Dropdown */}
            <div className="flex justify-end mb-6">
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

            {/* Main Tab Container */}
            <div className="border border-[#25272c] rounded-xl overflow-hidden">

                {/* Tabs */}
                <div className="flex justify-start border-b border-[#25272c]">

                    {/* Today's Plan */}
                    <button
                        onClick={() => setActiveTab("plan")}
                        className={`py-3 sm:py-4 px-4 sm:px-6 text-sm sm:text-base font-semibold transition ${
                            activeTab === "plan"
                                ? "text-white border-b-2 border-white"
                                : "text-gray-400 hover:text-white"
                        }`}
                    >
                        {`Today's Plan`}
                    </button>

                    {/* Saved */}
                    <button
                        onClick={() => setActiveTab("saved")}
                        className={`py-3 sm:py-4 px-4 sm:px-6 text-sm sm:text-base font-semibold transition ${
                            activeTab === "saved"
                                ? "text-white border-b-2 border-white"
                                : "text-gray-400 hover:text-white"
                        }`}
                    >
                        Saved
                    </button>
                </div>

                {/* Tab Content */}
                <div className="p-4 sm:p-6 bg-[#0d0e10]">

                    {/* Today's Plan */}
                    {activeTab === "plan" && (
                        <>
                            {sortedPlan.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                    {sortedPlan.map((work) => (
                                        <TabCard
                                            key={work.id}
                                            work={work}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center">
                                    <h2 className="text-center font-semibold text-lg">
                                        Nothing here yet
                                    </h2>

                                    <p className="text-gray-400 sm:text-sm">
                                        Browse the library and add a lift to
                                        get today moving
                                    </p>
                                    <Link href='/src/app/component/home/Library.tsx'>
                                   <button className=" text-black bg-[#ccff00] rounded-3xl border-3"> Go to Workouts</button>
                                    </Link>
                                </div>
                            )}
                        </>
                    )}

                    {/* Saved */}
                    {activeTab === "saved" && (
                        <>
                            {sortedSaved.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                    {sortedSaved.map((work) => (
                                        <TabCard
                                            key={work.id}
                                            work={work}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center">
                                    <h2 className="text-center font-semibold text-lg">
                                        Nothing here yet
                                    </h2>

                                    <p className="text-gray-400 sm:text-sm">
                                        Browse the library and save a workout
                                        to get started
                                    </p>
                                    <Link href='/src/app/component/home/Library.tsx'>
                                   <button className=" text-black font-semibold bg-[#bee523] rounded-4xl border-3 p-2 mt-1"> Go to Workouts</button>
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
