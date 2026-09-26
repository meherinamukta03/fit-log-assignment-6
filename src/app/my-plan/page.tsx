
import React from "react";
import ExercisesCard from "../component/card/exercisesCard";
import MyPlanTab from "../buttton/MyPlanTab";

const MyPlanPage = () => {
    return (
        <div className="px-4 sm:px-6 md:px-8">

            {/* Header */}
            <div>
                <h2 className="display-font-Oswald text-3xl font-bold text-white sm:text-4xl">
                    MY PLAN
                </h2>

                <p className="mt-3 max-w-[430px] text-xs leading-5 text-gray-400 sm:text-sm sm:leading-6">
                    Cap of five lifts for today. Finish them, then load more.
                </p>
            </div>

            {/* Summary */}
            <ExercisesCard />

            {/* Today's Plan / Saved */}
            <MyPlanTab />

        </div>
    );
};

export default MyPlanPage;

